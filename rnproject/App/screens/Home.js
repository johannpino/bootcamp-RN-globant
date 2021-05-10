import React from 'react';
import {
  View,
  ImageBackground,
  StatusBar,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import colors from '../constants/colors';
// import {RowItem, RowSeparator} from '../components/RowItem';

/* const openURL = url => {
  return Linking.openURL(url).catch(() => {
    Alert.alert('OOPS! Algo salio mal.', 'Porfavor vuelva a intentar');
  });
}; */

/* Prop para la función cuando se usa Screens normales con touch {navigation} */

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 50,
    alignContent: 'center',
    paddingBottom: 50,
  },
  p: {
    fontWeight: 'bold',
    fontSize: 20,
    alignContent: 'center',
    padding: 30,
    paddingVertical: 20,
  },
  background: {
    width: screen.width * 1,
    height: screen.height * 1,
    position: 'relative',
    alignItems: 'center',
    paddingTop: 200,
  },
});

export default () => {
  return (
    <View styles={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.text} />

      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.background}
        imageStyle={{opacity: 0.4}}
      >
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.p}>
          ¡Tú nueva experienca para realizar tramites online acaba de comenzar!
        </Text>
      </ImageBackground>
    </View>
  );
};
