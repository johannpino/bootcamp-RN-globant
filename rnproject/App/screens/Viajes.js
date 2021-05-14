import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
  Dimensions,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import Papa from 'papaparse';
import colors from '../constants/colors';
import {
  removeAccents,
  faseActual,
  canTravelMessage,
  canNotTravelMessage,
} from '../util/helper';
import {UserInput} from '../components/UserInput';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CACBF1',
    alignItems: 'center',
  },
  inputDesde: {
    width: 300,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    padding: 8,
  },
  inputHacia: {
    width: 300,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    padding: 8,
  },
  searchTitle: {
    fontSize: 25,
    textAlign: 'center',
    paddingHorizontal: 50,
    paddingTop: 10,
    paddingBottom: 10,
  },
  p: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 50,
  },
  list: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#6C6EF1',
  },
  text: {
    fontSize: 18,
  },
  logo: {
    width: screen.width * 0.5,
    height: screen.width * 0.5,
  },
  logoContainer: {
    alignItems: 'center',
  },
  listText: {
    fontSize: 25,
  },
});

const Travel = () => {
  const [dataFrom, setDataFrom] = useState('');
  const [queryFrom, setQueryFrom] = useState('');
  const [filterFrom, setFilterFrom] = useState([]);
  const [selected, setSelected] = useState(false);
  const [selectedDOS, setSelectedDOS] = useState(false);

  const [dataTo, setdataTo] = useState('');
  const [queryTo, setqueryTo] = useState('');
  const [filterTo, setfilterTo] = useState([]);

  const [fromPhase, setFromPhase] = useState(null);
  let toPhase;

  const handleChange = e => {
    setQueryFrom(e);
  };
  const handleChangeDOS = e => {
    setqueryTo(e);
  };

  useEffect(() => {
    Papa.parse(
      'https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto74/paso_a_paso_T.csv',
      {
        download: true,
        complete: results => {
          console.log(results);
          setDataFrom(results);
          setdataTo(results);
        },
      },
    );
  }, []);

  useEffect(() => {
    if (dataFrom) {
      const allComunas = dataFrom.data[3].slice(1, 385);
      const result = allComunas.filter(comuna => {
        const lower = removeAccents(comuna.toLowerCase());
        return lower.includes(queryFrom.toLowerCase());
      });

      setFilterFrom(result);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryFrom]);

  useEffect(() => {
    if (dataTo) {
      const allComunas = dataTo.data[3].slice(1, 385);
      const result = allComunas.filter(comuna => {
        const lower = removeAccents(comuna.toLowerCase());
        return lower.includes(queryTo.toLowerCase());
      });

      setfilterTo(result);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryTo]);

  const updateFromPhase = item => {
    let actualFromPhase = faseActual(item, dataFrom);
    setFromPhase(actualFromPhase);
  };

  const canTravelMessage = () => {
    Alert.alert('¡Hola! Te informamos que', `Puedes viajar a esta Comuna`, [
      {
        text: 'Aceptar',
        style: 'ok',
      },
    ]);
  };
  const canNotTravelMessage = () => {
    Alert.alert('¡Hola! Te informamos que', `No puedes viajar a esta comuna`, [
      {
        text: 'Aceptar',
        style: 'ok',
      },
    ]);
  };
  const updateToPhase = item => {
    let actualToPhase = faseActual(item, dataTo);
    toPhase = actualToPhase;
    if (toPhase <= fromPhase) {
      canTravelMessage();
    } else {
      canNotTravelMessage();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#CACBF1" />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.searchTitle}>¡Bienvenido!</Text>
          <Text style={styles.p}>
            Elije la comuna de inicio y de destino para ayudarte
          </Text>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../assets/images/icono2.png')}
            />
          </View>
          <View>
            <UserInput
              text="DESDE"
              onChangeText={handleChange}
              style={styles.inputDesde}
              placeholder="Comuna de inicio"
            />
          </View>
          <SafeAreaView>
            <View style={styles.list}>
              <FlatList
                data={filterFrom}
                renderItem={({item}) => (
                  <View style={styles.listContainer}>
                    <Pressable
                      key={item.id}
                      onPress={() => setSelected(!selected)}
                      style={{
                        backgroundColor: selected ? 'red' : 'transparent',
                      }}
                    >
                      <Text
                        style={styles.listText}
                        onPress={() => updateFromPhase(item)}
                      >
                        {item}
                      </Text>
                    </Pressable>
                  </View>
                )}
                keyExtractor={item => item.id}
                maxToRenderPerBatch={1}
                initialNumToRender={1}
                windowSize={1}
              />
            </View>
          </SafeAreaView>
          <View>
            <UserInput
              text="HACIA"
              onChangeText={handleChangeDOS}
              style={styles.inputDesde}
              placeholder="Comuna de destino"
            />
          </View>
          <SafeAreaView>
            <View style={styles.list}>
              <FlatList
                data={filterTo}
                renderItem={({item}) => (
                  <View style={styles.listContainer}>
                    <Pressable
                      key={item}
                      onPress={() => setSelectedDOS(!selectedDOS)}
                      style={{
                        backgroundColor: selectedDOS ? 'orange' : 'transparent',
                      }}
                    >
                      <Text
                        style={styles.listText}
                        onPress={() => updateToPhase(item)}
                      >
                        {item}
                      </Text>
                    </Pressable>
                  </View>
                )}
                keyExtractor={item => item.id}
                maxToRenderPerBatch={1}
                initialNumToRender={1}
                windowSize={1}
              />
            </View>
          </SafeAreaView>
          <View style={{height: screen.height}} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Travel;
