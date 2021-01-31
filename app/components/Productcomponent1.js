import React, { Component } from 'react';
import { 
    View, 
    Text,
    Image,
    StyleSheet,
    TouchableOpacity 
} from 'react-native';

//import themes from '../styles/theme.style';

function Product (props) {

    // const addToCart = (props) => {
    //     props.addItemsToCart(props.item)
    // }

    // const navProdetail = (props) => {
    //     props.detailpage(props.item);
    
    // }
     

   
    const { product } = props;
            return (
        // <View style={styles.container}>
        <View style={styles.container}>
           {/* <TouchableOpacity onPress={()=>navProdetail(props)}> */}
            <Image source={product.image} style={{width:150,height:150}}/>
            {/* </TouchableOpacity> */}
            <View style={styles.productDes}>
                <Text>{product.name}</Text>
                <Text>${(product.price).toFixed(2)}</Text>
                
                {/* <TouchableOpacity onPress={()=>addToCart(props)} style={styles.addBtn}> */}
                    <Text style={styles.text}>Add to cart</Text>
                {/* </TouchableOpacity> */}
            </View>
        </View>
    );
    

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        margin: 10,
    },
    productDes: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    addBtn: {
        borderRadius: 30,
        margin: 10,
        backgroundColor: 'blue'
    },
    text: {
        color: '#fff',
        fontSize: 16,
        padding: 10
    }
});

export default Product;
