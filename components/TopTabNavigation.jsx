import React from 'react'
import { Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Setting" component={SettingsScreen} />
            <Tab.Screen name="Profle" component={ProfileScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

const HomeScreen = () => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:28}}>Home Screen</Text>
        </View>
    )
}
const SettingsScreen = () => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:28}}>Settings Screen</Text>
        </View>
    )
}
const ProfileScreen = () => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:28}}>Profile Screen</Text>
        </View>
    )
}

export default TopTabNavigation