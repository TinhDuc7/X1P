import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import styles from './productDetails.style';
import {COLORS} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const ProductDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  console.log(item);

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={40} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={40} color={COLORS.red} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: item.imageUrl,
        }}
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{item.price} VND</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map(index => (
              <Ionicons key={index} name="star" size={24} color="gold" />
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>{count}</Text>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descriptionWrapper}>
        <Text style={styles.description}>Description</Text>
          <Text style={styles.descriptionText}>
          {item.description}
          </Text>
        </View>
        <View style={styles.locationWrapper}>
          <View style={styles.location}>
            <View style={styles.locationRow}>
              <Ionicons name='location-outline' size={20} />
              <Text style={styles.locationText}>{item.product_location}</Text>
            </View>

            <View style={styles.deliveryRow}>
              <MaterialCommunityIcons name='truck-delivery-outline' size={20} />
              <Text style={styles.deliveryText}>Free Delivery</Text>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{}} style={styles.addCart}>
            <Fontisto name='shopping-bag' size={20} color={COLORS.lightWhite} />
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
