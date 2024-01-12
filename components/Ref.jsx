import React, { useRef } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const Ref = () => {

    // ref ka use attribut ko get krne me hota hao styling bhi kr skte hai jaise focus hover etc aut value bhi get kr skte
    const input = useRef();

    const updateInput = () => {
        console.warn('warn')
        // isko krne se input ka focus usi input me rhega 
        input.current.focus();
        input.current.setNativeProps({
            fontSize:20,
            backgroundColor:'red'
        })
    }

  return (
    <View style={styles.container}>
        <TextInput ref={input} style={styles.input} placeholder='Enter Name'/>
        <TextInput style={styles.input} placeholder='Enter Password'/>
        <View style={{padding:10}}>
            <Button title='Update Input' onPress={updateInput}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
    input:{
        borderColor:'blue',
        backgroundColor:'#fff',
        borderWidth:2,
        margin:10,
        padding:10
    }
})

export default Ref