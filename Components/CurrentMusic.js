import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 


export default function CurrentMusic() {
  return (
    <View style={{top:12 ,height:110,width:"100%",backgroundColor:"#737373",flexDirection:"row"}}>
        <View style={{margin:10}}> 
        <Image source={require("../assets/art2.jpeg")} style={{height:70,width:70,borderRadius:20}}/>
        </View>
        <View style={{flex:1,}}>
        <Text style={{top:20,fontSize:15,fontWeight:"bold",color:"white"}}>Some Music - By ABC </Text>
        <Text style={{top:20,fontSize:14,color:"white"}}>Movie</Text>
        </View>
        
        <View style={{alignSelf:"flex-end",marginVertical:20,flexDirection:"row",marginRight:10}}>
        <AntDesign name="stepbackward" size={30} color="white" style={{marginRight:20}}/>
        <AntDesign name="caretright" size={30} color="white" style={{marginRight:15}}/>
        <AntDesign name="stepforward" size={30} color="white" style={{marginRight:10}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})