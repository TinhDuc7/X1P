import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'bold',
        fontSize: 50,
    },
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop: SIZES.small
    },
    appBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    location: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: SIZES.medium,
        color: COLORS.gray,
    },
    cartCount: {
        position: 'absolute',
        bottom: 15,
        left: 14,
        width: 20,
        height: 20,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: 'green',
        justifyContent: 'center',
        zIndex: 999
    },
    cartNumber: {
        fontFamily: 'regular',
        fontWeight: '600',
        fontSize: 14,
        color: COLORS.lightWhite,
    }
})

export default styles;