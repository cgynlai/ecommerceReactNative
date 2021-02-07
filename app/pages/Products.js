import React, { Component, useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, ScrollView,Text } from 'react-native';
import { connect } from 'react-redux';
import Product from '../components/Productcomponent';
import { addToCart } from '../redux/actions/cartAction';
import { fetchProducts } from '../redux/actions/productAction';



const Products = (props) => {
    useEffect(() => {
    props.fetchProducts();  
    })
    
    
  
    const addItemsToCart = (product) => {
        props.addToCart(product);
    }
  
    const detailpage = (item) => {
        navigation.navigate('Productdetail', item )
    }

      const { products, navigation } = props;
 
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
            // ItemSeparatorComponent= {()=> <View style={{height:0.5, backgroundColor:'#34495e90'}}/> }
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
        justifyContent: 'center',
        backgroundColor: 'white'
      }
  });
  const mapStateToProps = (state) => ({
      products: state.products.items
  })
  
  export default connect(mapStateToProps, {addToCart,fetchProducts})(Products);
