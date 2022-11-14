import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryProductScreen from '../screens/CategoryProductScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'

const Stack = createNativeStackNavigator();

const ShopNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Inicio'>
            <Stack.Screen name='Inicio' component={CategoriesScreen} />
            <Stack.Screen name='Productos' component={CategoryProductScreen} />
            <Stack.Screen name='Detalle' component={ProductDetailScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default ShopNavigator;