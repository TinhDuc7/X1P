import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: 182,
        height: 240,
        marginRight: 6,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary,
        // marginHorizontal: SIZES.small,
    },
    imageContainer: {
        // backgroundColor: COLORS.gray2,
        width: 170,
        flex: 1,
        // marginLeft: SIZES.small /2,
        // marginTop: SIZES.small / 2,
        margin: SIZES.small -5,
        borderRadius: SIZES.small,
        overflow: 'hidden',
    },
    image: {
        aspectRatio: 1/1,
        resizeMode:'repeat',
    },
    details: {
        padding: SIZES.small
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: SIZES.large,
        marginBottom: 2,
    },
    supplier: {
        fontFamily: 'Poppins-Regular',
        fontSize: SIZES.small,
        color: COLORS.gray
    },
    price: {
        fontFamily: 'Poppins-Bold',
        fontSize: SIZES.medium,
        color: COLORS.tertiary
    },
    addBtn: {
        position: 'absolute',
        bottom: SIZES.xSmall,
        right: SIZES.xSmall
    }
}); 

export default styles;