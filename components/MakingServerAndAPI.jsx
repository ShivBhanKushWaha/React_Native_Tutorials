import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'

const MakingServerAndAPI = () => {

    const [jsonData,setJsonData] = useState(undefined);
    const [loader,setLoader] = useState(false);

    const GETJSONAPI = async () => {
        setLoader(true)
        // change the url and connect the emulator and local host
        // const url = "http://192.168.99.101:3000/users";
        const url = "http://10.0.2.2:3000/users";
        const data = await fetch(url);
        const result = await data.json();
        setJsonData(result);
        setLoader(false);
    }

    useEffect(() => {
        GETJSONAPI();
    },[])

  return (
    <ScrollView>
        {
            jsonData ? jsonData.map((item) => {
                    return (
                    <View style={{justifyContent:'center',alignItems:'center',padding:10,margin:10,borderBottomColor:'black',borderBottomWidth:1}}>
                        <Text style={{fontSize:26}}>{item.name}</Text>
                        <Text style={{fontSize:26}}>{item.email}</Text>
                        <Text style={{fontSize:26}}>{item.age}</Text>
                    </View>)
            })
            : 
            loader ? <ActivityIndicator size={48} color={"red"}/> : <Text>No Json API</Text>
        }
    </ScrollView>
  )
}

export default MakingServerAndAPI