/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// building new project run this command 
// npx react-native init ProjectName

// using terminal or cmd
// to run this command go to folder and open a terminal and run this command - npm start
// to run use also - npx react-native start
// first run on the vs code npm start after that open folder and when you install any package then you need to build the file so we run this command on poershell on this mainProject file another ternminal run this command - npx react-native run-android --mode=release or npm run android
// to fix the issue run - npx react-native doctor
// to fix the error while no file found - npm start --clear-cache
// using vscode
// npm start then (a) for android
// Android Emulator ke liye android studio me jayege fir virtual device manager jayege aur fir run kr lege
// npx react-native run-android  ---> not working


import React, { useState } from 'react';
// this is componets like Button ,Text, View etc components must be First letter is Capital
import {Alert, Button, FlatList, NativeAppEventEmitter, StyleSheet, Text,TextInput,View,} from 'react-native';
import CompanyData from './components/CompanyData';
import UserData from './components/UserData';
// external style
import ExternalStyle from './style/style';
import CustomList from './components/CustomList';
import GridStatic from './components/GridStatic';
import ComponentsFlatList from './components/ComponentsFlatList';
import NestedList from './components/NestedList';
import ClassComponent from './components/ClassComponent';
import UseEffectHook from './components/UseEffectHook';
import ShowHideComponents from './components/ShowHideComponents';
import UseEffectUnmount from './components/UseEffectUnmount';
import FlexUIResponsive from './components/FlexUIResponsive';
import StyledButton from './components/StyledButton';
import RadioButton from './components/RadioButton';
import DynamicRadioButton from './components/DynamicRadioButton';
import Loader from './components/Loader';
import Modals from './components/Modals';
import PressAble from './components/PressAble';
import Statusbar from './components/Statusbar';
import PlateForm from './components/PlateForm';
import NPMPackage from './components/NPMPackage'
import CustomeModal from './components/CustomeModal';
import NavigationStackDrawerTab from './components/NavigationStackDrawerTab';
import StackNavigation from './components/StackNavigation';
import TabNavigation from './components/TabNavigation';
import TopTabNavigation from './components/TopTabNavigation';
import ApiCalling from './components/ApiCalling';
import FlatListApiCall from './components/FlatListApiCall';
import MakingServerAndAPI from './components/MakingServerAndAPI';
import PostApiStaticData from './components/PostApiStaticData';
import FormDataPost from './components/FormDataPost';
import MakeListAPI from './components/MakeListAPI';
import DeleteApi from './components/DeleteApi';
import UpdateAPIWithModal from './components/UpdateAPIWithModal';
import SearchAPI from './components/SearchAPI';
import Ref from './components/Ref';
import AsyncStorageAsync from './components/AsyncStorageAsync';
import ReduxUses from './components/ReduxUses';
import AppUI from './components/Redux/AppUI';
import UserView from './components/UserProject/UserView';


// get by name.keyvalue
const styleInternal = StyleSheet.create({
  TextBox:{
    color:'#fff',
    fontSize:30,
    backgroundColor:'blue',
    marginBottom:10,
    padding:10,
    borderRadius:10,
    height:70,
    textAlignVertical:'center',
    textAlign:'center',
    borderColor:'red',
    borderWidth:1.5
  },
  // textInput styles
  textInput:{
    fontSize:18,
    color:'black',
    borderWidth:2,
    borderColor:'black',
    margin:10,
    padding:10
  },
  // form ka style
  FormStyle:{
    fontSize:18,
    color:'black',
    borderWidth:2,
    borderColor:'black',
    margin:10,
    padding:10
  },
  // flat list style
  flatlist:{
    fontSize:24,
    padding:10,
    color:'#fff',
    backgroundColor:'blue',
    borderColor:'black',
    borderWidth:2,
    margin:10
  }
})

