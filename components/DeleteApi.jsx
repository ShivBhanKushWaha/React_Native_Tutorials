import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native'

const DeleteApi = () => {

    const [getData,setGetData] = useState([]);
    const [loader,setLoader] = useState(false)

    const getApiData = async () => {
        setLoader(true)
        const url = "http://10.0.2.2:3000/users"
        const result = await fetch(url);
        const data = await result.json();

        if(data){
            setGetData(data);
        }
        setLoader(false)
    }

    
    const DeletUser = async (id) => {
        const url = "http://10.0.2.2:3000/users";
        const result = await fetch(`${url}/${id}`,{
            method:'DELETE',
        });
        const data = await result.json();
        if(data){
            // console.warn('delete');
            // Alert.alert('deleted user')
            getApiData()
        }
    }

    useEffect(() => {
        getApiData();
    },[]);

  return (
    <ScrollView style={styles.container}>
        <View style={styles.dataWrapper}>
            <View style={{flex:1.25}}>
                <Text style={{fontWeight:'bold'}}>Name</Text>
            </View>
            <View style={{flex:2}}>
                <Text style={{fontWeight:'bold'}}>Age</Text>
            </View>
            <View style={{flex:2}}>
                <Text style={{fontWeight:'bold'}}>Operation</Text>
            </View>
        </View>
        {
            getData.length ? getData.map((item,index) => {
                return (
                    <View key={index} style={styles.dataWrapper}>
                        <View style={{flex:1}}>
                            <Text>{item.name}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text>{item.age}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Button onPress={() => DeletUser(item.id)} title='Delete'/>
                        </View>
                        <View style={{flex:1,marginLeft:10}}>
                            <Button title='Update'/>
                        </View>
                    </View>
                )
            })
            : loader ? <ActivityIndicator size={50} color={'red'}/> : <Text>No Data Availbale</Text>
        }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    dataWrapper:{
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'orange',
        margin:10,
        padding:10
    }
})

export default DeleteApi