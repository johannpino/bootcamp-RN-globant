import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
} from 'react-native';
import colors from '../constants/colors';
import {UserInput} from '../components/UserInput';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: screen.width * 0.7,
    height: screen.width * 0.7,
  },
  titleComunas: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <View style={styles.logoContainer}>
        <Text style={styles.titleComunas}>
          ¡Bienvenido a tu ayudante de viajes!
        </Text>
        <Image
          style={styles.logo}
          source={require('../assets/images/icono2.png')}
        />
      </View>
      <UserInput text="DESDE" placeholder="Comuna de Inicio" />
      <UserInput text="HACIA" placeholder="Comuna de destino" />
    </View>
  );
};
