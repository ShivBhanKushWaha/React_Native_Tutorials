import React from 'react'
import { SectionList, Text, View } from 'react-native'

const NestedList = () => {

    const  users = [
        {
          id:1,
          name:'Anil',
          data:["c++","php","nextjs"]
        },
        {
          id:2,
          name:'shivbhan',
          data:["react","php","java"]
        },
        {
          id:3,
          name:'kushwaha',
          data:["c++","js","java"]
        },
        {
          id:4,
          name:'govind',
          data:["c++","phython","java"]
        },
        {
          id:5,
          name:'tony',
          data:["c++","php","java"]
        }
    ]

  return (
    <View>
        <Text style={{fontSize:18}}>Nested List Aarray ke andar array me selection list use hoga</Text>
        <SectionList sections={users}
        renderItem={({item}) => <Text style={{fontSize:25,marginLeft:20}}>{item}</Text>} 
            renderSectionHeader={({section:{name}}) => (
                <Text style={{fontSize:25,color:'red',marginLeft:10}}>{name}</Text>
            )}
        />
    </View>
  )
}

export default NestedList