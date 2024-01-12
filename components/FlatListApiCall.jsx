import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, ScrollView, Text, View } from 'react-native'

const FlatListApiCall = () => {

    // agr object ka array hai to [] ye pass krege
    const [data,setData] = useState([]);
    const [loader,setLoader] = useState(false)
    const getAPIData = async () => {
        setLoader(true)
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const data = await fetch(url);

        const result = await data.json()
        // console.warn('called');
        setData(result)
        setLoader(false)
    };

    useEffect(() => {
        getAPIData();
    },[]);

  return (
    <View>
        <Text style={{padding:10,textAlign:'center'}}>Flat List</Text>
        {
            data.length ? <FlatList data={data} 
            renderItem={({item}) => 
            <View style={{padding:10,margin:10,backgroundColor:'#fff',borderBottomColor:'black',borderBottomWidth:1}}>
                <Text style={{fontSize:20}}>Id : {item.id}</Text>
                <Text style={{fontSize:20}}>Title : {item.title}</Text>
                <Text style={{fontSize:20,backgroundColor:'red',padding:10,margin:5,textAlign:'left'}}>Body : {item.body}</Text>
            </View>}/> : loader ? <ActivityIndicator size={50} color='gold'/> : <Text>No Data Found</Text>
        }
    </View>
  )
}

export default FlatListApiCall