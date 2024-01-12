import React, { useState } from 'react'
import { ActivityIndicator, Alert, Button, Text, TextInput, View } from 'react-native'

const FormDataPost = () => {
    const [loader,setLoader] = useState(false)

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [age,setAge] = useState('');

    const [nameError,setNameError] = useState(false);
    const [emailError,setEmailError] = useState(false);
    const [ageError,setAgeError] = useState(false);

    // saving in db.json
    const saveData = async () => {
        if(!name){
            setNameError(true)
        }else{
            setNameError(false);
        }

        if(!email){
            setEmailError(true);
        }else{
            setEmailError(false);
        }

        if(age < 18 || age > 60){
            setAgeError(true);
        }else{
            setAgeError(false);
        }

        if(!name || age < 18 || age > 60 || !email){
            return false;
        }
    
        setLoader(true)

        const url = "http://10.0.2.2:3000/users"
        const data = await fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({name,email,age})
        })


        const result = await data.json()
        if(result){
            Alert.alert(`Created ${name}`)
        }
        setLoader(false)
        
    }

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:10,margin:10}}>
            <Text style={{fontSize:25,textAlign:'center',backgroundColor:'blue',padding:10,margin:1}}>Post Data</Text>
            
            {
                loader ? 
                <ActivityIndicator size={45} color={'blue'}/> 
                :
                <View>
                    <TextInput value={name}  onChangeText={(text) => setName(text)} style={{fontSize:21,backgroundColor:'#fff',padding:10,margin:5,width:300,color:'black',marginTop:25}} placeholder='Enter Your Name'/>
                    {
                        nameError ? <Text style={{color:'red',backgroundColor:'gray',padding:5,marginTop:2,textAlign:'center'}}>Name Is invalid</Text> : null
                    }
                
                    <TextInput value={email}   onChangeText={(text) => setEmail(text)} style={{fontSize:21,backgroundColor:'#fff',padding:10,margin:5,width:300,color:'black'}} placeholder='Enter Your email'/>
                    {
                        emailError ? <Text style={{color:'red',backgroundColor:'gray',padding:5,marginTop:2,textAlign:'center'}}>email is invalid</Text> : null
                    }

                    <TextInput value={age}  onChangeText={(text) => setAge(text)} style={{fontSize:21,backgroundColor:'#fff',padding:10,margin:5,width:300,color:'black',margin:5}} placeholder='Enter Your age'/>
                    {
                        ageError ? <Text style={{color:'red',backgroundColor:'gray',padding:5,marginBottom:10,textAlign:'center'}}>age is invalid</Text> : null
                    }

                    <Button title='Save Data' onPress={saveData}/>
                </View>
            }
            
    </View>
  )
}

export default FormDataPost