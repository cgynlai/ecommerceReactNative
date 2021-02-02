import React, { Component } from 'react';
import {
    NavigationContainer,
    useFocusEffect,
  } from '@react-navigation/native';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CartItems from '../components/CartItem';
import { ScrollView } from 'react-native-gesture-handler';

const CartPage =( {cartItems}) => {
    
       
        //const { cartItems, cartTotal } = this.props;
        return (
            <View>
                <View style={{marginBottom:5}}>
                <Text style={styles.text}> Your Cart List </Text>
            </View>
      
            <FlatList data={cartItems}
            renderItem={({item, index}) => <CartItems item={item} index={index} />}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent= {()=> <View style={{height:0.3, backgroundColor:'#34495e90'}}/> } />
            {cartItems.length !==0 && (
                <View>
                    <Text style={{textAlign: 'right', fontSize: 16}}>
                       Total : ${(cartItems.reduce((acc,curr)=>acc + curr.price*curr.count,0)).toFixed(2)} 
                    </Text>
                </View>
            )

            }
      
            </View>
           
           
        )
    }

    const styles = StyleSheet.create ({
       text : {
        textAlign: 'center',
        color: 'white',
        fontSize:18,
        backgroundColor: '#fc7e35',
        fontWeight:'bold',
        padding: 5
       } 
    })


const mapStateToProps = (state) => ({
    cartItems: state.cart.cart,
    cartTotal: state.cart.total
});


export default connect(
    mapStateToProps
)(CartPage);

