import { Alert } from 'react-native';

const logout = () => {
    Alert.alert(
        'Logout',
        'Are you sure you want to logout?',
        [
            {
                text: 'Cancel', onPress: () => console.log('Cancel pressed')
            },
            {
                text: 'Continue', onPress: () => console.log('Logout pressed')
            },
            // { defaultIndex: 1 }
        ]
    )
};

const clearCache = () => {
    Alert.alert(
        'Clear cache',
        'Are you sure want to delete all saved data on your device?',
        [
            {
                text: 'Cancel', onPress: () => console.log('Cancel clear cache pressed')
            },
            {
                text: 'Continue', onPress: () => console.log('Clear cache pressed')
            }
        ]
    )
};

const deleteAccount = () => {
    Alert.alert(
        'Delete account',
        'Are you sure want to delete your account?',
        [
            {
            text: 'Cancel', onPress: () => 
                console.log('Cancel delete account pressed')
            },
            {
                text: 'Delete', onPress: () => console.log('Delete account pressed')
            }
        ]
    )
}
  

export { logout, clearCache, deleteAccount };