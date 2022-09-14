import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import {store} from "./store";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainScreen from "./screens/MainScreen";

export default function App() {
  return (
      <SafeAreaProvider>
          <Provider store={store}>
              <MainScreen />
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
