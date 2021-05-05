import React from 'react';
import {SafeAreaView, ImageBackground, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../constants/colors';
import {RowItem, RowSeparator} from '../components/RowItem';

/* const openURL = url => {
  return Linking.openURL(url).catch(() => {
    Alert.alert('OOPS! Algo salio mal.', 'Porfavor vuelva a intentar');
  });
}; */

export default ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor={colors.text} />
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={{width: '100%', height: '100%'}}
        imageStyle={{opacity: 0.3}}
      >
        <RowItem
          text="¿En que fase se encuentra mi comuna?"
          onPress={() => alert('TEST ON PRESS!')}
          rightIcon={
            <Icon name="map-marker-alt" size={20} color={colors.red} />
          }
        />
        <RowSeparator />
        <RowItem
          text="Busqueda por Comuna"
          onPress={() => navigation.push('Busqueda')}
          rightIcon={<Icon name="search" size={20} color="black" />}
        />
        <RowSeparator />
        <RowItem
          text="¿Quieres viajar?"
          onPress={() => navigation.push('Viajes')}
          rightIcon={<Icon name="route" size={20} color="black" />}
        />
        <RowSeparator />

        <RowItem
          text="C19: Pasaporte Sanitario. Obtenlo Aqui"
          onPress={() => navigation.push('C19')}
          rightIcon={<Icon name="passport" size={20} color="black" />}
        />
        <RowSeparator />
        <RowItem
          text="¿Permiso de desplazamiento? ¡Presiona Aqui!"
          onPress={() => navigation.push('Comisaria')}
          rightIcon={<Icon name="id-card" size={20} color="black" />}
        />
        <RowSeparator />
        <RowItem
          text="Preguntas Frecuentes"
          onPress={() => navigation.push('FAQ')}
          rightIcon={<Icon name="question" size={20} />}
        />
        <RowSeparator />
      </ImageBackground>
    </SafeAreaView>
  );
};
