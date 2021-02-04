import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

import { removeItem } from '../redux/actions/cartAction';

class OrderItem extends Component {
    

    render() {
        const { item, index } = this.props;
        return (
            <View style={styles.container}>
                   <View style={styles.productDes}>
                       <View style={{flex: 1, justifyContent: 'center'}}>
                       <Text>{index+1}</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                <Text>{item.name}</Text>
        
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end',alignItems: 'flex-end'}}>
                <Text> {item.count}</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end',alignItems: 'flex-end'}}>
                <Text>${(item.price).toFixed(2)}{' '}</Text>
                </View>
                </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },
    productDes1: {
        flexDirection: 'row',
       
       
    },

    productDes: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 5,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 14,
        padding: 10
    }
});
export default connect((state) => ({cartItems: state.cart.cart,}),{removeItem})(OrderItem);