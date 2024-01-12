import React from 'react'
import { Button, Pressable, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  main:{
    fontSize:24,
    flex:1,
    justifyContent:'center'
  },
  pressableBtn:{
    backgroundColor:'blue',
    color:'#fff',
    padding:10,
    margin:10,
    borderRadius:10,
    fontSize:20,
    textAlign:'center',
    shadowColor:10,
    elevation:5
  }
})

const PressAble = () => {
  return (
    <View style={styles.main}>
      <Text style={{fontSize:15,color:'black'}}>Pressable button onpress opressin onpressout long press use at a time</Text>
      <Pressable onPress={() => console.warn('normal on press')}>
        <Text style={styles.pressableBtn}>Normal Press</Text>
      </Pressable>
      <Pressable delayLongPress={1000} onLongPress={() => console.warn("long press")}>
        <Text style={styles.pressableBtn}>Long Press 500 mili sec</Text>
      </Pressable>
      <Pressable onPressIn={() => console.warn('Press In')}>
        <Text style={styles.pressableBtn}>Press In</Text>
      </Pressable>
      <Pressable onPressOut={() => console.warn("press out")}>
        <Text style={styles.pressableBtn}>Press out</Text>
      </Pressable>
    </View>
  )
}

export default PressAble;