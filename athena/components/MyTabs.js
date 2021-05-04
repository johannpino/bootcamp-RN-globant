import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {View, Text, StyleSheet} from 'react-native'
import Home from './Home'
import Projects from './Projects'

const Tab  = createBottomTabNavigator()

const MyTabs = () => {
    return (
        <Tab.Navigator initialRouteName="Home" >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Projects" component={Projects} />
        </Tab.Navigator>

    )
}

export default MyTabs