import {ActivityIndicator, FlatList, View, Text} from 'react-native';
import React from 'react';
import styles from './productRow.style';
import {COLORS, SIZES} from '../../constants';
import ProductCardView from './ProductCardView';
import useFetch from '../../hook/useFetch';

const ProductRow = () => {
  // const url = "http://localhost:6060/api/products/"
  const url = process.env.PRODUCTS_API;
  // const {data, isLoading, error} = useFetch('http://localhost:6060/api/products/')
  const {data, isLoading, error} = useFetch(url)
  // const products = [1, 2, 3, 4];
  return (
    <View style={styles.Container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
      <Text>Something went wrong</Text>
      ): (
                <FlatList
                data={data}
                keyExtractor={(item) => item._id}
              renderItem={({ item }) => <ProductCardView item={item} />}
                      horizontal contentContainerStyle={{ columnGap: SIZES.medium}}
                  />
)}
      {/* <Text>{data?.title}</Text>
<FlatList
                data={data}
                keyExtractor={(item) => item._id}
              renderItem={({ item }) => <ProductCardView item={item} />}
                      horizontal contentContainerStyle={{ columnGap: SIZES.medium}}
                  />

                */}
    </View>
  );};
export default ProductRow;