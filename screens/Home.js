import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import CupertinoButtonGrey2 from "../components/CupertinoButtonGrey2";

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Text style={styles.cuts}>Cuts</Text>
        </View>
        <Svg viewBox="0 0 300 300" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(1,1,1,1)"
            strokeWidth={1}
            fill="rgba(142,102,54,1)"
            cx={150}
            cy={150}
            rx={150}
            ry={150}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 270 270" style={styles.ellipse2}>
          <Ellipse
            stroke="rgba(0,0,0,1)"
            strokeWidth={2}
            fill="rgba(144,16,16,1)"
            cx={135}
            cy={135}
            rx={134}
            ry={134}
          ></Ellipse>
        </Svg>
        <Image
          source={require("../assets/meat-modified.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <ImageBackground
          source={require("../assets/beef.png")}
          resizeMode="contain"
          style={styles.image2}
          imageStyle={styles.image2_imageStyle}
        >
          <Text style={styles.beef2}>BEEF</Text>
        </ImageBackground>
      </View>
      <View style={styles.rect2Row}>
        <View style={styles.rect2}>
          <Image
            source={require("../assets/66649.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        </View>
        <View style={styles.detectionMeatColumn}>
          <Text style={styles.detectionMeat}>DETECTION MEAT</Text>
          <View style={styles.loremIpsumStack}>
            <Text style={styles.loremIpsum}></Text>
            <Text style={styles.detectionMeat1}>
              Would you like to know what type of cut you are consuming?
            </Text>
          </View>
        </View>
      </View>
      <CupertinoButtonGrey2
        style={styles.cupertinoButtonGrey1}
        onPress={()=> navigation.navigate('CutsInfo')}
      ></CupertinoButtonGrey2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  rect: {
    top: 143,
    left: 106,
    width: 211,
    height: 321,
    position: "absolute",
    backgroundColor: "rgba(132,21,21,1)"
  },
  cuts: {
    fontFamily: "quicksand-700",
    color: "rgba(247,247,247,1)",
    fontSize: 30,
    opacity: 0.83,
    textAlign: "center",
    width: 167,
    height: 40,
    marginTop: 93,
    marginLeft: 22
  },
  ellipse: {
    top: 372,
    width: 300,
    height: 300,
    position: "absolute",
    left: 61
  },
  ellipse2: {
    top: 387,
    left: 76,
    width: 270,
    height: 270,
    position: "absolute"
  },
  image: {
    top: 389,
    left: 79,
    width: 265,
    height: 265,
    position: "absolute",
    opacity: 0.79
  },
  image2: {
    top: 0,
    width: 438,
    height: 533,
    position: "absolute",
    left: 0
  },
  image2_imageStyle: {
    opacity: 0.32
  },
  beef2: {
    fontFamily: "noto-serif-700",
    color: "rgba(255,255,255,1)",
    fontSize: 45,
    opacity: 0.83,
    textAlign: "center",
    width: 167,
    height: 57,
    marginTop: 258,
    marginLeft: 128
  },
  rectStack: {
    width: 438,
    height: 672,
    marginTop: -143,
    marginLeft: -15
  },
  rect2: {
    width: 104,
    height: 77,
    backgroundColor: "rgba(142,102,54,0.5369)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.91)",
    borderRadius: 9,
    marginTop: 15
  },
  image3: {
    width: 58,
    height: 75,
    opacity: 0.5,
    marginTop: 1,
    marginLeft: 32
  },
  detectionMeat: {
    fontFamily: "noto-sans-mono-700",
    color: "rgba(154,17,17,1)",
    fontSize: 23,
    marginTop: -1,
    marginLeft: 2
  },
  loremIpsum: {
    top: 38,
    left: 44,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  detectionMeat1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "quicksand-500",
    color: "rgba(249,242,242,1)",
    fontSize: 18,
    textAlign: "right"
  },
  loremIpsumStack: {
    width: 201,
    height: 69,
    marginTop: 8
  },
  detectionMeatColumn: {
    width: 201,
    marginLeft: 71
  },
  rect2Row: {
    height: 108,
    flexDirection: "row",
    marginTop: 44,
    marginLeft: -21,
    marginRight: 20
  },
  cupertinoButtonGrey1: {
    height: 64,
    width: 239,
    opacity: 0.87,
    backgroundColor: "rgba(132,21,21,1)",
    borderRadius: 86,
    marginTop: 15,
    marginLeft: 83
  }
});

export default Home;
