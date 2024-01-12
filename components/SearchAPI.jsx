import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

const SearchAPI = () => {

    const [userData,setUserData] = useState([])
    const searchUser = async (text) => {
        const url = `http://10.0.2.2:3000/users?q=${text}`
        const result = await fetch(url);
        const data = await result.json();

        if(data){
            setUserData(data)
        }
    }

  return (
    <View style={{flex:1}}>
        <TextInput style={{borderColor:'lightred',borderWidth:1,fontSize:20,margin:15,padding:10}} 
        placeholder='Search Users' onChangeText={(text) => searchUser(text)} />
        
        {
            userData.length ? userData.map((item) => <View style={{padding:10,flexDirection:'row',
            justifyContent:'space-between',backgroundColor:'gray',margin:10}}>
                <Text style={{fontSize:20}}>{item.name}</Text>
                <Text style={{fontSize:20}}>{item.age}</Text>
                <Text style={{fontSize:20}}>{item.email}</Text>
            </View>)
            : <Text style={{fontSize:20,padding:10,margin:10,textAlign:'center'}}>Result Not Found</Text>
        }
    </View>
  )
}

export default SearchAPI