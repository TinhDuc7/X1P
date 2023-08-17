import React from 'react';
import {TouchableOpacity, Text, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './home.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Welcome} from '../components/index';
import Carousel from '../components/home/Carousel';
import Headings from '../components/home/Headings';
import ProductRow from '../components/products/ProductRow';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}>Hanoi, Vietnam</Text>
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity>
              <View style={styles.cartCount}>
                <Text style={styles.cartNumber}>8</Text>
              </View>
              <AntDesign name="shoppingcart" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
