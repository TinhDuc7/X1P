import { View, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../constants/index';
import styles from './search.style.js'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Search = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name='camera-outline' size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            // value=''
            onPressIn={()=> {}}
            placeholder='What are you looking for'
          />
        </View>
      <View>
        <TouchableOpacity style={styles.searchBtn}>
          <Feather name='search' size={SIZES.xLarge} color={COLORS.offwhite} />
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default Search

