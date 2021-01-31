import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

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
        <Stack.Navigator initialRouteName="Home">
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
        <Tab.Navigator backBehavior="initialRoute">
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="ProductStack" component={ProductStack} />
        <Tab.Screen name="CART" component={CartPage} />
        <Tab.Screen name="Receipt" component={Receipt} />

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
