import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import MaterialButtonDark1 from "../components/MaterialButtonDark1";
import ModalCutInfo from "../components/ModalCutInfo";

function CutsInfo({navigation}) {
    const [isModalOpenCut, setIsModalOpenCut] = useState(false);
  return (
    <View style={styles.container}>
        <ModalCutInfo isModalOpenCut={isModalOpenCut} setIsModalOpenCut={setIsModalOpenCut} />
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
          <Text style={styles.beef1}>BEEF</Text>
        </View>
        <ImageBackground
          source={require("../assets/beef.png")}
          resizeMode="contain"
          style={styles.image3}
          imageStyle={styles.image3_imageStyle}
        >
          <Text style={styles.text}>Cuts</Text>
        </ImageBackground>
        <Svg viewBox="0 0 289.26 287.47" style={styles.ellipse8}>
          <Ellipse
            stroke="rgba(1,1,1,1)"
            strokeWidth={1}
            fill="rgba(0,0,0,1)"
            cx={145}
            cy={144}
            rx={144}
            ry={143}
          ></Ellipse>
        </Svg>
        <ImageBackground
          source={require("../assets/hola-removebg-preview.jpg")}
          resizeMode="contain"
          style={styles.image5}
          imageStyle={styles.image5_imageStyle}
        >
          <Text style={styles.chooseAnOpcion}>CHOOSE AN OPCION</Text>
          <View style={styles.ellipse9StackRow}>
            <TouchableOpacity onPress={()=>{setIsModalOpenCut(!isModalOpenCut)}}  style={styles.ellipse9Stack}>
              <Svg viewBox="0 0 26.7 27.82" style={styles.ellipse9}>
                <Ellipse
                  stroke="rgba(58,13,13,1)"
                  strokeWidth={2}
                  fill="rgba(204,84,84,1)"
                  cx={13}
                  cy={14}
                  rx={12}
                  ry={13}
                ></Ellipse>
              </Svg>
              <Text style={styles.loremIpsum}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ellipse12Stack}>
              <Svg viewBox="0 0 26.7 27.82" style={styles.ellipse12}>
                <Ellipse
                  stroke="rgba(58,13,13,1)"
                  strokeWidth={2}
                  fill="rgba(204,84,84,1)"
                  cx={13}
                  cy={14}
                  rx={12}
                  ry={13}
                ></Ellipse>
              </Svg>
              <Text style={styles.loremIpsum3}>4</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ellipse10StackRow}>
            <TouchableOpacity style={styles.ellipse10Stack}>
              <Svg viewBox="0 0 26.7 27.82" style={styles.ellipse10}>
                <Ellipse
                  stroke="rgba(58,13,13,1)"
                  strokeWidth={2}
                  fill="rgba(204,84,84,1)"
                  cx={13}
                  cy={14}
                  rx={12}
                  ry={13}
                ></Ellipse>
              </Svg>
              <Text style={styles.loremIpsum1}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ellipse11Stack}>
              <Svg viewBox="0 0 26.7 27.82" style={styles.ellipse11}>
                <Ellipse
                  stroke="rgba(58,13,13,1)"
                  strokeWidth={2}
                  fill="rgba(204,84,84,1)"
                  cx={13}
                  cy={14}
                  rx={12}
                  ry={13}
                ></Ellipse>
              </Svg>
              <Text style={styles.loremIpsum2}>3</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <MaterialButtonDark1 onPress={()=> navigation.navigate('Options')}
        style={styles.materialButtonDark1}
      ></MaterialButtonDark1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  rect1: {
    top: 143,
    left: 108,
    width: 211,
    height: 293,
    position: "absolute",
    backgroundColor: "rgba(132,21,21,1)"
  },
  beef1: {
    fontFamily: "noto-serif-700",
    color: "rgba(255,255,255,1)",
    fontSize: 45,
    opacity: 0.83,
    textAlign: "center",
    width: 167,
    height: 57,
    marginTop: 115,
    marginLeft: 22
  },
  image3: {
    top: 0,
    width: 438,
    height: 533,
    position: "absolute",
    left: 0
  },
  image3_imageStyle: {
    opacity: 0.32
  },
  text: {
    fontFamily: "quicksand-700",
    color: "rgba(247,247,247,1)",
    fontSize: 30,
    opacity: 0.83,
    textAlign: "center",
    width: 167,
    height: 40,
    marginTop: 236,
    marginLeft: 130
  },
  ellipse8: {
    top: 389,
    width: 289,
    height: 287,
    position: "absolute",
    left: 69
  },
  image5: {
    top: 422,
    left: 34,
    width: 361,
    height: 417,
    position: "absolute"
  },
  image5_imageStyle: {},
  chooseAnOpcion: {
    fontFamily: "quicksand-regular",
    color: "rgba(255,243,243,1)",
    textDecorationLine: "underline",
    fontSize: 28,
    marginTop: 46,
    marginLeft: 45
  },
  ellipse9: {
    top: 0,
    left: 0,
    width: 27,
    height: 28,
    position: "absolute"
  },
  loremIpsum: {
    top: 4,
    left: 9,
    position: "absolute",
    fontFamily: "noto-sans-mono-700",
    color: "rgba(154,17,17,1)",
    textDecorationLine: "underline"
  },
  ellipse9Stack: {
    width: 27,
    height: 28
  },
  ellipse12: {
    top: 0,
    left: 0,
    width: 27,
    height: 28,
    position: "absolute",
    opacity: 0.79
  },
  loremIpsum3: {
    top: 4,
    left: 9,
    position: "absolute",
    fontFamily: "noto-sans-mono-700",
    color: "rgba(154,17,17,1)",
    textDecorationLine: "underline"
  },
  ellipse12Stack: {
    width: 27,
    height: 28,
    marginLeft: 24, 
    borderRadius: 100,
  },
  ellipse9StackRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 39,
    marginLeft: 115,
    marginRight: 168,
    borderRadius: 100
  },
  ellipse10: {
    top: 0,
    left: 0,
    width: 27,
    height: 28,
    position: "absolute",
    opacity: 0.79
  },
  loremIpsum1: {
    top: 4,
    left: 9,
    position: "absolute",
    fontFamily: "noto-sans-mono-700",
    color: "rgba(154,17,17,1)",
    textDecorationLine: "underline"
  },
  ellipse10Stack: {
    width: 27,
    height: 28
  },
  ellipse11: {
    top: 0,
    left: 0,
    width: 27,
    height: 28,
    position: "absolute",
    opacity: 0.79
  },
  loremIpsum2: {
    top: 4,
    left: 10,
    position: "absolute",
    fontFamily: "noto-sans-mono-700",
    color: "rgba(154,17,17,1)",
    textDecorationLine: "underline"
  },
  ellipse11Stack: {
    width: 27,
    height: 28,
    marginLeft: 21,
    borderRadius: 100
  },
  ellipse10StackRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 119,
    marginRight: 167
  },
  rect1Stack: {
    width: 438,
    height: 839,
    marginTop: -143,
    marginLeft: -15
  },
  materialButtonDark1: {
    width: 239,
    height: 64,
    marginLeft: 83
  }
});

export default CutsInfo;
