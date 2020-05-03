import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import createStore from './store/createStore';
import HomeScreen from './screens/HomeScreen';
const store = createStore();
const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          mode="card"
          headerMode="none"
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
