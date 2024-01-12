import React, { useState } from 'react'
import { ActivityIndicator, Button, Text, View } from 'react-native'

const Loader = () => {
    const [isLoading,setIsLoading] = useState(false)

    const loading = () => {
        setIsLoading(!isLoading);

        // api call take 3 sec after 3 sec autmatic close
        setTimeout(() => {
            setIsLoading(false)
        },3000)
    }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Activity Indicator or Loader</Text>
        {/* <ActivityIndicator size={50} color='blue' animating={true}/> */}
        {/* <ActivityIndicator size={50} color='red' animating={isLoading}/> */}
        {/* <ActivityIndicator size={50} color='gold'/> */}
        {/* both are valide using operator or simple using onpress or timout */}
        {
            isLoading ? <ActivityIndicator size={50} color='gold'/> : null
        }
        <Button title='Show Loader' onPress={loading}/>
    </View>
  )
}

export default Loader