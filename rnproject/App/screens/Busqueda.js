import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  Image,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import Papa from 'papaparse';
import colors from '../constants/colors';
import { removeAccents, handlePress, faseActual } from '../util/helper';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBF8',
    alignItems: 'center',
    paddingVertical: 10,
  },
  input: {
    width: 300,
    borderColor: colors.blue,
    borderWidth: 1,
    borderRadius: 20,
    padding: 8,
    fontSize: 20,
  },
  searchTitle: {
    fontSize: 25,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  searchSubtitle: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 50,
  },
  list: {
    paddingTop: 5,
    alignItems: 'center',
  },
  listText: {
    fontSize: 25,
  },
  logo: {
    width: screen.width * 0.6,
    height: screen.width * 0.6,
  },
  logoContainer: {
    alignItems: 'center',
    alignContent: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  listContainer: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#6C6EF1',
  },
  content: {
    alignItems: 'center',
    paddingTop: 5,
  },
});

const Filter = () => {
  const [data, setData] = useState('');
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState([]);
<<<<<<< HEAD

  const removeAccents = str => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };
=======
>>>>>>> 4365842e0636bf2298c985d67f1a6991933133bc

  const handleChange = e => {
    setQuery(e);
  };

  useEffect(() => {
    Papa.parse(
      'https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto74/paso_a_paso_T.csv',
      {
        download: true,
        complete: results => {
          console.log(results);
          setData(results);
        },
      },
    );
  }, []);

  useEffect(() => {
    if (data) {
      const allComunas = data.data[3].slice(1, 385);
      const result = allComunas.filter(comuna => {
        const lower = removeAccents(comuna.toLowerCase());
        return lower.includes(query.toLowerCase());
      });

      setFilter(result);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

<<<<<<< HEAD
  const faseActual = item => {
    const index = parseInt(data.data[3].indexOf(item), 10);
    return data.data[data.data.length - 2][index];
  };

  const handlePress = item => {
    Alert.alert(
      '¡Hola! Te informamos que',
      `La comuna se encuentra en fase ${faseActual(item)}`,
      [
        {
          text: 'Aceptar',
          style: 'ok',
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#EBEBF8" />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.searchTitle}>¡Hola!</Text>
          <Text style={styles.searchSubtitle}>
            Ingresa una comuna para saber en que fase se encuentra
          </Text>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../assets/images/familia.png')}
            />
          </View>

          <TextInput onChangeText={handleChange} style={styles.input} />
          <View style={styles.list}>
            <ScrollView>
              <FlatList
                data={filter}
                renderItem={({item}) => (
                  <View style={styles.listContainer}>
                    <Pressable key={item}>
                      <Text
                        style={styles.listText}
                        onPress={() => handlePress(item)}
                      >
                        {item}
                      </Text>
                    </Pressable>
                  </View>
                )}
                keyExtractor={item => item.id}
                initialNumToRender={3}
                maxToRenderPerBatch={5}
                windowSize={1}
              />
            </ScrollView>
          </View>
          <View style={{height: screen.height}} />
        </View>
=======

  return (
    <View style={styles.container}>
      <Text style={styles.search}>Porfavor Ingresa la Comuna que buscas</Text>
      <TextInput onChangeText={handleChange} style={styles.input} />
      <ScrollView style={styles.list}>
        {filter.map((item, idx) => (
          <Pressable onPress={() => handlePress(faseActual(item, data))} key={idx}>
            <Text style={styles.text}>{item}</Text>
          </Pressable>
        ))}
>>>>>>> 4365842e0636bf2298c985d67f1a6991933133bc
      </ScrollView>
    </SafeAreaView>
  );
};

export default Filter;
