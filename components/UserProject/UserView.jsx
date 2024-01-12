import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppUI from '../Redux/AppUI'
import UserList from './UserList'

const Stack = createNativeStackNavigator()
const UserView = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={AppUI}/>            
            <Stack.Screen name='User' component={UserList}/>            
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default UserView