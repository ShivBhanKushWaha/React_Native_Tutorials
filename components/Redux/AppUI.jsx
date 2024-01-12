import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from './Header'
import Product from './Product'

// navigation har page me default props hota hai 
const AppUI = ({navigation}) => {

    const Products = [
        {
            id:1,
            name : 'Samsung',
            color :'White',
            price:30000,
            image:'https://iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        },
        {
            id:2,
            name : 'Apple',
            color :'black',
            price:300500,
            image:'https://iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        },
        {
            id:3,
            name : 'Realme',
            color :'White',
            price:12000,
            image:'https://iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        },
        {
            id:4,
            name : 'Vivo',
            color :'White',
            price:14500,
            image:'https://iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        },
        {
            id:5,
            name : 'Oppo',
            color :'White',
            price:15099,
            image:'https://iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        }
    ]

  return (
    <View style={styles.container}>
        <Button title='Go to User List' onPress={() => navigation.navigate("User")}/>
        <Header/>
            <ScrollView>
                {
                    Products.map((item) => <Product item={item}/>)
                }
            </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})


export default AppUI