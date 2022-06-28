import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import CurrentMusic from './Components/CurrentMusic';
import ListScreen from './Screens/ListScreen';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './navigation/BottomNavigation';



export default function App() {
  return (
    
    <NavigationContainer>
      <BottomNavigation/>
      </NavigationContainer>
    
  );
}



