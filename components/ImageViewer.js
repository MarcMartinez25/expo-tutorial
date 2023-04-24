import React from "react"
import { Image, StyleSheet } from "react-native"

const ImageViewer = ({ placeholderImage, selectedImage }) => (
  <Image source={selectedImage !== null ? { uri: selectedImage } : placeholderImage} style={styles.image} />
)

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18
  }
})

export default ImageViewer