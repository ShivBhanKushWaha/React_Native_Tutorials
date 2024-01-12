import React, { Component } from 'react'
import { Text, View } from 'react-native'

// class components
class StudentComponents extends Component{


    render(){

        // yha pr get goga props this.props se 
        // console.warn(this.props)

        return (
            <View>
                <Text style={{fontSize:25,color:'green'}}>Student name : {this.props.name}</Text>
            </View>
        )
    }
}

export default StudentComponents