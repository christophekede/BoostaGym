import { View, Text, StyleSheet } from "react-native"

export default function ({ exercise }) {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{exercise.name} </Text>
      <Text style={styles.exerciseSubtitle}>
        <Text style={styles.subValue}>{exercise.muscle}</Text> | <Text style={styles.subValue}> {exercise.equipment}</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,
    marginHorizontal: 2,
    shadowColor: "#000", //https://ethercreative.github.io/react-native-shadow-generator/
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
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
})
