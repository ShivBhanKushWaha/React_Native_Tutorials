import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Button, TextInput } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from './Login'
import Home from './Home'


const Stack = createNativeStackNavigator()


const StackNavigation = () => {

    const btnAction = () => {
        console.warn('press')
    }

  return (
    <NavigationContainer>
       {/* har navigator me style ho iske liye navigator me style krna hai */}
        <Stack.Navigator 
        screenOptions={{
            headerStyle:{
                backgroundColor: 'blue',
            },
            headerTitleStyle:{
                fontSize:25,
            },
            headerTintColor:'#fff'
        }}>
            <Stack.Screen name="Login" component={Login} options={{title:'User Login'}}/>
            {/* particular navigation me style krne ke liye */}
            <Stack.Screen name="Home" component={Home} options={{title:'Home Page',
            headerStyle:{
                backgroundColor: '#f4511e',
            },
            headerTitleStyle:{
                fontSize:27,
            },
            headerTitle:(props) => <Button onPress={btnAction} title='Left'/>,
            // headerRight:(props) => <Button title='Right'/>,
            // headerRight:(props) => <HeaderBtn/>,
            // headerLeft:(props) => <Button title='left'/>,
            headerRight:(props) => <HeaderInput/>,
            headerTintColor:'#fff'}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}


const HeaderBtn = () => {
    return (
        <Button title='btn'/>
    )
}
const HeaderInput = () => {
    return (
        <TextInput style={{backgroundColor:'#fff',width:200,padding:5}} placeholder='Search' />
    )
}

export default StackNavigation