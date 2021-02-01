import React from 'react'
import { View, Text, Image, Dimensions,StyleSheet,TouchableOpacity } from 'react-native';
import {
    NavigationContainer,
    useFocusEffect,
  } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler'

export default function home({navigation}) {
    const {width} = Dimensions.get("window");
    useFocusEffect(
        React.useCallback(() => {
          // Do something when the screen is focused
          alert('screen focused')
          navigation.navigate('Home');
          return () => {
            // Do something when the screen is unfocused
            // Useful for cleanup functions
            alert('screen not focused')
          };
        }, [])
      );
    
    return (
       <View style={styles.container}>
        
            <Image source={require('../assets/Image/carousel1c.png')} style={{height:130, width:440}} resizeMode="stretch"/>
            
            <View style={{flexDirection: 'row', height: 30, borderWidth:1, borderColor: 'red', marginBottom: 10}} >
                <View style={{flex: 1, justifyContent: 'center', borderColor: 'red', borderWidth: 1}}></View>
                <View style={{flex: 2, justifyContent: 'center', borderColor: 'red', borderWidth: 1}}></View>
                <View style={{flex: 1, justifyContent: 'center', borderColor: 'red', borderWidth: 1}}></View>
            </View>
             
           
        
        <ScrollView>
         <View>
             
             <Text style={{marginBottom:10, textAlign: 'center', fontSize: 25}}>Chinese New Year Sales</Text>
         </View>
             <View style={{height:180}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} snapToInterval={width} style={{height:180}} >
            
                
                <Image source={require('../assets/Image/canned_fruit.png')} style={{height:180, width:180, marginRight:20}} resizeMode="contain"/>
                
                
                <Image source={require('../assets/Image/soy_sauce.png')} style={{height:170, width:170, marginRight: 5}} resizeMode="contain"/>
                
                
                <Image source={require('../assets/Image/tomato_sauce.png')} style={{height:180, width:180,marginRight: 2}} resizeMode="contain"/>
                <Image source={require('../assets/Image/butter_cookie.png')} style={{height:160, width:160,marginRight: 2}} resizeMode="contain"/>
                
             
             </ScrollView>
             </View>
             <TouchableOpacity style={styles.addBtn} onPress={()=>navigation.navigate('ProductStack')}>
                    <Text style={styles.text}>Add to cart</Text>
                </TouchableOpacity>

                <View>
             
             <Text style={{marginBottom:10, textAlign: 'center', fontSize: 25}}>Popular Products</Text>
         </View>
             <View style={{height:180}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} snapToInterval={width} style={{height:180}} >
            
                
                <Image source={require('../assets/Image/canned_fruit.png')} style={{height:180, width:180, marginRight:20}} resizeMode="contain"/>
                
                
                <Image source={require('../assets/Image/soy_sauce.png')} style={{height:170, width:170, marginRight: 5}} resizeMode="contain"/>
                
                
                <Image source={require('../assets/Image/tomato_sauce.png')} style={{height:180, width:180,marginRight: 2}} resizeMode="contain"/>
                <Image source={require('../assets/Image/butter_cookie.png')} style={{height:160, width:160,marginRight: 2}} resizeMode="contain"/>
                
             
             </ScrollView>
             </View>
             <TouchableOpacity style={styles.addBtn} onPress={()=>navigation.navigate('ProductStack')}>
                    <Text style={styles.text}>Add to cart</Text>
                </TouchableOpacity>
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
    addBtn: {
        borderRadius: 30,
        margin: 10,
        backgroundColor: 'blue',
        width: 100
    },
})
