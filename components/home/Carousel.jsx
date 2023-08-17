import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS } from '../../constants';

const Carousel = () => {

    const slides = [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww&w=1000&q=80',
        'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?cs=srgb&dl=pexels-martin-p%C3%A9chy-1866149.jpg&fm=jpg',
        'https://furniturepalacekenya.com/wp-content/uploads/2023/07/Mueno-white.png-1-800x533.jpg',
    ];
    
  return (
    <View style={styles.carouselContainer}>
          <SliderBox images={slides}
            dotColor={COLORS.primary}
            inactiveDotColor={COLORS.secondary}
            ImageComponentStyle={{borderRadius: 15, width:'92%', marginTop: 5}}
        autoplay
        circleLoop
          />
    </View>
  )
}

export default Carousel;

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: 'center',
    }
});