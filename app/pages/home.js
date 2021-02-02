import React from 'react'
import { View, Text, Image, Dimensions,StyleSheet,TouchableOpacity } from 'react-native';
import {
    NavigationContainer,
    useFocusEffect,
  } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler'

export default function home({navigation}) {
    const {width} = Dimensions.get("window");
   
    
    return (
       <View style={styles.container}>
         <ScrollView>
            <Image source={require('../assets/Image/carousel1c.png')} style={{height:120, width:440, marginBottom:15}} resizeMode="stretch"/>
            
            <View style={{flexDirection: 'row', marginBottom: 10}} >
                <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                <Image source={require('../assets/Image/CNY.jpg')} style={{height:60, width:60, alignItems:'center'}} resizeMode="stretch"/>
                </View>
                <View style={{flex: 3, justifyContent: 'center', borderColor: '#ff5252', borderWidth: 0, backgroundColor:'white',borderRadius: 15, alignItems:'center'}}>
                <Text style={{marginBottom:10, textAlign: 'center', fontSize: 20,  color:'#ff3030', fontWeight: 'bold'}}>Chinese New Year Sales</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center',alignItems:'center' }}>
                <Image source={require('../assets/Image/CNY.jpg')} style={{height:60, width:60, alignItems:'center'}} resizeMode="stretch"/>
                </View>
            </View>
             
           
        
       
         {/* <View>
             
             <Text style={{marginBottom:10, textAlign: 'center', fontSize: 25, backgroundColor:'red', color:'white'}}>Chinese New Year Sales</Text>
         </View> */}
             <View style={{height:155}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} snapToInterval={width} style={{height:155}} >
            
                
                <Image source={require('../assets/Image/canned_fruit.png')} style={{height:150, width:150, marginRight:10}} resizeMode="contain"/>
                <Image source={require('../assets/Image/soy_sauce.png')} style={{height:150, width:150, marginRight: 10}} resizeMode="contain"/>
                <Image source={require('../assets/Image/tomato_sauce.png')} style={{height:150, width:150,marginRight: 10}} resizeMode="contain"/>
                <Image source={require('../assets/Image/butter_cookie.png')} style={{height:150, width:150,marginRight: 10}} resizeMode="contain"/>
                
             
             </ScrollView>
             </View>
             <View style={{flex:1, alignItems:'center'}}>
             <TouchableOpacity style={styles.addBtn} onPress={()=>navigation.navigate('ProductStack')}>
                    <Text style={styles.text}>SHOP NOW</Text>
                </TouchableOpacity>
                </View>
                <View style={{marginTop:15}}>
             
             <Text style={{marginBottom:10, textAlign: 'center', fontSize: 20}}>Popular Products</Text>
         </View>
             <View style={{height:155}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} snapToInterval={width} style={{height:155}} >
            
                
                <Image source={require('../assets/Image/corn_flakes.jpg')} style={{height:150, width:150, marginRight:10}} resizeMode="contain"/>
                
                
                <Image source={require('../assets/Image/oyster_sauce.jpg')} style={{height:150, width:150, marginRight: 10}} resizeMode="contain"/>
                
                
                <Image source={require('../assets/Image/nestum_grain1.png')} style={{height:150, width:150,marginRight: 10}} resizeMode="contain"/>
                <Image source={require('../assets/Image/cashew_nut.jpg')} style={{height:150, width:150,marginRight: 10}} resizeMode="contain"/>
                <Image source={require('../assets/Image/potato_chips.jpg')} style={{height:150, width:150,marginRight: 10}} resizeMode="contain"/>
             
             </ScrollView>
             </View>

             <View style={{flex:1, alignItems:'center'}}>
             <TouchableOpacity style={styles.addBtn} onPress={()=>navigation.navigate('ProductStack')}>
                    <Text style={styles.text}>SHOP NOW</Text>
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
    addBtn: {
        textAlign: 'center',
        borderRadius: 30,
        margin: 10,
        backgroundColor: '#fc7e35',
        width: 150
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize:15
    }
})
