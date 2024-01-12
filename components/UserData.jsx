import { Text,View,StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item:{
      fontSize:24,
      color:"orange",
      flex:1,
      marginBottom:2,
      backgroundColor:'lightblue',
      textAlign:'center',
      textAlignVertical:'center'
  },
  box:{
      flexDirection:'row',
      borderWidth:2,
      borderColor:'orange',
      marginBottom:10,
  }
})

const UserData = ({item}) => {
  return (
       <View style={styles.box}>
           <Text style={styles.item}>{item.id}</Text>
           <Text style={styles.item}>{item.name}</Text>
           <Text style={styles.item}>{item.email}</Text>
       </View>
  ) 
}

  export default UserData;