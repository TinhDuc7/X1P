import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './searchTile.style.js';
import { useNavigation } from '@react-navigation/native';


const SearchTile = ({ item }) => {
    const navigation = useNavigation();
  return (
    <View>
          <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ProductDetails', {item})}>
              <View style={styles.image}>
                  <Image
                      source={{ uri: item.imageUrl }}
                      style={styles.productImg}
                  />
              </View>
              <View style={styles.textContainer}>
                  <Text numberOfLines={1} style={styles.productTitle}>{item.title}</Text>
                  <Text numberOfLines={1} style={styles.supplier}>{item.supplier}</Text>
                  <Text numberOfLines={1} style={styles.supplier}>{item.price} VND</Text>
              </View>
      </TouchableOpacity>
    </View>
  )
}

export default SearchTile