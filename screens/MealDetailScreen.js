import { Image, StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data"
import MealDetails from "../components/MealDetails"

const MealDetailScreen = ({ route }) => {

  const mealId = route.params.mealId
  
  const selectedMealItem = MEALS.find((meal) => meal.id === mealId)

  return (
    <View>
      <Image source={{ uri: selectedMealItem.imageUrl }} style={styles.image} />
      <Text>{selectedMealItem.title}</Text>
      <MealDetails 
        duration={selectedMealItem.duration} 
        complexity={selectedMealItem.complexity}
        affordability={selectedMealItem.affordability}
      />

    </View>
  )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  }
})