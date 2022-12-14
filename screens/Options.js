import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/Entypo";
import MaterialButtonDark2 from "../components/MaterialButtonDark2";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";
import * as ImagePicker from "expo-image-picker";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
function Options({navigation}) {

    const [image, setImage] = useState('https://via.placeholder.com/200');

    const selectImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({

          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4,3],
          quality: 1,
        })

        console.log(result)

        if (!result.canceled){
          setImage(result.assets[0].uri)
        }
        /*const options = {
            title : 'Selecciona una imagen',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        }

        launchImageLibrary(options, response =>{
            
            if(response.errorCode) {
                console.log(response.errorMessage)
            }else if (response.didCancel){
                console.log('El usuario cancelo la seleccion')
            }else {
                const path = response.assets[0].uri
                setImage(path)
            }
        })
        console.log('xdddddd')*/
    }

    const takeAPicture = async() => {

      let result = await ImagePicker.launchCameraAsync({

        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4,3],
        quality: 1,

      })

      console.log(result)

      if (!result.canceled){
        setImage(result.assets[0].uri)
      }

       /* const options = {
            title : 'Tomar una imagen',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            includeBase64: true,
        }

        launchCamera(options, response => {

            if(response.errorCode){
                console.log(response.errorMessage)
            }else if(response.didCancel){
                console.log('El usuario cancelo la fotografia')
            }else {
                const uri = response.assets[0].uri
                setImage(uri)
            }
        })*/
    }

  return (
    <View style={styles.container}>
      <View style={styles.cuts1Stack}>
        <Text style={styles.cuts1}>Cuts</Text>
        <View style={styles.rect1}>
          <Text style={styles.beef1}>BEEF</Text>
        </View>
        <Svg viewBox="0 0 300 300" style={styles.ellipse2}>
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
        <Svg viewBox="0 0 270 270" style={styles.ellipse1}>
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
        <ImageBackground
          source={require("../assets/meat-modified.png")}
          resizeMode="contain"
          style={styles.image2}
          imageStyle={styles.image2_imageStyle}
        >
          <Text style={styles.prediction}>PREDICTION</Text>
        </ImageBackground>
        <ImageBackground
          source={require("../assets/beef.png")}
          resizeMode="contain"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >
          <Text style={styles.text1}>Cuts</Text>
        </ImageBackground>
        <TouchableOpacity onPress={()=> navigation.navigate('CutsInfo')}>
        <Icon name="chevron-left" style={styles.icon}></Icon>
        </TouchableOpacity>
        
      </View>
      <MaterialButtonDark2
        style={styles.materialButtonDark1} onPress={selectImage}
      ></MaterialButtonDark2>
      <CupertinoButtonInfo onPress={takeAPicture}
        style={styles.cupertinoButtonInfo}
      ></CupertinoButtonInfo>

      <Image style={{alignSelf:'center', height: 100, width: 120, top: 120}}
        source={{uri: image}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  cuts1: {
    top: 236,
    position: "absolute",
    fontFamily: "quicksand-700",
    color: "rgba(247,247,247,1)",
    fontSize: 30,
    opacity: 0.83,
    textAlign: "center",
    width: 167,
    height: 28,
    left: 128
  },
  rect1: {
    top: 143,
    left: 106,
    width: 211,
    height: 321,
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
  ellipse2: {
    top: 372,
    width: 300,
    height: 300,
    position: "absolute",
    left: 61
  },
  ellipse1: {
    top: 387,
    left: 76,
    width: 270,
    height: 270,
    position: "absolute"
  },
  image2: {
    top: 389,
    left: 79,
    width: 265,
    height: 265,
    position: "absolute"
  },
  image2_imageStyle: {
    opacity: 0.28
  },
  prediction: {
    fontFamily: "quicksand-700",
    color: "rgba(222,222,222,1)",
    fontSize: 43,
    textDecorationLine: "underline",
    marginTop: 105,
    marginLeft: 8
  },
  image1: {
    top: 0,
    width: 438,
    height: 533,
    position: "absolute",
    left: 0
  },
  image1_imageStyle: {
    opacity: 0.32
  },
  text1: {
    fontFamily: "quicksand-700",
    color: "rgba(247,247,247,1)",
    fontSize: 30,
    opacity: 0.83,
    textAlign: "center",
    width: 167,
    height: 40,
    marginTop: 236,
    marginLeft: 128
  },
  icon: {
    top: 189,
    left: 41,
    position: "absolute",
    color: "rgba(254,247,247,1)",
    fontSize: 47
  },
 
  cuts1Stack: {
    width: 438,
    height: 672,
    marginTop: -143,
    marginLeft: -15
  },
  materialButtonDark1: {
    width: 291,
    height: 80,
    borderRadius: 41,
    marginTop: 134,
    marginLeft: 37
  },
  cupertinoButtonInfo: {
    height: 80,
    width: 291,
    marginTop: -185,
    marginLeft: 42
  }
});

export default Options;
