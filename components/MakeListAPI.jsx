import React, { useEffect, useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'

const MakeListAPI = () => {

    const [getData,setGetData] = useState([]);
    const getApiData = async () => {
        const url = "http://10.0.2.2:3000/users"
        const result = await fetch(url);
        const data = await result.json();

        if(data){
            setGetData(data);
        }
    }

    useEffect(() => {
        getApiData();
    },[])

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
            getData.length ? getData.map((item) => {
                return (
                    <View style={styles.dataWrapper}>
                        <View style={{flex:1}}>
                            <Text>{item.name}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text>{item.age}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Button title='Delete'/>
                        </View>
                        <View style={{flex:1,marginLeft:10}}>
                            <Button title='Update'/>
                        </View>
                    </View>
                )
            })
            : null
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

export default MakeListAPI