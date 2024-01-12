import React, { useState } from 'react'
import { Text, View ,StatusBar, Button,StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center'
  },
})
const Statusbar = () => {
    const [hide,setHide] = useState(false)
    const [style,setStyle] = useState("default")
  return (
    <View style={styles.container}>
        <Text>Status Bar</Text>
        <StatusBar backgroundColor={'blue'} barStyle={style} hidden={hide}/>
        <Button title='Togle Status Bar' onPress={() => setHide(!hide)}/>
        <Button title='Update Style' onPress={() => setStyle("dark-content")}/>
    </View>
  )
}

export default Statusbar