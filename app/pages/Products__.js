import React, { Component, useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity,Text,useNavigation } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Product from '../components/Productcomponent';
import { addToCart } from '../redux/actions/cartAction';
import { fetchProducts } from '../redux/actions/productAction';
//import Logo from '../components/Logo.component';
//import Cart from '../components/Cart.component';

const Products = (props) => {
    useEffect(() => {
    props.fetchProducts();  
    })

  
    
    const { products } = props;
  
    const addItemsToCart = (product) => {
        props.addToCart(product);
    }
    


    const detailpage = (item) => {
        navigation.navigate('Productdetail', item )
        console.log(item.name);
    }

      
      
      
      return (
       //test revert here
         
          <View style={styles.container}>
            
          <View style={styles.body}>
            
            <FlatList 
            numColumns={2}
            data={products} 
            renderItem={({item}) => (
            
            <Product item={item} addItemsToCart={()=>addItemsToCart(item)} product={item} detailpage={()=>detailpage(item)}/>
         
            )}
            keyExtractor ={(item) => item.name+Math.random()}
            ItemSeparatorComponent= {()=> <View style={{height:0.5, backgroundColor:'#34495e90'}}/> }
            />
         
          </View>
       </View>
   
      );
    }
  
  
  const styles = StyleSheet.create({
      container: {
       flex: 1,
      },
      body: {
        flex: 1,
        justifyContent: 'center'
      }
  });
  const mapStateToProps = (state) => ({
      products: state.products.items
  })
  
  export default connect(mapStateToProps, {addToCart,fetchProducts})(Products);
