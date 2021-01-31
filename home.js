import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function home() {
    const {width} = Dimensions.get("window");
    return (
       <View>
        <View style={{height:110, borderWidth:1, borderColor: 'red'}}>
            <Image source={require('../assets/Image/carousel1c.png')} style={{height:100, width:440}} resizeMode="stretch"/>
            <View style={{flexDirection: 'row', height: 50, borderWidth:1, borderColor: 'red'}} >
                <View style={{flex: 1, justifyContent: 'center', borderColor: 'red', borderWidth: 1}}></View>
                <View style={{flex: 2, justifyContent: 'center', borderColor: 'red', borderWidth: 1}}></View>
                <View style={{flex: 1, justifyContent: 'center', borderColor: 'red', borderWidth: 1}}></View>
            </View>

         </View>   
            <ScrollView horizontal snapToInterval={width}>
            
                
                <Image source={require('../assets/Image/canned_fruit.png')} style={{height:180, width:180, marginRight: 2}} resizeMode="contain"/>
                
                
                <Image source={require('../assets/Image/soy_sauce.png')} style={{height:180, width:180, marginRight: 2}} resizeMode="contain"/>
                
                
                <Image source={require('../assets/Image/tomato_sauce.png')} style={{height:180, width:180,marginRight: 2}} resizeMode="contain"/>
                <Image source={require('../assets/Image/butter_cookie.png')} style={{height:180, width:180,marginRight: 2}} resizeMode="contain"/>
                
             
             </ScrollView>
            
        
        

        </View>
    )
}
