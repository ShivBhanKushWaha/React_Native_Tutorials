import React, { useState } from 'react'
import { View,Text,Button, TextInput } from 'react-native'
const Login = (props) => {
    // passing the data to another page 
    // const name = 'shivbhan';
    const age = 21;
    const [name,setName] = useState("")
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:28}}>Login screen</Text>
            <TextInput style={{fontSize:20,backgroundColor:'#fff',borderColor:'Black',borderWidth:2,padding:5,margin:5}} 
            onChangeText={(text) =>setName(text)} placeholder='Enter name'/>
            <Button title='Go To Home' 
            onPress={() => props.navigation.navigate("Home",{name,age})}/>
        </View>
    )
}

export default Login