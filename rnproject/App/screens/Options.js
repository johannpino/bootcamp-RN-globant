import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  separator: {
    borderColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

export default () => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>HOME SCREEN</Text>
        <Icon name="home" size={20} />
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>Estado de tú comuna</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>Buscador por Región</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>¿Quieres viajar?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
