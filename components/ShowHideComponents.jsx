import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const ShowHideComponents = () => {
    const [show,setShow] = useState(false)
  return (
    <View>
        <Text style={{fontSize:30}}>Show Hide Components</Text>
        <Button title='Hide Components' onPress={() => setShow(false)}/>
        <Button title='show Components' onPress={() => setShow(true)}/>
        <Button title='one button hide and show Components' onPress={() => setShow(!show)}/>
        {
            show ? <HideShow/> : null
        }
    </View>
  )
}

const HideShow = () => {
    return (
        <View>
            <Text style={{fontSize:30,color:'green'}}>User Componets</Text>
        </View>
    )
}

export default ShowHideComponents