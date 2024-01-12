import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
const styles = StyleSheet.create({
    customeList:{
        fontSize:24,
        padding:10,
        color:'#fff',
        backgroundColor:'blue',
        borderColor:'white',
        borderWidth:2,
        marginBottom:10
    },
    scroll:{
        marginBottom:30
    }
})

const CustomList = () => {
    const  users = [
        {
          id:1,
          name:'Anil'
        },
        {
          id:2,
          name:'shivbhan'
        },
        {
          id:3,
          name:'kushwaha'
        },
        {
          id:4,
          name:'govind'
        },
        {
          id:5,
          name:'tony'
        },
        {
          id:1,
          name:'Anil'
        },
        {
          id:2,
          name:'shivbhan'
        },
        {
          id:3,
          name:'kushwaha'
        },
        {
          id:4,
          name:'govind'
        },
        {
          id:2,
          name:'shivbhan'
        },
        {
          id:3,
          name:'kushwaha'
        },
        {
          id:4,
          name:'govind'
        },
        {
          id:5,
          name:'tony'
        },
        {
          id:1,
          name:'Anil'
        },
        {
          id:2,
          name:'shivbhan'
        },
        {
          id:3,
          name:'kushwaha'
        },
        {
          id:4,
          name:'govind'
        },
        {
          id:2,
          name:'shivbhan'
        },
        {
          id:3,
          name:'kushwaha'
        },
        {
          id:4,
          name:'govind'
        },
        {
          id:5,
          name:'tony'
        },
        {
          id:1,
          name:'Anil'
        },
        {
          id:2,
          name:'shivbhan'
        },
        {
          id:3,
          name:'kushwaha'
        },
        {
          id:4,
          name:'govind'
        },
        {
          id:5,
          name:'last'
        },
        {
          id:1,
          name:'Anil'
        },
        {
          id:2,
          name:'shivbhan'
        },
        {
          id:3,
          name:'kushwaha'
        },
        {
          id:4,
          name:'govind'
        },
        {
          id:5,
          name:'last'
        },
        {
          id:4,
          name:'govind'
        },
        {
          id:5,
          name:'last'
        }
      ]

  return (
    <View>
        <Text style={{fontSize:32}}>Flat List with map function and scroll view</Text>
        <ScrollView style={styles.scroll}>
            {
                users.map((item) => 
                        <Text style={styles.customeList}>{item.name}</Text>,
                    {/* <View>
                        <Text style={styles.customeList}>{item.name}</Text>
                        <Text style={styles.customeList}>{item.name}</Text>
                    </View> */}
                )
            }
        </ScrollView>
    </View>
  )
}

export default CustomList