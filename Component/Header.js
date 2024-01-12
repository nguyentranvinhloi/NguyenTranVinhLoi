import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>

      <View style={styles.icons}>
        {/* <TouchableOpacity style={styles.button}>
          <Icon name="list" size={20} color="#444" />
        </TouchableOpacity> */}

        {/* <Text style={styles.title}>Vĩnh Lợi</Text> */}
        <Image
          source={require('../assets/images/pc.jpg')}
          style={{ width: 370, height: 30 }}
        />
      </View>

      {/* <View style={styles.profile}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('User')}
        >
          <Image
            source={require('../assets/us.jpg')}
            style={styles.profileImage}
          />
        </TouchableOpacity>

      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    textAlign: 'center',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 10,
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: 15,
    overflow: 'hidden',
    marginLeft: -15,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
});

export default Header;