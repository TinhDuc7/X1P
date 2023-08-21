import {TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import styles from './newRivals.style.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import { COLORS } from '../constants/theme.js';

const NewRivals = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.wrapper}>
              <View style={styles.upperRow}>
                  <TouchableOpacity onPress={()=> navigation.goBack()}>
                      <Ionicons name='chevron-back-circle' size={40} color={COLORS.lightWhite} />
                  </TouchableOpacity>
                  <Text style={styles.heading}>Products</Text>
              </View>
      </View>
    </SafeAreaView> 
  );
};

export default NewRivals;
