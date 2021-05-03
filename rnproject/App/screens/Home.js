import React from 'react';
import {SafeAreaView, Linking, Alert, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../constants/colors';
import {RowItem, RowSeparator} from '../components/RowItem';

const openURL = url => {
  return Linking.openURL(url).catch(() => {
    Alert.alert('OOPS! Algo salio mal.', 'Porfavor vuelva a intentar');
  });
};

export default () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={{width: '100%', height: '100%'}}
        imageStyle={{opacity: 0.3}}>
        <RowItem
          text="HOME SCREEN"
          onPress={() => alert('TEST ON PRESS!')}
          rightIcon={<Icon name="home" size={20} color={colors.blue} />}
        />

        <RowSeparator />

        {/* <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>Estado de tú comuna</Text>
        <Icon name="map-marker-alt" size={20} color={colors.red} />
      </TouchableOpacity> */}

        <RowItem
          text="¿En que fase se encuentra mi comuna?"
          onPress={() => alert('TEST ON PRESS!')}
          rightIcon={
            <Icon name="map-marker-alt" size={20} color={colors.red} />
          }
        />

        <RowSeparator />

        {/* <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>Busqueda por Región</Text>
        <Icon name="search" size={20} />
      </TouchableOpacity> */}

        <RowItem
          text="Busqueda por Region"
          onPress={() => alert('TEST ON PRESS!')}
          rightIcon={<Icon name="search" size={20} color="white" />}
        />

        <RowSeparator />

        {/* <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>¿Quieres viajar?</Text>
        <Icon name="route" size={20} />
      </TouchableOpacity> */}
        <RowItem
          text="¿Quieres viajar?"
          onPress={() => alert('TEST ON PRESS!')}
          rightIcon={<Icon name="route" size={20} color="white" />}
        />

        <RowSeparator />

        <RowItem
          text="C19: Pasaporte Sanitario. Obtenlo Aqui"
          onPress={() => openURL('https://c19.cl/')}
          rightIcon={<Icon name="passport" size={20} color="white" />}
        />

        <RowSeparator />

        <RowItem
          text="¿Permiso de desplazamiento? ¡Presiona Aqui!"
          onPress={() => openURL('https://comisariavirtual.cl/')}
          rightIcon={<Icon name="id-card" size={20} color="white" />}
        />

        <RowSeparator />

        <RowItem
          text="Preguntas Frecuentes"
          onPress={() => openURL('https://www.gob.cl/pasoapaso#preguntas/')}
          rightIcon={<Icon name="question" size={20} />}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};
