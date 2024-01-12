import React from 'react'
import { View,Text,Button } from 'react-native'

const Home = (props) => {
    // console.warn(props.route.params)
    // destructuring
    const { name, age} = props.route.params;
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:28}}>Home screen</Text>
            <Text style={{fontSize:28}}>Name : {name}</Text>
            <Text style={{fontSize:28}}>Name : {age}</Text>
            <Button title='Go To Login' onPress={() => props.navigation.navigate('Login')}/>
        </View>
    )
}

export default Home