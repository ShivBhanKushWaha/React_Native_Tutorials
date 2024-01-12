import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    radioText:{
        fontSize:20,
        color:'skyblue'
    },
    radio:{
        height:40,
        width:40,
        borderColor:'skyblue',
        borderWidth:2,
        borderRadius:20,
        margin:10,
    },
    radioRapper:{
        flexDirection:'row',
        alignItems:"center",
    },
    radioBG:{
        backgroundColor:'skyblue',
        shadowColor:'skyblue',
        elevation:5,
        height:28,
        width:28,
        borderRadius:20,
        margin:4
    }
})


const RadioButton = () => {
    const [selectRadio,setSelectedRadio] = useState(0);
  return (
    <View style={styles.main}>
        <Text>Touchable opacity radio button</Text>
        <TouchableOpacity onPress={() => setSelectedRadio(1)}>
            <View style={styles.radioRapper}>
                <View style={styles.radio}>
                    {
                        selectRadio == 1 ? <View style={styles.radioBG}></View> : null
                    }
                </View>
                <Text style={styles.radioText}>Radio 1</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedRadio(2)}>
            <View style={styles.radioRapper}>
                <View style={styles.radio}>
                    {
                        selectRadio == 2 ? <View style={styles.radioBG}></View> : null
                    }
                </View>
                <Text style={styles.radioText}>Radio 2</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default RadioButton