import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image } from 'react-native';
//import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import { createStackNavigator } from '@react-navigation/stack';
import Products from '../pages/Products';
//import Checkout from '../pages/Checkout';
import CartPage from '../pages/CartPage';
import Receipt from '../pages/Receipt';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Productdetail from '../pages/Productdetail';
import Homepage from '../pages/home';


// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Products" component={Products} />
//       <Drawer.Screen name="CART" component={CartPage} />
//       <Drawer.Screen name="Receipt" component={Receipt}  />
//     </Drawer.Navigator>
//   );
// }


const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Homepage}/>
            <Stack.Screen name="ProductStack" component={ProductStack}/>
            
        </Stack.Navigator>
    )
}

function ProductStack() {
    return (
        <Stack.Navigator initialRouteName="Products">
            <Stack.Screen name="Products" component={Products}/>
            <Stack.Screen name="Productdetail" component={Productdetail}/>
            
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();
function MyTab() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? require('../assets/Image/homeB.png')
                  : require('../assets/Image/homeB-black.png');
              } else if (route.name === 'CART') {
                iconName = focused ? require('../assets/Image/cartA.png') : require('../assets/Image/cartA-black.png');
              } else if (route.name === 'Products') {
                iconName = focused ? require('../assets/Image/boxA.png') : require('../assets/Image/boxA-black.png');
              }
  
              // You can return any component that you like here!
              return <Image source={iconName} style={{width: 20, height: 20}} resizeMode="contain" />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Products" component={ProductStack} />
        <Tab.Screen name="CART" component={CartPage} />
        {/* <Tab.Screen name="Receipt" component={Receipt} /> */}

    </Tab.Navigator>  
    )

}

// const Tab = createMaterialTopTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeStack} />
//         <Tab.Screen name="ProductStack" component={ProductStack} />
//         <Tab.Screen name="CART" component={CartPage} />
//         <Tab.Screen name="Receipt" component={Receipt} />
//     </Tab.Navigator>
//   );
// }

export default MyTab;
