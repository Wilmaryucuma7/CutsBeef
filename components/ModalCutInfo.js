import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import ModalModel from "./ModalModel";
import ItemButtom from "./ItemButtom";
import Icon from "react-native-vector-icons/Feather";
import tw from "twrnc";


const ModalCutInfo = ({ isModalOpenCut, setIsModalOpenCut}) => {
    
    return (
        <ModalModel isModalOpen={isModalOpenCut} setIsModalOpen={setIsModalOpenCut}>

            <View style={styles.rect3}>
          <View style={styles.cutsBeefRow}>
            <Text style={styles.cutsBeef}>CUTS BEEF</Text>
            <TouchableOpacity onPress={()=>setIsModalOpenCut(!isModalOpenCut)}>
            <Icon name="x-circle" style={styles.icon}></Icon>
            </TouchableOpacity>
          </View>
          <Text style={styles.ribEye}>RIB EYE</Text>
          <Image
            source={require("../assets/ribEye.jpg")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Text style={styles.description}>Description:</Text>
          <Text style={styles.price}>Price:</Text>
        </View>
        </ModalModel>
    );
}
const styles = StyleSheet.create({
    
    rect3: {
      width: '100%',
      height: 539,
      backgroundColor: "rgba(255,255,255,0.71)",
      borderRadius: 20,
    },
    cutsBeef: {
      fontFamily: "noto-serif-italic",
      color: "#121212",
      fontSize: 28,
      textDecorationLine: "underline",
      marginTop: 39
    },
    icon: {
      color: "rgba(145,9,9,1)",
      fontSize: 45,
      height: 45,
      width: 45,
      marginLeft: 23
    },
    cutsBeefRow: {
      height: 77,
      flexDirection: "row",
      marginTop: 10,
      marginLeft: 90,
      marginRight: 10
    },
    ribEye: {
      fontFamily: "roboto-700",
      color: "rgba(132,21,21,1)",
      fontSize: 25,
      marginTop: 5,
      marginLeft: 120
    },
    image2: {
      height: 200,
      width: 199,
      borderWidth: 6,
      borderColor: "#000000",
      marginTop: 18,
      marginLeft: 65
    },
    description: {
      fontFamily: "noto-sans-adlam-700",
      color: "rgba(132,21,21,1)",
      fontSize: 20,
      textDecorationLine: "underline",
      marginTop: 31,
      marginLeft: 32
    },
    price: {
      fontFamily: "noto-sans-adlam-700",
      color: "rgba(132,21,21,1)",
      fontSize: 20,
      textDecorationLine: "underline",
      marginTop: 33,
      marginLeft: 32
    },
    group1Stack: {
      width: 426,
      height: 818,
      marginTop: -143,
      marginLeft: -26
    }
  });
 
  
export default ModalCutInfo;