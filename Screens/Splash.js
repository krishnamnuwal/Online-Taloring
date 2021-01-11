import * as React from 'react'
import {Text,
    View,
    Button,
    TouchableOpacity,
    Dimensions,
    StatusBar,
    Image,
    StyleSheet
}from 'react-native'

import * as Animatable from 'react-native-animatable'
import {LinearGradient} from 'expo-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useTheme } from '@react-navigation/native'


const SplashScreen =({navigation})=>{
    const {colors}=useTheme();
    return(
        <View style={styles.container}>
            <StatusBar  backgroundColor="#009387" barStyle="light-content" />
            <View style={styles.header}>
                <Animatable.Image
                animation="bounceIn"
                duraton="4000"
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
                />
                </View>
                <Animatable.View
                    style={[styles.footer,{
                        backgroundColor:colors.background
                    }]}
                    animation="fadeInUpBig"
                >
                    <Text style={[styles.title,{
                        color:colors.text
                    }]}>Stay connected with us!</Text>
                    <Text style={styles.text}>Sign in with your account</Text>
                    <View style={styles.button}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Sign')}>
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                    <Text style={styles.textSign}>Get Started</Text>    
                    <MaterialIcons
                        name='navigate-next'
                        color='#fff'
                        size={20}
                    
                    />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
            </Animatable.View>
    </View>
    )
}



export default SplashScreen
const {height} = Dimensions.get("screen");
const height_logo = height * 0.38;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#009387'
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:height_logo,
        height:height_logo
    },
    footer:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30,
      
    },
    title:{
        color:'#05375a',
        fontSize:30,
        fontWeight:'bold'
    },
    text:{
        color:'grey',
        paddingTop:5
    },
    button:{
        alignItems:'flex-end',
        marginTop:30
    },
    signIn:{
        width:150,
        height:40,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    textSign:{
        color:'white',
        fontWeight:'bold'
    }



})
















