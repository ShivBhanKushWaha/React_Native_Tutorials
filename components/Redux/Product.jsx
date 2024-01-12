import React, { useEffect, useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { addToCart,removeFromCart } from './reduxOperations/action';
import { useSelector } from 'react-redux';

const Product = (props) => {
    const item = props.item;
    const dispatch = useDispatch();
    // yah state redux vali hai kuchh bhi name de skte hai
    const cartItems = useSelector((state) => state.reducer);
    const [IsAdded,setIsAdded] = useState(false);

    const handleAddToCart = (item) => {
        // dispatch ke sath hi call krna hai 
        dispatch(addToCart(item))
    }

    const handleRemoveFromCart = (item) => {
      dispatch(removeFromCart(item.name))
    }

    useEffect(() => {
      let result = cartItems.filter((element) => {
        return element.name === item.name
      });

      if(result.length){
        setIsAdded(true)
      }
      else{
        setIsAdded(false)
      }
    },[cartItems])

  return (
    <View style={styles.container} key={item.id}>
        <Text style={{fontSize:24}}>Name : {item.name}</Text>
        <Text style={{fontSize:24}}>Price : {item.price}</Text>
        <Text style={{fontSize:24}}>Color : {item.color}</Text>
        <Image style={{width:120,height:120}} source={{uri:item.image}}/>
        {
          IsAdded ? <Button title='Remove From Cart' onPress={() => handleRemoveFromCart(item)}/> 
          : <Button title='Add To Cart' onPress={() => handleAddToCart(item)} />
        }
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      borderColor:'gold',
      borderWidth:1,
      padding:10,
      margin:10,
      backgroundColor:'lightgreen'
    }
})

export default Product