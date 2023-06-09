import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View className='p-2 mr-2 top-2'>
    <TouchableOpacity onPress={()=>navigation.goBack()} >
      <Icon name='chevron-left' size={20} color='#333' />
      </TouchableOpacity>
    </View>
      <View style={styles.header} >
      
        <Image
          source={require('../assets/avatar.jpeg')}
          style={styles.profileImage}
        />
        <Text style={styles.username}>InamUl Hasan</Text>
        
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Payment Methods</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Help & Support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} className="flex-col justify-items-end ">
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  option: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 20,
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
});

export default ProfileScreen;
