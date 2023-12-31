import { Text, View, StatusBar, Image, TouchableOpacity, } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './profile.style';
import { COLORS, logout, clearCache, deleteAccount } from '../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


const Profile = ({navigation}) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.gray} />
        <View style={{width: '100%'}}>
          <Image
            source={require('../assets/images/space.jpg')}
            style={styles.cover}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image
          source={require('../assets/images/profile.jpeg')}
          style={styles.profileImg}
          />
          <Text style={styles.name}>
            {userLogin === true ? 'userData.name' : 'Please login into your account'}
          </Text>
          {userLogin === false ? (
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
              <View style={styles.loginBtn}>
                <Text style={styles.menuText}>L O G I N</Text>
              </View>
            </TouchableOpacity>
          ): (
              <View style={styles.loginBtn}>
                  <Text style={styles.menuText}>asdfas@gmail.com</Text>
              </View>
          )}

          {userLogin === false ? (
          <View></View>
          ): (
              <View style={styles.menuWrapper}>
                <TouchableOpacity onPress={()=>navigation.navigate('Favorites')}>
                  <View style={styles.menuItem(0.2)}>
                    <MaterialCommunityIcons
                    name='heart-outline'
                    color={COLORS.primary}
                    size={24}
                    />
                    <Text style={styles.menuText}>Favorites</Text>
                  </View>
                </TouchableOpacity>
            
                <TouchableOpacity onPress={()=>navigation.navigate('Orders')}>
                  <View style={styles.menuItem(0.2)}>
                    <MaterialCommunityIcons
                    name='truck-delivery-outline'
                    color={COLORS.primary}
                    size={24}
                    />
                    <Text style={styles.menuText}>Orders</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
                  <View style={styles.menuItem(0.2)}>
                    <SimpleLineIcons
                    name='bag'
                    color={COLORS.primary}
                    size={24}
                    />
                    <Text style={styles.menuText}>Cart</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>clearCache()}>
                  <View style={styles.menuItem(0.2)}>
                    <MaterialCommunityIcons
                    name='cached'
                    color={COLORS.primary}
                    size={24}
                    />
                    <Text style={styles.menuText}>Clear cache</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>deleteAccount()}>
                  <View style={styles.menuItem(0.2)}>
                    <AntDesign
                    name='deleteuser'
                    color={COLORS.tertiary}
                    size={24}
                    />
                    <Text style={styles.menuText}>Delete Account</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>logout()}>
                  <View style={styles.menuItem(0.2)}>
                    <AntDesign
                    name='logout'
                    color={COLORS.primary}
                    size={24}
                    />
                    <Text style={styles.menuText}>Logout Account</Text>
                  </View>
                </TouchableOpacity>

              </View>
          )}
        </View>
      </View>
    </View>
  )
}

export default Profile

