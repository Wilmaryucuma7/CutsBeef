import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function MaterialButtonDark2(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={props.onPress}>
      
        <Text style={styles.uploadImage}>UPLOAD IMAGE</Text>
      
      <Icon name="align-bottom" style={styles.icon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(132,21,21,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  uploadImage: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "noto-sans-mono-700",
    textAlign: "right",
    width: 132,
    alignSelf: "center"
  },
  icon: {
    top: 7,
    left: 39,
    position: "absolute",
    color: "rgba(211,188,188,1)",
    fontSize: 40,
    width: 40
  }
});

export default MaterialButtonDark2;
