import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants/index';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
    },
    wrapper: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
    },
    upperRow: {
        width: SIZES.width-50,
        marginHorizontal: SIZES.large,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.large,
        top: SIZES.small,
        zIndex: 999,
    },
    heading: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: SIZES.medium,
        color: COLORS.lightWhite,
        marginLeft: 10,
        marginTop: 2,
    },

})
export default styles;