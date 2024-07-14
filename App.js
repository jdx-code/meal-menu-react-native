import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import SavedItemScreen from './screens/SavedItemScreen';
import FavoritesScreeen from './screens/FavoritesScreeen';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
 
function DrawerNavigator(){
  return <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#3E3E3E' },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#ECFECF' }
    }}
  >
    <Drawer.Screen 
      name="Categories" 
      component={CategoriesScreen} 
      options={{
        title: 'All Categories'
      }}
    />
    <Drawer.Screen 
      name="Favorites" 
      component={FavoritesScreeen}       
    />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />

      <FavoritesContextProvider>
        <NavigationContainer>
          
          <Stack.Navigator 
            screenOptions={{
              headerStyle: { backgroundColor: '#3E3E3E' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#ECFECF' }
            }}
          >
            <Stack.Screen 
              name="Drawer" 
              component={DrawerNavigator}
              options={{
                // title: "Meal Categories",  
                headerShown: false            
              }}
            />

            <Stack.Screen 
              name="MealsOverview" 
              component={MealsOverviewScreen}            
            />

            <Stack.Screen 
              name="MealDetail" 
              component={MealDetailScreen}
              // options={{
              //   title: "About the meal",
              //   headerRight: () => {
              //     return <Button title="Add as Favorite" />
              //   }
              // }}
            />
          </Stack.Navigator>  

        </NavigationContainer>
      </FavoritesContextProvider>      
      
    </>    
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
