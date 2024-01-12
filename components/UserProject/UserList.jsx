import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getUserList } from '../Redux/reduxOperations/action'

const UserList = () => {


    const dispatch = useDispatch();
    const userList = useSelector((state) => state.reducer)

    useEffect(() => {
        dispatch(getUserList());
    },[])

    console.log('in components',userList)

  return (
    <View style={styles.container}>
        <Text>User List Scree</Text>
        <ScrollView>
            {
                userList.length ? userList.map((item) => {
                    return (<View style={styles}>
                        <Text>dfdf{item.firstName}</Text>
                    </View>)
                }) : null
            }
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingRight:20,
        padding:5,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    list:{
        backgroundColor:'white',
        color:'black'
    }
})


export default UserList