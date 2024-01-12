import React from 'react'
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const styles = StyleSheet.create({
    main:{
        flex:1
    },
    button:{
        backgroundColor:'#bbb',
        color:'white',
        fontSize:24,
        textAlign:'center',
        padding:8,
        margin:10,
        borderRadius:10,
        // shadow color and elevatin sath me dege
        shadowColor:'black',
        elevation:10,
        shadowOpacity:1
    },
    success:{
        backgroundColor:'green'
    },
    primary:{
        backgroundColor:'blue'
    },
    warning:{
        backgroundColor:'gold'
    },
    error:{
        backgroundColor:'red'
    }
})

const StyledButton = () => {
  return (
    <View style={styles.main}>
        <Text>Styled Button with touchable hightlights</Text>
        <Button title='built button'/>
        <TouchableHighlight>
            <Text style={[styles.button,styles.success]}>Success</Text>
        </TouchableHighlight>
        <TouchableHighlight>
            <Text style={[styles.button,styles.primary]}>Primary</Text>
        </TouchableHighlight>
        <TouchableHighlight>
            <Text style={[styles.button,styles.warning]}>Warning</Text>
        </TouchableHighlight>
        <TouchableHighlight>
            <Text style={[styles.button,styles.error]}>Error</Text>
        </TouchableHighlight>
        <TouchableHighlight>
            <Text style={styles.button}>Button</Text>
        </TouchableHighlight>
    </View>
  )
}

export default StyledButton