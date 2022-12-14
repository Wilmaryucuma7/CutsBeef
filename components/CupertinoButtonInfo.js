import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function CupertinoButtonInfo(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={props.onPress}>
      <View style={styles.takeAPictureStack}>
        <Text style={styles.takeAPicture}>TAKE A PICTURE</Text>
        <Icon name="camera" style={styles.icon}></Icon>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(132,21,21,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 95,
    paddingLeft: 16,
    paddingRight: 16
  },
  takeAPicture: {
    left: 0,
    position: "absolute",
    fontFamily: "noto-sans-mono-700",
    color: "rgba(255,255,255,1)",
    textAlign: "right",
    fontSize: 22,
    right: 0,
    top: 0
  },
  icon: {
    top: 5,
    left: -15,
    position: "absolute",
    color: "rgba(176,165,165,1)",
    fontSize: 40
  },
  takeAPictureStack: {
    height: 78,
    flex: 1,
    marginRight: 84,
    marginLeft: 36,
    marginTop: 6
  }
});

export default CupertinoButtonInfo;
