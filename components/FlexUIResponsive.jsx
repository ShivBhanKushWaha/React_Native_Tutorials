import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styels = StyleSheet.create({
  mainBox:{
    flex:1,
    // flexDirection:"row"
  },
  box1:{
    flex:2,
    backgroundColor:'red',
    flexDirection:'row'
  },
  innerBox1:{
    flex:1,
    backgroundColor:'skyblue',
    margin:10
  },
  box2:{
    flex:1,
    backgroundColor:'green'
  },
  innerBox2:{
    flex:1,
    backgroundColor:'orange',
    margin:10
  },
  box3:{
    flex:1,
    backgroundColor:'blue'
  },
  innerBox3:{
    flex:1,
    backgroundColor:'lightgreen',
    margin:10
  },
})
const FlexUIResponsive = () => {
  return (
    // Flex UI Responsive
    <View style={styels.mainBox}>
        <View style={styels.box1}>
          <View style={styels.innerBox1}></View>
          <View style={styels.innerBox2}></View>
          <View style={styels.innerBox3}></View>
        </View>
        <View style={styels.box2}></View>
        <View style={styels.box3}></View>
    </View>
  )
}

// flex is the most use able 1 means har ko barabar me bat dega
// flex : 1
// flex : 1  
// flex 2 yah lega 66.67%
// flex 1 yah lega 33.33 %
export default FlexUIResponsive