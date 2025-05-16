import { StyleSheet } from "react-native";

import { colors, normalize, size } from "../helpers/variables";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topContainer: {
        backgroundColor: colors.orange,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0
    },
    scrollWrapper: {
        flexGrow: 1,
        paddingHorizontal: size.xxx_tiny
    },
    guestLayout: {
        flex: 1,
        justifyContent: 'center'
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center'
    },
})


export default styles;