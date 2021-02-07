import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import CartItems from '../components/CartItem';


const CartPage =( {cartItems, navigation}) => {
    
       
        //const { cartItems, cartTotal } = this.props;
        return (
            <View>
                <View style={{marginBottom:5}}>
                <Text style={styles.textHead}> Your Cart List </Text>
            </View>
      
            <FlatList data={cartItems}
            renderItem={({item, index}) => <CartItems item={item} index={index} />}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent= {()=> <View style={{height:0.3, backgroundColor:'#34495e90'}}/> } />
            {cartItems.length !==0 && (
                <View>
                    {/* <Text style={{textAlign: 'right', fontSize: 16}}>
                       Total : ${(cartItems.reduce((acc,curr)=>acc + curr.price*curr.count,0)).toFixed(2)} 
                    </Text> */}
                    
                    <TouchableOpacity style={styles.addBtn} onPress={()=>navigation.navigate('Order')}>
                    <Text style={styles.text}>Place Order</Text>
                </TouchableOpacity>
                
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
        fontWeight:'bold',
        padding: 5
       } ,
       textHead : {
        textAlign: 'center',
        color: 'black',
        fontSize:18,
        fontWeight:'bold',
        padding: 5
       } ,

       addBtn: {
        
        textAlign: 'center',
        borderRadius: 30,
        margin: 10,
        backgroundColor: '#fc7e35',
        width: 150,
        alignSelf: 'center'
    }
    })


const mapStateToProps = (state) => ({
    cartItems: state.cart.cart,
    cartTotal: state.cart.total
});


export default connect(
    mapStateToProps
)(CartPage);

