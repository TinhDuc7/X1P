import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/index';

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    container: {
        alignItems: 'center',
        paddingTop: SIZES.xLarge +10,
        paddingLeft:2,
    },
    separator: {
        height: 6,
    }
})

export default styles;