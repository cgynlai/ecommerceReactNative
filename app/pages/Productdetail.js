import React from 'react'
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cartAction';

const Productdetail = ({ route, navigation,addToCart}) =>{
    //const { item } = route.params;
   
    const item = route.params;
    // const addItem = (item) =>{
    //     props.addToCart(item);
    // }
    return (
        // <View style={styles.container}>
        // <Image source={route.params.image} style={{width:150,height:150}}/>    
        //     <Text>{ route.params.name }</Text>
        // </View>
        
        <View style={styles.container}>
        <ScrollView>
            <View style={styles.imagecontainer}>
            <Image source={route.params.image} style={styles.image} />
            </View>
            <Text style={styles.titleText}>{route.params.name}{"\n"}${item.price}</Text>
            <Text style={styles.baseText}>{route.params.description}{"\n"} {item.weight}</Text>
          
    
            <View style={styles.imagecontainer}>
            <TouchableOpacity onPress={()=>addToCart(route.params)} style={styles.addBtn}>
                    <Text style={styles.btntext}>Add to cart</Text>
                </TouchableOpacity>
                </View>
        </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        // alignItems: 'center',
        margin: 0,
        backgroundColor: "white"
       
    },
    imagecontainer: {
        alignItems: 'center',
        marginTop: 3
    },
    text: {
        fontSize: 10,
        paddingLeft: 20,
        paddingBottom: 20,
        textAlign: 'center'
    },
    image: {
        width: 280,
        height: 280,
        marginBottom:10,
        alignItems: 'center'
    },
    addBtn: {
        borderRadius: 30,
        margin: 5,
        backgroundColor: '#a3c234',
        alignItems:"center",
        height: 50,
        width: 245,
        justifyContent: 'center'
    },
    btntext: {
        color: '#fff',
        fontSize: 16,
        padding: 10,
        fontWeight: 'bold',
        
    },
    baseText: {
        fontFamily: "Cochin",
        padding:25
      },
      titleText: {
        fontSize: 20,
        fontWeight: "bold",
        padding:25
      }
});

const mapStateToProps = (state) => ({
    cartItems: state.cart.cart,
    cartTotal: state.cart.total
});

export default connect(mapStateToProps, {addToCart})(Productdetail);