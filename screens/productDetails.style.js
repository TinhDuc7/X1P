import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: SIZES.xSmall,
    position: 'absolute',
    top: SIZES.xSmall,
    width: SIZES.width - 16,
    zIndex: 999,
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },
  titleRow: {
    marginHorizontal: SIZES.large,
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width - 44,
    top: 15,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.large,
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
  },
  price: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.medium,
    color: COLORS.tertiary,
    paddingHorizontal: 10,
  },
  ratingRow: {
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width - 10,
    top: 5,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: SIZES.large,
  },
  ratingText: {
    color: COLORS.gray,
    fontFamily: 'Poppins-Medium',
      marginTop: 6,
    marginHorizontal: 6,
  },
  descriptionWrapper: {
    marginTop: SIZES.medium,
    marginHorizontal: SIZES.medium,
  },
  description: {
    fontFamily: 'Poppins-Medium',
    fontSize: SIZES.large -2,
  },
  descriptionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.small +1,
    textAlign: 'justify',
  },
  locationWrapper: {
    marginVertical: SIZES.small,
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: SIZES.small,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.small,
    padding: 4,
  },
  locationRow: {
    flexDirection: 'row',
  },
  locationText: {
    marginStart: 3,
  },
  deliveryRow: {
    flexDirection: 'row',
  },
  deliveryText: {
    marginLeft: 4,
  },
  cartRow: {
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width,
  },
  cartBtn: {
    backgroundColor: COLORS.black,
    width: SIZES.width * 0.7,
    padding: SIZES.small /2,
    borderRadius: SIZES.large,
    marginLeft: SIZES.small,
    alignItems: 'center',
  },
  cartTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
  }, 
  addCart: {
    width: 37,
    height: 37,
    borderRadius: 50,
    margin: SIZES.small,
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
