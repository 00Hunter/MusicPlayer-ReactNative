import { StyleSheet, View } from 'react-native'
import React from 'react'
import  Constants from 'expo-constants';

import PlayListIcon from '../Components/PlayListIcon';
import AlumbIcon from '../Components/AlumbIcon';

export default function LibraryScreen() {
  return (
    <View style={styles.container}>
        <PlayListIcon children={"PlayLists"}/>
        <AlumbIcon children={"Albums"}/>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    backgroundColor:"#262626",
    flex:1,
   alignItems:"center",
   paddingTop:Constants.statusBarHeight,
},

})