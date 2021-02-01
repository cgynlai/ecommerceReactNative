import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { removeItem } from '../redux/actions/cartAction';

class CartItem extends Component {
    render() {
        const { item, index } = this.props;
        console.log(item);
        return (
            <View>
                <Text>{item.name}</Text>
                <Text>Count: {item.count}</Text>
                <Text>${(item.price).toFixed(2)}</Text>
            </View>
        )
    }
}
export default connect((state) => ({cartItems: state.cart.cart,}),{removeItem})(CartItem);