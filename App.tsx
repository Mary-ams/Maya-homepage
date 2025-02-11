import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/components/HomePage';
import { registerRootComponent } from 'expo';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomePage}
          options={{ title: 'Travel Guide' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);

export default App;