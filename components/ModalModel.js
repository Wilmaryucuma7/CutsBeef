import { View, Modal } from "react-native";
import tw from "twrnc";

const ModalModel = ({ isModalOpen, setIsModalOpen, children }) => {

    const modalContainerStyle = {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(52, 52, 52, 0.3)",
    };

    const modalStyle = {
        backgroundColor: "rgba(255,255,255,0.7)",
        alignItems: "center",
        margin: 20,
        borderRadius: 20,

        borderRadius: 16,
        borderColor: "#205400",
        borderWidth: 0.5,
        shadowColor: "#205400",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    };

    const modalContent = {
        //backgroundColor: "rgba(255,255,255,0.1)",
        alignItems: "center",
        borderRadius: 20,
        paddingHorizontal: 10,
    };

    return (
        <Modal visible={isModalOpen} transparent={true} animationType={"fade"} onRequestClose={() => setIsModalOpen(false)}>
            <View style={[modalContainerStyle]}>
                <View style={[modalStyle]}>
                    <View style={[modalContent, tw`w-full`]}>
                        <View style={tw`w-full items-center mt-5 mb-5 justify-center`}>
                            {children}
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default ModalModel;