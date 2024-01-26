import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PaymentScreen from './src/screens/PaymentScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import TabNavigator from './src/navigators/TabNavigator';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, animation: 'slide_from_bottom'}}>
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
