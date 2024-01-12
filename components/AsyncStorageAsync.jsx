import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
// yha storage keval async pr hi kam karta hat
const AsyncStorageAsync = () => {

  const [name,setName] = useState('')
  // without removing the name its still save while we cant remove 
  // set data
  const setData = async () => {
    await AsyncStorage.setItem('user',"shivbhan kushwha")
  }
  // get data
  const getData = async () => {
    const name = await AsyncStorage.getItem('user');
    console.warn(name)
    setName(name)
  }

  // remove data
  const removeData = async () => {
    await AsyncStorage.removeItem('user');
    setName('')
  }

  return (
    <View>
      <Text style={{textAlign:'center',padding:10,margin:10}}>Async Storage with react native</Text>
      <View style={{padding:10}}>
        <Button title='Set Data' onPress={setData}/>
      </View>
      <View style={{padding:10}}>
        <Button title='Get Data' onPress={getData}/>
      </View>
      <View style={{padding:10}}>
        <Button title='remove Data' onPress={removeData}/>
      </View>

      <View style={styles.box}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box:{
    backgroundColor:'green',
    height:300,
    width:300,
    margin:20,
    padding:10,
    borderColor:'red',
    borderWidth:2
  }
})

export default AsyncStorageAsync