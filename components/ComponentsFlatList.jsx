import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import UserData from './UserData'

const ComponentsFlatList = () => {

    const  users = [
        {
          id:1,
          name:'Anil',
          email:"anil@gmail.com"
        },
        {
          id:2,
          name:'shivbhan',
          email:"shiv@gmail.com"
        },
        {
          id:3,
          name:'kushwaha',
          email:"kushwaha@gmail.com"
        },
        {
          id:4,
          name:'govind',
          email:"govind@gmail.com"
        },
        {
          id:5,
          name:'dfg',
          email:"fdg@gmail.com"
        },
        {
          id:6,
          name:'fg',
          email:"dfg@gmail.com"
        },
        {
          id:7,
          name:'fg',
          email:"fdg@gmail.com"
        }
    ]

  return (
    <View>
        <Text style={{fontSize:28}}>Components in loop with FlatList</Text>
        <FlatList data={users} renderItem={({item}) => 
           <UserData item={item}/>
        }/>
    </View>
  )
}


export default ComponentsFlatList