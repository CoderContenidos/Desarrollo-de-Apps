import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ItemListCategories from '../Screens/ItemListCategory';
import ItemDetail from '../Screens/ItemDetail';
import Categories from '../Screens/Categories';
import Header from '../Components/Header';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName='Home'
            screenOptions={
                ({route}) => (
                    {
                        header: () => {
                            return <Header title={
                                route.name === "Categories" ? "Categories":
                                route.name === "ItemListCategory" ? route.params.category:
                                "Detail"
                            }/>
                        }
                    }
                )
            }
        >
            <Stack.Screen 
                name="Categories" 
                component={Categories}
                />
            <Stack.Screen 
                name="ItemListCategory" 
                component={ItemListCategories}
            />
            <Stack.Screen 
                name="Detail" 
                component={ItemDetail}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})