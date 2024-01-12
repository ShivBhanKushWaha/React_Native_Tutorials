import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-end'
    },
    modal:{
        flex:1,
        backgroundColor:'rgba(50,50,50,0.5)',
        justifyContent:'center',
        alignItems:'center'
    },
    body:{
      backgroundColor:'#fff',
      height:300,
      width:300,
      padding:20,
      justifyContent:'flex-end',
      borderRadius:10
    },
    text:{
      flex:1,
      color:"#000",
      textAlignVertical:'center',
      textAlign:'center'
    }
})

const CustomeModal = () => {
  const [show,setShow] = useState(false);
  return (
    <View style={styles.container}>
        {
          show ? 
          <View style={styles.modal}>
            <View style={styles.body}>
              <Text style={styles.text}>Some Text</Text>
              <Button title='Close' onPress={() => setShow(!show)}/>
            </View>
          </View> 
          : null
        }
        {
          show ? null : <Button title='Open Dialog' onPress={() => setShow(!show)}/>
        }
    </View>
  )
}

export default CustomeModal