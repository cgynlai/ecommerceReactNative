import React, { Component } from 'react';
import {
    NavigationContainer,
    useFocusEffect,
  } from '@react-navigation/native';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import CartItems from '../components/CartItem';

const CartPage =( {cartItems}) => {
    
       
        //const { cartItems, cartTotal } = this.props;
        return (
            <View>
                <View>
                <Text> Your Cart List </Text>
            </View>
            <FlatList data={cartItems}
            renderItem={({item, index}) => <CartItems item={item} index={index} />}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent= {()=> <View style={{height:0.3, backgroundColor:'#34495e90'}}/> } />

            </View>
           
           
        )
    }


const mapStateToProps = (state) => ({
    cartItems: state.cart.cart,
    cartTotal: state.cart.total
});


export default connect(
    mapStateToProps
)(CartPage);

