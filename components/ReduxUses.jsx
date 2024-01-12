import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ReduxUses = () => {
  return (
    <View style={styles.main}>
        <Text>Uses Of Redux</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    backgroundColor:'red',
    padding:10,
    margin:10,
    alignItems:'center',
  }
})

export default ReduxUses