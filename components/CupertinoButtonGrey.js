import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function CupertinoButtonGrey(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.start}>START</Text>
      <Icon name="chevron-right" style={styles.icon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(107,38,35,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  start: {
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontFamily: "quicksand-700",
    textAlign: "left",
    width: 110,
    height: 29
  },
  icon: {
    top: 10,
    left: 87,
    position: "absolute",
    color: "rgba(244,240,240,1)",
    fontSize: 25,
    width: 21
  }
});

export default CupertinoButtonGrey;
