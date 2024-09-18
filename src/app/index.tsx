import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, FlatList } from "react-native"
import exercises from "../../assets/data/exercises.json"
import ExerciceListItem from "../components/ExerciceListItem"


export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ gap: 5 }}
        keyExtractor={(exercise, index) => exercise.name + index}
        data={exercises}
        renderItem={({ item: exercise }) => <ExerciceListItem exercise={exercise} />}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite", // https://reactnative.dev/docs/colors
    justifyContent: "center",
    padding: 10,
   
  },
})
