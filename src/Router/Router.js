
import React from 'react';
import FormDetailScreen from '../component/FormDetailScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../component/LoginPage';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="FormDetail" 
        component={FormDetailScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" size={size} color={color} /> // Use an icon from Ionicons
          ),
        }} 
      />
    </Tab.Navigator>
  );
}
function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="loginPage" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="FormDetail" component={FormDetailScreen} options={{ title: 'Form' }} />
      <Stack.Screen 
        name="BottomTabs" 
        component={BottomTabs} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}

export default Router;
