import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants/index';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    cover: {
        height: 250,
        width: '100%',
        resizeMode: 'cover'
    },
    profileContainer: {
        flex: 1,
        alignItems:'center'
    },
    profileImg: {
        height: 150,
        width: 150,
        borderRadius: 150,
        borderColor: COLORS.primary,
        borderWidth: 2,
        resizeMode: 'cover',
        marginTop: -80,
    },
    name: {
        fontFamily: 'Poppins-Bold',
        color: COLORS.primary,
        marginVertical: 5,
    },
    loginBtn: {
        backgroundColor: COLORS.secondary,
        padding: 2,
        borderWidth: 0.4,
        borderColor: COLORS.primary,
        borderRadius: SIZES.xxLarge,
    },
    menuText: {
        fontFamily: 'Poppins-Regular',
        color: COLORS.gray,
        marginHorizontal: 10,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 26,
    },
    menuWrapper: {
        marginTop: SIZES.xLarge,
        width: SIZES.width - SIZES.large,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 12,
    },
    menuItem: (borderBottomWidthNum) => ({
        borderBottomWidth: borderBottomWidthNum,
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderColor: COLORS.gray,
    })
})

export default styles;