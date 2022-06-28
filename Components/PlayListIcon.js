import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 




export default function ({children,onPress}) {
  return (
    <TouchableOpacity onPress={onPress}style={styles.conatiner}>
        <View style={{justifyContent:"center",marginLeft:20}}>
          <SimpleLineIcons name="playlist" size={24} color="white" />
        </View>
        <Text style={{flex:1,padding:10,fontSize:20,fontWeight:"bold",marginLeft:20,color:"white"}}>{children}</Text>
      <Entypo name="chevron-right" size={24} color="white" style={{justifyContent:"center",marginRight:20}} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    conatiner:{
        top:20,
        padding:10,
        flexDirection:"row",
        
        
    }
})