import { View, TouchableOpacity, TextInput, Image, FlatList, Text } from 'react-native';
import React,{useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/index';
import styles from './search.style.js'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import SearchTile from '../components/products/SearchTile';

const Search = () => {

  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  // console.log('====================================');
  // console.log(searchResults);
  // console.log('====================================');
  const handleSearch = async() => {
    try {
      const response = await axios.get(`http://192.168.1.25:6060/api/products/search/${searchKey}`)
      setSearchResults(response.data)
    } catch (error) {
      console.log('Failed to search product', error);
    } 
  }

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name='camera-outline' size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder='What are you looking for'
            placeholderTextColor={COLORS.black}
          />
        </View>
      <View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => handleSearch()}>
          <Feather name='search' size={SIZES.xLarge} color={COLORS.offwhite} />
        </TouchableOpacity>
      </View>
      </View>
      {searchResults.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={require('../assets/images/search3d.webp')}
            style={styles.seachImage}
          />
      </View>
      ): (
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (<SearchTile item={item} />)}
            style={{marginHorizontal:12}}
          />
      )}
    </SafeAreaView>
  )
}

export default Search

