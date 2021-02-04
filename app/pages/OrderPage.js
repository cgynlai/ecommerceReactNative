import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import OrderItem from '../components/OrderItem';
import { ScrollView } from 'react-native-gesture-handler';

const OrderPage =( {cartItems}) => {
    
       
        //const { cartItems, cartTotal } = this.props;
        return (
            <View>
                <View style={{marginBottom:5}}>
                <Text style={styles.text}> Your order is confirmed. </Text>
            </View>
            <View style={styles.productDes}>
                       <View style={{flex: 1, justifyContent: 'center'}}>
                       <Text>S/N</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                <Text>Product Name</Text>
        
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end',alignItems: 'flex-end'}}>
                <Text> Quantity</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end',alignItems: 'flex-end'}}>
                <Text>Price</Text>
                </View>
                </View>
      
            <FlatList data={cartItems}
            renderItem={({item, index}) => <OrderItem item={item} index={index} />}
            keyExtractor={(item) => item.id}
            />
            {cartItems.length !==0 && (
                <View style={{marginTop:10}}>
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
        color: 'black',
        fontSize:18,
        // backgroundColor: '#fc7e35',
        fontWeight:'bold',
        padding: 5
       },
       productDes: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    })


const mapStateToProps = (state) => ({
    cartItems: state.cart.cart,
    cartTotal: state.cart.total
});


export default connect(
    mapStateToProps
)(OrderPage);
