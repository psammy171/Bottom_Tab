import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './screens/Welcome';
import User from './screens/User';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserProfile from './screens/UserProfile';

const Stack = createNativeStackNavigator()

const NestedNav = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor:'#3c0a6b'},
        headerTintColor:'white',
        tabBarActiveTintColor:'#3c0a6b'
      }}>
        <Stack.Screen name='UserDetails' component={User}/>
        <Stack.Screen name='UserProfile' component={UserProfile}/>
      </Stack.Navigator>
    </>
  )
}

const BottomTab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{
        headerStyle:{backgroundColor:'#3c0a6b'},
        headerTintColor:'white',
        tabBarActiveTintColor:'#3c0a6b'
      }}>
        <BottomTab.Screen name='Welcome' component={Welcome}/>
        <BottomTab.Screen name='User' component={NestedNav} options={{
          headerShown:false,
        }}/>
      </BottomTab.Navigator>
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
