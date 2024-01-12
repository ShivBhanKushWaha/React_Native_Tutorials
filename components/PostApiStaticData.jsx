import React, { useState } from 'react'
import { ActivityIndicator, Button, Text, View } from 'react-native'

const PostApiStaticData = () => {

    const [loader,setLoader] = useState(false);
    const data = {
        name:"kushwaha",
        age:23,
        email:"savi@gmail.com"
    }
    const saveAPIData = async () => {
        setLoader(true)
        const url = "http://10.0.2.2:3000/users";
        let result = await fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        result = result.json();
        console.warn(result);
        setLoader(false)
    }

  return (
    <View>
        <Text style={{fontSize:24,textAlign:'center',padding:10,margin:10}}>Post Data using API Static Data</Text>
        {
            loader ? <ActivityIndicator color='red' size={50}/> : <Button title='Save Data' onPress={saveAPIData}/>
        }
        
    </View>
  )
}

export default PostApiStaticData