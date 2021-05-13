/* eslint-disable no-shadow */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavbarContext from '../context/navbar/navbarContext';
import MessagesView from './MessagesView';
import FireBaseContext from '../context/firebase/firebaseContext';
import { getProjectMessages, getFirstLetter } from '../utils/helpers';
import { updateDocument } from '../utils/firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '2%',
    paddingHorizontal: '5%',
    backgroundColor: '#1B1B1B',
    borderBottomWidth: 0.2,
    borderColor: '#C4C4C4',
  },
  title: {
    marginTop: 24,
    marginBottom: 24,
    fontSize: 44,
    fontWeight: 'bold',
    color: 'white',
  },
  projectView: {
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleText: {
    fontSize: 24,
    color: '#1B1B1B',
  },
  projectTitle: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  chatContainer: {
    flex: 1,
  },
  messagesView: {
    height: '100%',
    marginBottom: 80,
  },
  sendMsgView: {
    height: 80,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#1B1B1B',
    alignItems: 'center',
    borderTopWidth: 0.2,
    borderColor: '#C4C4C4',
  },
  inputView: {
    width: '82%',
    alignItems: 'center',
  },
  inputText: {
    width: '90%',
    height: 48,
    fontSize: 22,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  btnView: {
    width: '18%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemCircleText: {
    fontSize: 24,
    color: 'white',
  },
  messageItem: {
    padding: 8,
    marginVertical: 6,
    marginHorizontal: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageAuthor: {
    color: '#676767',
    fontSize: 14,
    fontWeight: 'bold',
  },
  messageText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  messageTextView: {
    maxWidth: '80%',
  },
  subMessageTextView: {
    backgroundColor: '#07001C',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 18,
  },
  notificationItem: {
    marginVertical: 12,
    marginHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  notificationTextView: {
    backgroundColor: '#101010',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  notificationText: {
    color: '#555555',
    fontSize: 18,
  },
});

const Chat = ({ route, navigation }) => {
  const { navbarHidden, setNavbarHidden } = useContext(NavbarContext);
  const [text, setText] = useState('');

  const { messages, addMessage, user } = useContext(FireBaseContext);
  const { key, name, color } = route.params.item;
  const filteredMessages = getProjectMessages(messages, key);

  const handlePress = () => {
    addMessage({
      name: user.displayName,
      photoURL: user.photoURL,
      projectId: key,
      text,
      date: Date.now(),
      isMessage: true,
    });
    updateDocument('projects', key, {
      lastUpdated: Date.now(),
    });
    setText('');
    Keyboard.dismiss();
  };

  const circle = {
    height: 44,
    width: 44,
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 48,
    marginRight: '4%',
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigationView}>
        <Pressable
          onPress={() => {
            setNavbarHidden(!navbarHidden);
            navigation.navigate('Chats');
          }}
        >
          <Icon name="arrow-back-outline" size={44} color="#FFFFFF" />
        </Pressable>
        <View style={styles.projectView}>
          <View style={circle}>
            <Text style={styles.circleText}>{getFirstLetter(name)}</Text>
          </View>
          <Text style={styles.projectTitle}>{name}</Text>
        </View>
      </View>
      <View style={styles.chatContainer}>
        <MessagesView filteredMessages={filteredMessages} />
        <View style={styles.sendMsgView}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Escribe tu mensaje..."
              placeholderTextColor="#484848"
              onChangeText={(text) => setText(text)}
              value={text}
            />
          </View>
          <Pressable style={styles.btnView} onPress={() => handlePress()}>
            <Icon name="send" size={34} color="#7C4FFF" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

Chat.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
  route: PropTypes.instanceOf(Object).isRequired,
};

export default Chat;
