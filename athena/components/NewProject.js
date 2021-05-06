/* eslint-disable implicit-arrow-linebreak */
import React, { useContext, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ProjectsContext from '../context/projects/projectsContext';
import ColorContainer from './ColorContainer';
import colors from '../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 24,
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    fontSize: 20,
    color: 'white',
  },
  inputView: {
    alignItems: 'center',
    marginHorizontal: 48,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
});

const NewProject = () => {
  const projectsContext = useContext(ProjectsContext);
  const { setNewProject } = projectsContext;
  const [name, setName] = useState('');

  return (
    <ScrollView>
      <Pressable onPress={() => setNewProject(false)}>
        <Icon
          style={styles.icon}
          name="close-outline"
          size={52}
          color="#FFFFFF"
        />
      </Pressable>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{`Nuevo${'\n'}proyecto`}</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            onChangeText={(text) => setName(text)}
            style={styles.input}
            placeholder="Nombre del proyecto"
            placeholderTextColor="#484848"
          />
        </View>
        <View>
          <ColorContainer colors={colors} />
        </View>
      </View>
    </ScrollView>
  );
};

export default NewProject;
