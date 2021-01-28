import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Productdetail({ route, navigation }) {
    const { item } = route.params;
    console.log(route.params.name);
    return (
        <View style={styles.container}>
        <Image source={route.params.image} style={{width:150,height:150}}/>    
            <Text>{ route.params.name }</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        margin: 10,
    }
})