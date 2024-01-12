import React ,{ useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    radioRapper:{
        flexDirection:'row',
        alignItems:"center",
    },
    radio:{
        height:40,
        width:40,
        borderColor:'skyblue',
        borderWidth:2,
        borderRadius:20,
        margin:10,
    },
    radioText:{
        fontSize:20,
        color:'skyblue',
    },
    radioBG:{
        backgroundColor:'skyblue',
        shadowColor:'skyblue',
        elevation:5,
        height:28,
        width:28,
        borderRadius:20,
        margin:4,
    }
})
const DynamicRadioButton = () => {
    const skills = [
        {
            id:1,
            name:'C++'
        },
        {
            id:2,
            name:'JAVA'
        },
        {
            id:3,
            name:'NODEJS'
        },
        {
            id:4,
            name:'NEXTJS'
        },
        {
            id:5,
            name:'REACTJS'
        },
    ]
    const [selectRadio,setSelectedRadio] = useState(0);
  return (
    <View style={styles.main}>
        {
            skills.map((item,index) => 
            <TouchableOpacity key={index} onPress={() => setSelectedRadio(item.id)}>
                <View style={styles.radioRapper}>
                    <View style={styles.radio}>
                        {
                            selectRadio == item.id ? <View style={styles.radioBG}></View> : null
                        }
                    </View>
                    <Text style={styles.radioText}>{item.name}</Text>
                </View>
           </TouchableOpacity>)
        }
    </View>
  )
}

export default DynamicRadioButton