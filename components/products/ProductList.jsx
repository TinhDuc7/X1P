import { ActivityIndicator, FlatList ,View, Text } from 'react-native';
import React from 'react';
import styles from './productList.style.js'
import useFetch from '../../hook/useFetch.js';
import { SIZES, COLORS } from '../../constants/index.js';
import ProductCardView from './ProductCardView.jsx';

const ProductList = () => {
    const { data, isLoading, error } = useFetch();
    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}/>
            </View>
          )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                numColumns={2}
                renderItem={({ item }) => (
                    <ProductCardView item={item}/>)}
                    contentContainerStyle={styles.container} 
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
            />  
        </View>
    )
}

export default ProductList