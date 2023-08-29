import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './backBtn.style.js';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../constants';

const BackBtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
          <Ionicons
              name='chevron-back-circle'
              size={30}
              color={COLORS.primary}
          />
    </TouchableOpacity>
  )
}

export default BackBtn