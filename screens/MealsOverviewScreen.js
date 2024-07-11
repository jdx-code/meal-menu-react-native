import { FlatList, StyleSheet, Text, View } from "react-native"
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from "../components/MealItem";
import { useEffect } from "react";

const MealsOverviewScreen = ({ route, navigation }) => {

  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    })
  }, [catId, navigation])

  const renderMealItem = (itemData) => {

    const mealItemProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
      duration: itemData.item.duration
    }

    return <MealItem { ...mealItemProps } />
  }

  return (
    <View style={styles.container}>
        <FlatList 
          data={displayedMeals}
          keyExtractor={(item) => item.id}
          renderItem={renderMealItem}
        />
    </View>
  )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})