const App = () => {

  // let data = 40;
  // const WithParameter = (val : any) => {
  //   // ye data change kr dega aur har press pr yhi data ho hoga
  //   // data = 10;
  //   // console.warn(data)
  //   console.warn("with paramter")
  //   // console.warn('With paramter called',val)
  // }
  // const WithoutParamter = () => {
  //   console.warn('With out paramter called')
  // }

  // state
  // const [props,setProps] = useState('shiv')

  // const [name,setName] = useState("");
  // const [email,setEmail] = useState("");
  // const [password,setPassword] = useState("");

  // if(name === ''){
  //   Alert.alert('name is empty')
  // }

  // const [details,setDetails] = useState(false);
  // const resetFormData = () =>{
  //   setDetails(false)
  //   setEmail('')
  //   setName('')
  //   setPassword('')
  // }

  // const  users = [
  //   {
  //     id:1,
  //     name:'Anil'
  //   },
  //   {
  //     id:2,
  //     name:'shivbhan'
  //   },
  //   {
  //     id:3,
  //     name:'kushwaha'
  //   },
  //   {
  //     id:4,
  //     name:'govind'
  //   },
  //   {
  //     id:5,
  //     name:'tony'
  //   }
  // ]

  return (
    <View style={{flex:1,backgroundColor:'lightblue'}}>
      {/* <Text style={{fontSize:30}}>Componets</Text> */}
      {/* <Text style={{fontSize:30}}>{data}</Text> */}
      {/* <UserData/> */}
      {/* <CompanyData/>
      <Button title='without paramter' color={'green'} onPress={WithoutParamter}/>
      <Button title='with paramter string' color={'red'} onPress={() => WithParameter("400")}/>
      <Button title='with paramter' color={'blue'} onPress={() => WithParameter(5)}/> */}
      {/* <Text style={{fontSize:30}}>{name}</Text> */}
      {/* <Button title='Update Name' onPress={() => setName('Kushwaha')}/> */}
      {/* sending props */}
      {/* <User name={"shivbhanb"}/> */}
      {/* <User name={props} age={29} /> */}
      {/* <Button title='Update props' onPress={() => setProps('props update')}></Button> */}

      {/* Inline styling the component */}
      {/* <Text style={{fontSize:32,color:'red'}}>Inline Styling</Text> */}
      {/* internal styling */}
      {/* <Text style={styleInternal.TextBox}>Internal Styling</Text>
      <Text style={styleInternal.TextBox}>Internal Styling</Text>
      <Text style={styleInternal.TextBox}>Internal Styling</Text> */}

      {/* external style sheet */}
      {/* <Text style={ExternalStyle.TextBox}>ExternalStyle Styling</Text> */}
      {/* ExternalStyle + external + inline styling */}
      {/* <Text style={[ExternalStyle.TextBox,ExternalStyle.TextBox,{margin:40}]}>ExternalStyle Styling</Text>
      <Text style={ExternalStyle.TextBox}>ExternalStyle Styling</Text> */}

      {/* text input lene ke liye */}
      {/* <Text style={{fontSize:30}}>Handle the input value</Text>
      <Text style={{fontSize:30}}>Name : {name} </Text> */}
      {/* textr me changes ko handle krne ke liye onChangeText */}
      {/* <TextInput style={styleInternal.textInput}
      placeholder='Enter your name'
      value={name}
      onChangeText={(text) => setName(text)}
      />
      <Button title='Clear input value' onPress={() => setName('')}/> */}

      {/* form handling and submit submit and clear the form */}
      {/* <Text style={{fontSize:30}}>Simple Form in React Native</Text> */}
      {/* <TextInput style={styleInternal.FormStyle}
        value={name}
        onChangeText={(text) => setName((text))}
        placeholder='Enter Your Name'/>
      <TextInput style={styleInternal.FormStyle}
        value={email}
        onChangeText={(text) => setEmail((text))}
        placeholder='Enter User email'/>
      <TextInput style={styleInternal.FormStyle}
        value={password}
        // this is for hidding the password
        secureTextEntry={true}
        onChangeText={(text) => setPassword((text))}
        editable={true}
        placeholder='Enter Password'/> */}
        {/* button me style kam nhi krta hai  inline */}
        {/* <View style={{margin:10}}>
          <Button color={'green'} title='Print Details' onPress={() => setDetails(true)}/>
        </View>
          <Button title='clear Details' onPress={() => resetFormData()}/>
        <View>
        {
          details ? 
          <View>
            <Text style={{fontSize:30}}>User name is : {name}</Text>
            <Text style={{fontSize:30}}>User email is : {email}</Text>
            <Text style={{fontSize:30}}>User password is : {password}</Text>
          </View> : null
        }
        </View> */}

        {/* flat list or data  */}
        {/* <Text style={{fontSize:30}}>Flat list array hi leta hai </Text>
        <FlatList data={users} renderItem={({item}) => <Text style={[styleInternal.flatlist,]}>{item.name}</Text>}
          keyExtractor={(item) => item.id}/> */}

          {/* custome list without use react feature  */}
          {/* <CustomList/> */}

          {/* static grid */}
          {/* <GridStatic/> */}

          {/* compnents with flat list */}
          {/* <ComponentsFlatList/> */}

          {/* section list nested list */}
          {/* <NestedList/> */}

          {/* class components banane ke liye */}
          {/* <ClassComponent/> */}

          {/* usehooks as a components */}
          {/* <UseEffectHook/> */}

          {/* show and hide or toggle components */}
          {/* <ShowHideComponents/> */}

          {/* useeffect ko unmount krna*/}
          {/* <UseEffectUnmount/> */}

          {/* responsive ui for different sizes flex bnane ke liye parant ko flex 1 mark krna hoga*/}
          {/* <FlexUIResponsive/> */}

          {/* Styled Button or custome stylish touchable highlight*/}
          {/* <StyledButton/> */}

          {/* radio Button or custome stylish touchable highlight*/}
          {/* <RadioButton/> */}

          {/*Dynamic radio Button and map the data or custome stylish touchable highlight*/}
          {/* <DynamicRadioButton/> */}

          {/* activity indicator or loader */}
          {/* <Loader/> */}

          {/* Modal or dialog box */}
          {/* <Modals/> */}

          {/* Pressable in react native like press long press etc */}
          {/* <PressAble/> */}

          {/* status bar time battery nttwork etc */}
          {/* <Statusbar/> */}

          {/* to kow the palate form like android or os or windows or iphone */}
          {/* <PlateForm/> */}

          {/* npm package ko kaise use kre */}
          {/* <NPMPackage/> */}

          {/* custome modal */}
          {/* <CustomeModal/> */}

          {/* Navigation stack drawer and tab */}
          {/* <NavigationStackDrawerTab/> */}

          {/* stack navigation using react-navigation/native-stack */}
          {/* <StackNavigation/> */}

          {/* tab navigation bottom */}
          {/* <TabNavigation/> */}

          {/* tab navigation top */}
          {/* <TopTabNavigation/> */}

          {/* API Call using dummy data*/}
          <ApiCalling/>

          {/* Flat list API Call using dummy data*/}
          {/* <FlatListApiCall/> */}

          {/* making json server and api */}
          {/* to run the json serveruse - json-server --watch db.json abhi ye fetch nhi ho rhi hai*/}
          {/* to know your ip run this command -  ipconfig */}
          {/* to run the server without localhost run the command - json-server --host 0.0.0.0 file_name */}
          {/* emulator me api use krne ke liye ip address me run krke chalate hai */}
          {/* <MakingServerAndAPI /> */}

          {/* POST data using API in react native with out form */}
          {/* <PostApiStaticData/> */}

          {/* post Data using Input field means using a form */}
          {/* <FormDataPost/> */}

          {/* crete a api and render in to the list */}
          {/* <MakeListAPI/> */}

          {/* delete api data  */}
          {/* <DeleteApi/> */}

          {/* update api and with modal */}
          {/* <UpdateAPIWithModal/> */}

          {/* search function */}
          {/* <SearchAPI/> */}

          {/* Ref in react Native */}
          {/* <Ref/> */}

          {/* generate APP Icon website = easyAppIcon goto android - app - src - res - change minpman-filenames to new*/}
          
          {/* async-storage in react Native only remove when clear cache or uninstall app*/}
          {/* <AsyncStorageAsync/> */}

          {/* element ko inspect krne ke liye ctrl+m */}

          {/* uses of redux to pass the data between diff components state management*/}
          {/* saga flow , architecture , data flow etc */}
          {/* action -> reducer ->  store -> view-components */}
          {/* what is saga -> to handle the api call */}
          {/* installing the redux 1 -> npm i redux  , 2 -> npm i react-redux, 3 -> npm i @reduxjs/toolkit  */}
          {/* <ReduxUses/> */}

          {/* make a UI for redux shopping cart projects */}
          {/* isko provider ke andar wrap krna hai isilye index.js me provider ko import krke karege */}
          {/* <AppUI/> */}

          {/* mini project to understack navigation and multiple page */}
          {/* <UserView/> */}
      </View>
    )
}

const User = (props : any) => {
  return (
    <View style={{backgroundColor:"green",padding:5}}>
      <Text style={{fontSize:29}}>Child Name: {props.name}</Text>
      <Text style={{fontSize:29}}>Child Age: {props.age}</Text>
    </View>
  )
}


export default App;
