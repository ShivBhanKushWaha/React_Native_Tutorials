import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'

const UseEffectUnmount = () => {
    const [show,setShow] = useState(true);
  return (
    <View>
        <Text>Useffect for Unmount Components</Text>
        <Button title='Toggle' onPress={() => setShow(!show)}/>
        {
            show ? <Student/> : null
        }
    </View>
  )
}

const Student = () => {
    // background me innerval settimer call auto matic hote rhte hai isilie unmount krte smay inhe stop kr dete hai
    // let timer = setInterval(() => {
    //     console.warn('every second timer (i++)')
    // }, 2000);

    useEffect(() => {
        // console.warn('useeffect mount called')
        // return () => console.warn("useeffect called on unmount")
        return () => clearInterval(timer)
    })
    
    return (
        <View>
            <Text style={{fontSize:28,color:'blue'}}>STudent</Text>
        </View>
    )
}

export default UseEffectUnmount