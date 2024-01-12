import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
     <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Login' component={Login}/>
            <Tab.Screen name='SignUp' component={SignUp}/>
            <Tab.Screen name='Profile' component={Profile}/>
        </Tab.Navigator>
     </NavigationContainer>
  )
}

const Login = () => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:28}}>Login</Text>
        </View>
    )
}
const SignUp = () => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:28}}>SignUp</Text>
        </View>
    )
}
const Profile = () => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:28}}>Profile</Text>
        </View>
    )
}

export default TabNavigation