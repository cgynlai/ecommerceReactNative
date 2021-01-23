import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ScrollView,Text } from 'react-native';
import { connect } from 'react-redux';
import Product from '../components/Productcomponent';
import { addToCart } from '../redux/actions/cartAction';
import { fetchProducts } from '../redux/actions/productAction';
//import Logo from '../components/Logo.component';
//import Cart from '../components/Cart.component';

class Products extends Component {
    
    constructor(props) {
        super(props);
    }
  
    componentDidMount = () => {
      this.props.fetchProducts();
    }
  
    addItemsToCart = (product) => {
        this.props.addToCart(product);
    }
  
    render() {
      const { products, navigation } = this.props;
      if(!products) return <View><Text>Loading...</Text></View>
      
      return (
       //test revert here
         
          <View style={styles.container}>
            
          
       
            <FlatList 
            numColumns={2}
            data={products} 
            renderItem={({item}) => <Product item={item} addItemsToCart={this.addItemsToCart} product={item}/>}
            keyExtractor ={(item) => item.id}
            
            />
         
          </View>
       
   
      );
    }
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
