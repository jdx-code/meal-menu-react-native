import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: { backgroundColor: '#3E3E3E' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#ECFECF' }
          }}
        >
          <Stack.Screen 
            name="MealsCategories" 
            component={CategoriesScreen}
            options={{
              title: "Meal Categories",              
            }}
          />

          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen}
          />

          <Stack.Screen 
            name="MealDetail" 
            component={MealDetailScreen}
            options={{
              title: "Meal Detail"
            }}
          />
        </Stack.Navigator>        
      </NavigationContainer>
      
    </>    
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
