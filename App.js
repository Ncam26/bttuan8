import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screen1 from './screen/screen1';
import screen2 from './screen/screen2';
import screen3 from './screen/screen3';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={screen1} options={{headerShown: false}}/>
      <Stack.Screen name="Screen2" component={screen2} />
      <Stack.Screen name="Screen3" component={screen3} />
    </Stack.Navigator>
  </NavigationContainer>
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
