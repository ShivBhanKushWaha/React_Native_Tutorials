import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NavigationStackDrawerTab = () => {
  return (
    <View style={styles.main}>
        <Text style={styles.heading}>Navigation Stack Drawer and Tab</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#ffedef',
        backgroundColor:'lightblue',
    },
    heading:{
        fontSize:20,
        textAlign:'center',
        backgroundColor:'green',
        color:'#fff',
        padding:10,
        margin:5
    }
})

export default NavigationStackDrawerTab