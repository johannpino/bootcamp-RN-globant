import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
  Image,
  Dimensions,
  SafeAreaView,
  FlatList,
  VirtualizedView,
} from 'react-native';
import Papa from 'papaparse';
import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 5,
    paddingHorizontal: 55,
  },
  input: {
    width: 290,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  searchTitle: {
    fontSize: 20,
  },
  list: {
    paddingTop: 10,
  },
  text: {
    fontSize: 18,
  },
  logo: {
    width: screen.width * 0.7,
    height: screen.width * 0.7,
    marginBottom: 10,
  },
});

const Filter = () => {
  const [data, setData] = useState('');
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState([]);
  const [comunas, setComunas] = useState([]);
  const removeAccents = str => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

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
      const allComunas = data.data[3];
      // setComunas(allComunas);
      const result = allComunas.filter(comuna => {
        const lower = removeAccents(comuna.toLowerCase());
        return lower.includes(query.toLowerCase());
      });

      setFilter(result);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const faseActual = item => {
    const index = parseInt(data.data[3].indexOf(item), 10);
    return data.data[data.data.length - 2][index];
  };

  const handlePress = item => {
    Alert.alert(
      'Te informamos que',
      `La comuna se encuentra en: ${faseActual(item)}`,
      [
        {
          text: 'Aceptar',
        },
      ],
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Text style={styles.searchTitle}>
          ¡Hola! Ingresa la Comuna que buscas
        </Text>
        <Image
          style={styles.logo}
          source={require('../assets/images/family.png')}
        />
        <TextInput onChangeText={handleChange} style={styles.input} />
        <SafeAreaView style={styles.list}>
          <FlatList
            data={filter}
            renderItem={({item}) => (
              <Pressable key={item}>
                <Text style={styles.text} onPress={() => handlePress(item)}>
                  {item}
                </Text>
              </Pressable>
            )}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Filter;

/* {filter.map((item, idx) => (
            <Pressable onPress={() => handlePress(item)} key={idx.id}>
              <Text style={styles.text}>{item}</Text>
            </Pressable> */
