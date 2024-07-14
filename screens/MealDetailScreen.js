import { Image, StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data"
import MealDetails from "../components/MealDetails"
import { useContext, useLayoutEffect } from "react"
import { FavoritesContext } from "../store/context/favorites-context"
import IconButton from "../components/IconButton"

const MealDetailScreen = ({ route, navigation }) => {

  const favoriteMealsCtx = useContext(FavoritesContext)

  const mealId = route.params.mealId    
  const selectedMealItem = MEALS.find((meal) => meal.id === mealId)

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)

  function changeFavouriteStatusHandler() {
    if(mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton 
          icon={mealIsFavorite ? 'star' : 'star-outline'}
          color="white" 
          onPress={changeFavouriteStatusHandler} 
        />
      }
    }, [navigation, changeFavouriteStatusHandler])

  })

  

  return (
    <View>
      <Image source={{ uri: selectedMealItem.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMealItem.title}</Text>
      <MealDetails 
        duration={selectedMealItem.duration} 
        complexity={selectedMealItem.complexity}
        affordability={selectedMealItem.affordability}
      />
      <View style={styles.itemList}>
        <Text style={styles.itemListTitle}>Ingredients : </Text>
        {selectedMealItem.ingredients.map((item) => {
          return (
            <Text key={item}>{item}</Text>
          )
        })}
      </View> 

      <View style={styles.itemList}>
        <Text style={styles.itemListTitle}>Steps : </Text>
        {selectedMealItem.steps.map((item) => {
          return (
            <Text key={item}>{item}</Text>
          )
        })}
      </View>     

    </View>
  )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
    textAlign: 'center'
  },
  itemListTitle: {
    fontWeight: 'bold',
  },
  itemList: {    
    margin: 12
  },  
})