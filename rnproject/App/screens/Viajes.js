import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import Papa from 'papaparse';
import colors from '../constants/colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  input: {
    width: 300,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 20,
    padding: 8,
  },
  search: {
    paddingBottom: 30,
    fontSize: 25,
    padding: 10,
  },
  list: {
    paddingTop: 10,
  },
  text: {
    fontSize: 20,
  },
});

const Travel = () => {
  const [data, setData] = useState('');
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState([]);
  let fromPhase;
  let toPhase;
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
      '¡Hola! Te informamos que',
      `La comuna se encuentra en: ${faseActual(item)}`,
      [
        {
          text: 'Aceptar',
          style: 'ok',
        },
      ],
    );
  };
  const updateFromPhase = item => {
    fromPhase = faseActual(item);
  };

  const updateToPhase = item => {
    let canITravel;
    toPhase = faseActual(item);
    console.log("Desde: " + fromPhase);
    console.log("Hasta: " + toPhase);
    if (toPhase <= fromPhase) {
      console.log("Se puede")
    } else {
      console.log("No se puede")
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.search}>Indica a donde quieres viajar</Text>
      <TextInput onChangeText={handleChange} style={styles.input} />
      <ScrollView style={styles.list}>
        {filter.map((item, idx) => (
          <Pressable onPress={() => updateFromPhase(item)} key={idx}>
            <Text style={styles.text}>{item}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <TextInput onChangeText={handleChange} style={styles.input} />
      <ScrollView style={styles.list}>
        {filter.map((item, idx) => (
          <Pressable onPress={() => updateToPhase(item)} key={idx}>
            <Text style={styles.text}>{item}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};


export default Travel;