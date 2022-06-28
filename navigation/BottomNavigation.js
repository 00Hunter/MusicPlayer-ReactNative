import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LibraryScreen from '../Screens/LibraryScreen';
import ListScreen from '../Screens/ListScreen';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 



const Tab = createMaterialBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator 
    screenOptions={{
      headerShown:false,
      
   }}
   activeColor="#ffffff"
   inactiveColor="#ffffff"
   barStyle={{ backgroundColor: '#262626' }}
   
    >
      <Tab.Screen
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Entypo name="home" size={24} color="white" />
        ), }}

      name="Home" 

      component={ListScreen}
       />
      <Tab.Screen 
      name="Library" 
      component={LibraryScreen} 
 
      options={{
        tabBarLabel: 'Library',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="my-library-music" size={24} color="white" />
        ), }}
      />
    </Tab.Navigator>
  );
}
export default BottomNavigation