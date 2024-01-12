import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'


const Header = () => {

  // store me reducer hai isi liye yha pr reducer hi pass krege jo gha likhe vhi pass krege
  const cartData = useSelector((state) => state.reducer)
  // console.warn(cartItem);
  const [cartItems,setCartItems] = useState(0)

  useEffect(() => {
    setCartItems(cartData.length)
  },[cartData]);


  return (
    <View style={styles.container}>
        <Text style={styles.cart}>{cartItems}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'flex-end',
        paddingRight:20,
        padding:5,
        backgroundColor:'orange'
    },
    cart:{
      fontSize:24,
      padding:4,
      width:40,
      height:40,
      backgroundColor:'blue',
      textAlign:'center',
      color:'#fff',
      borderRadius:10
    }
})

export default Header