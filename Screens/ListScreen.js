import { Image,StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import  Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons'; 
import CurrentMusic from '../Components/CurrentMusic';



export default function ListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Popluar Albums</Text>
      <View style={styles.imageContainer}>
        <ScrollView
        horizontal={true}
        >
            <Image source={require("../assets/Jackson.jpeg")} style={styles.Image}/>
            <Image source={require("../assets/jackson2.jpeg")} style={styles.Image}/>
            <Image source={require("../assets/jackson3.jpeg")} style={styles.Image}/>
            <Image source={require("../assets/jackson4.jpeg")} style={styles.Image}/>
            <Image source={require("../assets/jackson5.jpeg")} style={styles.Image}/>
            <Image source={require("../assets/jackson6.jpeg")} style={styles.Image}/> 
        </ScrollView>
      </View>

      <View style={styles.arrows}>
      <AntDesign name="arrowleft" size={24} color="white" style={{marginRight:300}}/>
      <AntDesign name="arrowright" size={24} color="white" />
      </View>

      <Text style={styles.Text}>Top 15</Text>

      <View style={styles.imageContainer}>
      <ScrollView
        horizontal={true}
        >
        <Image source={require("../assets/music1.png")} style={styles.Image}/>
        <Image source={require("../assets/music2.jpeg")} style={styles.Image}/>
        <Image source={require("../assets/music3.jpeg")} style={styles.Image}/>
        <Image source={require("../assets/music4.jpeg")} style={styles.Image}/>
        <Image source={require("../assets/music5.jpeg")} style={styles.Image}/>
        </ScrollView>
      </View>

      <View style={styles.arrows}>
      <AntDesign name="arrowleft" size={24} color="white" style={{marginRight:300}}/>
      <AntDesign name="arrowright" size={24} color="white" />
      </View>

      <Text style={styles.Text}>Artists</Text>

      <View style={styles.artistimageContainer}>
      <ScrollView
        horizontal={true}
        >
        <Image source={require("../assets/art1.jpeg")} style={styles.Imageart}/>
        <Image source={require("../assets/art2.jpeg")} style={styles.Imageart}/>
        <Image source={require("../assets/art3.jpeg")} style={styles.Imageart}/>
        {/* <Image source={require("../assets/art4.jpeg")} style={styles.Imagerart}/> */}
        <Image source={require("../assets/music5.jpeg")} style={styles.Imageart}/>
        </ScrollView>
      </View>
        <CurrentMusic/>
    </View>
  )
}

const styles = StyleSheet.create({
    arrows:{
        flexDirection:"row"
    },
    container:{
        backgroundColor:"#262626",
        flex:1,
       alignItems:"center",
       paddingTop:Constants.statusBarHeight,
    },
    Image:{
        height:120,
        width:120,
        margin:5,
        borderRadius:10
    },
    Imageart:{
        height:110,
        width:110,
        borderRadius:55,
        marginRight:4
    },
    imageContainer:{
        flexDirection:"row",
        // marginLeft:5,
        marginRight:10
       
    },
    artistimageContainer:{
        flexDirection:"row",
        // marginLeft:5,
        marginRight:10,
        borderRadius:50
    },

        
    Text:{
        fontSize:30,
        color:"white",
        padding:12        
    }
})