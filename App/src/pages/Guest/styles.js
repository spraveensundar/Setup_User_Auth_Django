import { StyleSheet } from "react-native";
import { size } from "../../helpers/variables";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonContainer: {
        paddingVertical: size.xx_tiny
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles;