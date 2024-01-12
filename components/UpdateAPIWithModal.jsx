import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, Modal, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

const UpdateAPIWithModal = () => {

    const [getData,setGetData] = useState([]);
    const [loader,setLoader] = useState(false)
    const [showModal,setShowModal] = useState(false);
    const [selectedUser,setSelectedUser] = useState(undefined);

    // Fetch data from API
    const getApiData = async () => {
        setLoader(true)
        const url = "http://10.0.2.2:3000/users"
        const result = await fetch(url);
        const data = await result.json();

        if(data){
            setGetData(data);
        }
        setLoader(false)
    }


    // api for delete user
    const DeletUser = async (id) => {
        const url = "http://10.0.2.2:3000/users";
        const result = await fetch(`${url}/${id}`,{
            method:'DELETE',
        });
        const data = await result.json();

        if(data){
            getApiData()
        }
    }

    // update user api
    const UpdateUser = async (data) => {
        setShowModal(true)
        setSelectedUser(data)
    }

    useEffect(() => {
        getApiData();
    },[]);

  return (
    <ScrollView style={styles.container}>
        <View style={styles.dataWrapper}>
            <View style={{flex:1.25}}>
                <Text style={{fontWeight:'bold'}}>Name</Text>
            </View>
            <View style={{flex:2}}>
                <Text style={{fontWeight:'bold'}}>Age</Text>
            </View>
            <View style={{flex:2}}>
                <Text style={{fontWeight:'bold'}}>Operation</Text>
            </View>
        </View>
        {
            getData.length ? getData.map((item,index) => {
                return (
                    <View key={index} style={styles.dataWrapper}>
                        <View style={{flex:1}}>
                            <Text>{item.name}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text>{item.age}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Button onPress={() => DeletUser(item.id)} title='Delete'/>
                        </View>
                        <View style={{flex:1,marginLeft:10}}>
                            <Button onPress={() => UpdateUser(item)} title='Update'/>
                        </View>
                    </View>
                )
            })
            : loader ? <ActivityIndicator size={50} color={'red'}/> : <Text>No Data Availbale</Text>
        }

        <Modal visible={showModal} transparent={true}>
           <UserModal setShowModal={setShowModal} selectedUser={selectedUser} getApiData={getApiData} setLoader={setLoader} />
        </Modal>

        <View style={{padding:10,alignContent:'flex-end'}}>
            <Button title='Add Users'/>
        </View>
    </ScrollView>
  )
}

const UserModal = (props) => {

    const [name,SetName] = useState(undefined);
    const [age,SetAge] = useState(undefined);
    const [email,SetEmail] = useState(undefined);

    useEffect(() => {
        if(props.selectedUser){
            SetName(props.selectedUser.name)
            SetAge(props.selectedUser.age.toString())
            SetEmail(props.selectedUser.email)
        }
    },[props.selectedUser]);

    const UpdateUserApi = async () => {
        props.setLoader(true);
        const id = props.selectedUser.id
        const url = "http://10.0.2.2:3000/users"
        const result = await fetch(`${url}/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name,age,email
            })
        });
        const data = await result.json();
        if(data){
            props.setLoader(false);
            props.getApiData();
            props.setShowModal(false)
        }
    }


    return (
    <View style={styles.ModalCenteredView}>
        <View style={styles.modalView}>
            <TextInput placeholder='Name' style={styles.input} value={name} onChangeText={(text) => SetName(text)}/>
            <TextInput placeholder='Age' style={styles.input} value={age} onChangeText={(text) => SetAge(text)}/>
            <TextInput placeholder='Email' style={styles.input} value={email} onChange={(text) => SetEmail(text)}/>
            <View style={{marginBottom:15}}>
                <Button title='Save' onPress={() => UpdateUserApi()}/>
            </View>
            <Button onPress={() => props.setShowModal(false)} title='Close'/>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    dataWrapper:{
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'orange',
        margin:10,
        padding:10
    },
    ModalCenteredView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modalView:{
        backgroundColor:'#fff',
        padding:20,
        borderRadius:10,
        shadowColor:'#000',
        shadowOpacity:0.70,
        elevation:20
    },
    input:{
        padding:10,
        borderWidth:1,
        borderColor:'skyblue',
        width:280,
        marginBottom:15
    }
})


export default UpdateAPIWithModal