import React from 'react';
import { SafeAreaProvider} from 'react-native-safe-area-context'
import Home from './src/Screens/Home';
import ReviewDetails from './src/Screens/ReviewDetails';
import About from './src/Screens/About';
import Welcome from './src/Screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          title: 'Welcome',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },
        }}
      />
          <Stack.Screen 
          name="Home"
          component={Home} 
          options={{
            title: 'Home',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              
            },
          }}
           />
          <Stack.Screen 
          name="ReviewDetails" 
          component={ReviewDetails} 
          options={{
            title: 'ReviewDetails',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
          <Stack.Screen 
          name="About" 
          component={About} 
          options={{
            title: 'About',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              
            },
          }}
          />
        </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}