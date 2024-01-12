import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'

const UseEffectHook = () => {

    const [count,setCount] = useState(0);
    const [data,setData] = useState(100);

    // yha pr dependecy array me jo pass krege vo update hone pr function call hoga agr kuchh nhi hoga to har pr call hoga
    // useEffect(() => {
    //     console.warn(count)
    // },[count])

    // // alag se data ko update krege to uske liye 
    // useEffect(() => {
    //     console.warn("do some animation")
    // },[data])

  return (
    <View>
        <Text style={{fontSize:28}}>{data} Useeffect as componentsDid Update {count} </Text>
        <Button title='update counter' onPress={() => setCount(count+1)}/>
        <Button title='update data' onPress={() => setData(data+1)}/>
        <UserProps info={{data,count}}/>
    </View>
  )
}

const UserProps = (props) => {
    // props ke call pr call ho effect
    // console.warn(props.info)
    // jab info me data update hoga tabhi chalega
    useEffect(() => {
        console.warn("run this code when data props is updated")
    },[props.info.data])
    return (
        <View>
            <Text style={{fontSize:28,color:'orange'}}>data :{props.info.data}</Text>
            <Text style={{fontSize:28,color:'orange'}}>count :{props.info.count}</Text>
        </View>
    )
}
 
export default UseEffectHook