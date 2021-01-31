import React, { Component, useState, useEffect } from 'react';
import { getProducts } from '../productlist';
import { View, Image,StyleSheet, FlatList, TouchableOpacity, ScrollView,Text, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import Product from '../components/Productcomponent1';
import { addToCart } from '../redux/actions/cartAction';
import { fetchProducts } from '../redux/actions/productAction';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
//import Logo from '../components/Logo.component';
//import Cart from '../components/Cart.component';

const Products = (props) => {
    // useEffect(() => {
    // props.fetchProducts();  
    // }, [])

  
    // const addItemsToCart = (product) => {
    //     props.addToCart(product);
    // }
  
    // const detailpage = (item) => {
    //     navigation.navigate('Productdetail', item )
    //     console.log(item.name);
    // }

      //const { products, navigation } = props;
      
       const products = getProducts();

       const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
       { 
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: 'Third Item',
      },
      {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d76',
      title: 'Third Item',
    }
      ];

       const renderItem = ({item}) => {
           return (
               <View>
                   {/* <Image source={item.image} style={{width:50,height:50}} /> */}
                   <Text style={styles.ts}>
                       {item.title}
                   </Text>
               </View>
           )
       }
      
      return (
       //test revert here
         
          
            
         <SafeAreaView style={styles.container}>
       
            <FlatList 
            // numColumns={2}
            
            data={DATA} 
            renderItem={renderItem}
            keyExtractor ={(item, index) => index.toString()}
            // ItemSeparatorComponent= {()=> <View style={{height:0.5, backgroundColor:'#34495e90'}}/> }
            />
         
         </SafeAreaView>
       
   
      );
    }
  
  
  const styles = StyleSheet.create({
      container: {
       flex: 1,
       margin:2,
      },
      ts: {
          fontSize: 30,
          padding: 30
      }
    
    //   body: {
    //     flex: 1,
    //     justifyContent: 'center'
    //   }
  });
//   const mapStateToProps = (state) => ({
//       products: state.products.items
//   })
  
//   export default connect(mapStateToProps, {addToCart,fetchProducts})(Products);
export default Products;