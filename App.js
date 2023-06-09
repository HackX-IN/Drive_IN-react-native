import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {store} from './redux/store'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux'
import HomeScreen from './Screens/HomeScreen';
import MapScreen from './Screens/MapScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import ProfileScreen from './Screens/ProfileScreen';



const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>

    <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
            style={{ flex: 1 }}
          >
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                  headerShown: false,
                }}
              />
      </Stack.Navigator>
      </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NavigationContainer>

  </Provider>
   
  )
}

export default App

const styles = StyleSheet.create({})