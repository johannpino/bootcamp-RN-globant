import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { getFirstLetter } from '../utils/helpers';

const userHasProfile = (user) => {
  if (user.photoURL) {
    return true;
  }
  return false;
};

const ProfilePicture = ({ user }) => {
  const styles = StyleSheet.create({
    circle: {
      height: 150,
      width: 150,
      borderRadius: 100,
      backgroundColor: '#E022FF',
      justifyContent: 'center',
      margin: 12,
      alignItems: 'center',
    },
    circleImg: {
      height: 150,
      width: 150,
      borderRadius: 100,
      justifyContent: 'center',
      margin: 12,
      alignItems: 'center',
    },
    initial: {
      fontWeight: 'bold',
      fontSize: 72,
      color: '#FFF',
    },
  });

  if (user.photoURL) {
    return <Image style={styles.circleImg} source={{ uri: user.photoURL }} />;
  }

  return (
    <View style={styles.circle}>
      <Text style={styles.initial}>{getFirstLetter(user.displayName)}</Text>
    </View>
  );
};

export default ProfilePicture;
