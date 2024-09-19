import { Link } from "expo-router"
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native"
import { useLocalSearchParams } from "expo-router"
import exercises from "../../assets/data/exercises.json"
import { Stack } from "expo-router"
import { createRef, useRef, useState } from "react"

export default function ExerciseDetailsScreen() {
  const params = useLocalSearchParams()
  const exercise = exercises.find((exercise) => exercise.name === params.name)
  const [shouldSeeMoreInstructions, setShouldSeeMoreInstructions] = useState(false)
  console.log("render")
  const see = useRef(false)

  if (!exercise) {
    return <Text>{params.name} Not Found</Text>
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: "hello" }} />
      <View style={styles.panel}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          <Text style={styles.subValue}>{exercise.muscle}</Text> | <Text style={styles.subValue}> {exercise.equipment}</Text>
        </Text>
      </View>
      <View style={styles.panel}>
        <Text style={styles.instructions} numberOfLines={shouldSeeMoreInstructions ? 0 : 3}>
          {exercise.instructions}
        </Text>
        <Pressable style={styles.seeMore} onTouchEnd={() => setShouldSeeMoreInstructions((prev) => !prev)}>
          <Text>{shouldSeeMoreInstructions ? "See less" : "See more"}</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  panel: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
  subValue: {
    textTransform: "capitalize",
  },
  instructions: {
    fontSize: 16,
    lineHeight: 22,
  },
  seeMore: { alignSelf: "center", padding: 10, fontWeight: "600", color: "grey" },
})
