import React from 'react'
import { Text, View , Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    text:{
        color:Platform.OS=='android'?'orange':'blue',
        fontSize:25
    },
    version:{
        fontSize:25
    }
})

const PlateForm = () => {
  return (
    <View>
        <Text>Type of Plateform : {Platform.OS} </Text>
        {
            Platform.OS == 'android' ? 
            <View style={{backgroundColor:'green',height:100,width:100}}></View>
            :
            <View style={{backgroundColor:'red',height:'100%',width:'100%'}}></View>
        }
        <Text style={styles.text}>Hello</Text>
        <Text style={styles.version}>Details : {JSON.stringify(Platform)}</Text>
        <Text style={styles.version}>Details Version : {JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>
    </View>
  )
}

export default PlateForm