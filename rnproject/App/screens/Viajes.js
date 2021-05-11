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
  const [dataFrom, setDataFrom] = useState('');
  const [queryFrom, setQueryFrom] = useState('');
  const [filterFrom, setFilterFrom] = useState([]);

  const [dataTo, setdataTo] = useState('');
  const [queryTo, setqueryTo] = useState('');
  const [filterTo, setfilterTo] = useState([]);

  const [fromPhase, setFromPhase] = useState(null);
  let toPhase;
  const removeAccents = str => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

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
      const allComunas = dataFrom.data[3];
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
      const allComunas = dataTo.data[3];
      const result = allComunas.filter(comuna => {
        const lower = removeAccents(comuna.toLowerCase());
        return lower.includes(queryTo.toLowerCase());
      });

      setfilterTo(result);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryTo]);

  const faseActualFrom = item => {
    const index = parseInt(dataFrom.data[3].indexOf(item), 10);
    return dataFrom.data[dataFrom.data.length - 2][index];
  };

  const faseActualTo = item => {
    const index = parseInt(dataTo.data[3].indexOf(item), 10);
    return dataTo.data[dataTo.data.length - 2][index];
  };

  const canTravelMessage = () => {
    Alert.alert(
      '¡Hola! Te informamos que',
      `Puedes viajar a tu destino`,
      [
        {
          text: 'Aceptar',
          style: 'ok',
        },
      ],
    );
  };
  const canNotTravelMessage = () => {
    Alert.alert(
      '¡Hola! Te informamos que',
      `No puedes viajar a esta comuna`,
      [
        {
          text: 'Aceptar',
          style: 'ok',
        },
      ],
    );
  };
  const updateFromPhase = item => {

    let actualFromPhase = faseActualFrom(item);
    setFromPhase(actualFromPhase);
    console.log("Desde: " + fromPhase);
    console.log("Hasta: " + toPhase);
  };

  const updateToPhase = item => {
    let actualToPhase = faseActualTo(item);
    toPhase = actualToPhase;
    console.log("Desde: " + fromPhase);
    console.log("Hasta: " + toPhase);
    if (toPhase <= fromPhase) {
      console.log("Se puede")
      canTravelMessage();
    } else {
      console.log("No se puede")
      canNotTravelMessage();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.search}>Indica a donde quieres viajar</Text>
      <TextInput onChangeText={handleChange} style={styles.input} />
      <ScrollView style={styles.list}>
        {filterFrom.map((item, idx) => (
          <Pressable onPress={() => updateFromPhase(item)} key={idx}>
            <Text style={styles.text}>{item}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <TextInput onChangeText={handleChangeDOS} style={styles.input} />
      <ScrollView style={styles.list}>
        {filterTo.map((item, idx) => (
          <Pressable onPress={() => updateToPhase(item)} key={idx}>
            <Text style={styles.text}>{item}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};


export default Travel;