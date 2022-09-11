import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import {store} from "./store";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import MapScreen from "./screens/MapScreen";
import FoodScreen from "./screens/FoodScreen";
//import "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <SafeAreaProvider>
          <Provider store={store}>
              <NavigationContainer>
                  <Stack.Navigator  initialRouteName="Home">
                      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
                      <Stack.Screen name="Map" component={MapScreen} />
                      <Stack.Screen name="Food" component={FoodScreen} />
                  </Stack.Navigator>
              </NavigationContainer>
          </Provider>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
