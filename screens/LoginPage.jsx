import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import styles from './loginPage.style.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import {BackBtn} from '../components'

const LoginPage = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [error, serError] =useState({})
  const [input, setInput] = useState({
    email: '',
    password:''
  })

  return (
    <ScrollView>
      <SafeAreaView style={{marginHorizontal: 20}}>
        <View>
          <BackBtn onPress={()=>navigation.goBack()} />
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default LoginPage