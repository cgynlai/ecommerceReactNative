import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Products from '../pages/Products';
//import Checkout from '../pages/Checkout';
import Receipt from '../pages/Receipt';

const Stack=createStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="Receipt" component={Receipt} />

        </Stack.Navigator>
    )
}

export default MyStack;
