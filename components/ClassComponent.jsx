import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import StudentComponents from './StudentComponents'

class ClassComponent extends Component{
    // class ke andar const or other nhi use krskte hai
    // yha pr event bana ke liye this keyworkd kause krte hai 
    // render() ka use krte hai ur class me return nhi kr skte hai  direct me isisliye render ke andar return krte hai
    
    // Fruit = () => {
    //     console.warn("Apple")
    // }

    // state and props in class components using constructor 
    // constructor ko call krne ke liye super() keywordka use krte hai
    constructor(){
        super();
        this.state = {
            name:"Shivbhan",
        }
    }

    updateName(val){
        this.setState({name:val})
    }

    render(){
        return (
            <View>
                <Text style={{fontSize:25,color:'red'}}>Class Component</Text>
                <Text style={{fontSize:25,color:'gren'}}>{this.state.name}</Text>
                <TextInput onChangeText={(text) => this.updateName(text)}
                style={{margin:10,padding:10,borderWidth:2,borderColor:'black'}} 
                placeholder='Enter your name'/>
                <Button title='Press me' onPress={this.Fruit}/>
                {/* class components me kuchh bhi props this.state. se pas krege to vha pr get autmatically same aise hi get hoga */}
                <StudentComponents name={this.state.name}/>
            </View>
        )
    }
}

export default ClassComponent