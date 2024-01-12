import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'

const ApiCalling = () => {

    const [data,setData] = useState(undefined)
    const [wholeData,setwholeData] = useState([])

    // const getSingleAPIData = async () => {
    //     // api Call single data
    //     const url = "https://jsonplaceholder.typicode.com/posts/1";
    //     const data = await fetch(url);

    //     const result = await data.json();
    //     // console.warn(result);
    //     setData(result)
    // }

    const getWholeData = async () => {
        // whole data calling
        const url = "https://jsonplaceholder.typicode.com/posts";
        const data = await fetch(url);

        const result = await data.json();
        // console.warn(result);
        setwholeData(result)
    }

    useEffect(() => {
        // getSingleAPIData()
        getWholeData();
    },[])
    // blank array me keval ek bar call hoga 

  return (
    <ScrollView>
        <Text style={{fontSize:28,textAlign:'center'}}>ApiCalling</Text>
        {/* {
            data ? 
            <View style={{backgroundColor:'blue',justifyContent:'center',alignItems:'center',padding:10,margin:10}}>
                <Text style={{fontSize:24}}>ID : {data.id}</Text>
                <Text style={{fontSize:24}}>UserId : {data.userId}</Text>
                <Text style={{fontSize:24}}>Title : {data.title}</Text>
                <Text style={{fontSize:24}}>Body : {data.body}</Text>
            </View>
            : null
        } */}

        {
            wholeData.length ? wholeData.map((item) => {
                return (
                    <View style={{margin:10,padding:10,borderBottomColor:'gray',borderBottomWidth:1,backgroundColor:'lightgreen'}}>
                        <Text style={{fontSize:24,backgroundColor:'#ddd',textAlign:'center'}}>ID : {item.id}</Text>
                        <Text style={{fontSize:24,backgroundColor:'#fffdfdf',textAlign:'center'}}>UserId : {item.userId}</Text>
                        <Text style={{fontSize:24}}>Title : {item.title}</Text>
                        <Text style={{fontSize:24}}>Body : {item.body}</Text>
                    </View>
                    )
            }) : null
        }
    </ScrollView>
  )
}

export default ApiCalling