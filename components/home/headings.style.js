import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";


const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.small,
        marginHorizontal: SIZES.small,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTitle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: SIZES.xLarge -2,

    },
})

export default styles;