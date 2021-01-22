import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Product from '../components/Productcomponent';
import { addToCart } from '../redux/actions/cartAction';
import { fetchProducts } from '../redux/actions/productAction';
//import Logo from '../components/Logo.component';
//import Cart from '../components/Cart.component';

class Products extends Component {
    static navigationOptions = ({navigation}) => {
      return {
        headerTitle: 'Products',
        
      }
    }
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
      const { products, navigation } = this.props
      return (
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
