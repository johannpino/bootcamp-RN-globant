import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
      backgroundColor: '#6AFFE4',
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

  if (userHasProfile(user)) return null;

  return (
    <View style={styles.circle}>
      <Text style={styles.initial}>{getFirstLetter(user.displayName)}</Text>
    </View>
  );
};

export default ProfilePicture;
