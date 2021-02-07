import React, { Component } from 'react';
import { Text, View,StyleSheet, TouchableOpacity,Alert, Image } from 'react-native';
import { connect } from 'react-redux';
import { removeItem } from '../redux/actions/cartAction';
import Swipeout from 'react-native-swipeout';

class CartItem extends Component {
    state = {
        activeRowKey: null
    }
    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => { this.setState({activeRowKey: null})},
            onOpen: (secId, rowId, direction) => { this.setState({activeRowKey: this.props.item.id})},
            right: [
                {
                    onPress: () => {
                        const deleteRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete?',
                            [
                            {text: 'No', onPress:() => console.log('Cancel Pressed'), style: 'cancel'},
                            {text: 'Yes', onPress:() => { this.props.removeItem({index: this.props.index, item: this.props.item})}},
                            ],
                            { cancelable: true}
                        )
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        }



        const { item, index } = this.props;
       // console.log(item);
        return (
            
               <Swipeout {...swipeSettings}>
               <View style={styles.container}>
                   <View style={styles.productDes}>
                       <View style={{flex: 1, justifyContent: 'center'}}>
                       <Image source={item.image} style={{width:70,height:70}}/>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                <Text>{item.name}</Text>
        
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end',alignItems: 'flex-end'}}>
                <Text>${(item.price).toFixed(2)}{' '} x{' '} {item.count}</Text>
                </View>
                </View>


                
                </View>
                
            
                 </Swipeout>
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
        marginBottom: 5,
        padding: 5,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 14,
        padding: 10
    }
});
export default connect((state) => ({cartItems: state.cart.cart,}),{removeItem})(CartItem);