import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import * as ImagePicker from "expo-image-picker"

const Button = ({ label, theme, setSelectedImage }) => {

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    })

    if (!result.canceled) {
      if (setSelectedImage) {
        setSelectedImage(result.assets[0].uri)
      }
    } else {
      alert("you did not select an image");
    }
  }

  return (
    theme === "primary" ? (
      <View
        style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={pickImage}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
        </Pressable>
      </View>
    ) : (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert("you pressed me")}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
    )
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Button