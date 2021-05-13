import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavbarContext from '../context/navbar/navbarContext';

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
  circle: {
    height: 44,
    width: 44,
    backgroundColor: '#CF6AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 48,
    marginRight: '4%',
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
    marginVertical: 12,
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageTextView: {
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
  subMessageTextView: {
    backgroundColor: '#07001C',
    padding: 8,
    borderRadius: 18,
    maxWidth: '85%',
  },
});

const Chat = ({ navigation }) => {
  const { navbarHidden, setNavbarHidden } = useContext(NavbarContext);

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
          <View style={styles.circle}>
            <Text style={styles.circleText}>C</Text>
          </View>
          <Text style={styles.projectTitle}>Chat App</Text>
        </View>
      </View>
      <View style={styles.chatContainer}>
        <ScrollView style={styles.messagesView}>

          <View style={styles.messageItem}>
            <View style={styles.circle}>
              <Text style={styles.itemCircleText}>P</Text>
            </View>
            <View style={styles.messageTextView}>
              <Text style={styles.messageAuthor}>Pedro / 4:20 AM</Text>
              <View style={styles.subMessageTextView}>
                <Text style={styles.messageText}>Buenos dias chicos como les va</Text>
              </View>
            </View>
          </View>


        </ScrollView>
        <View style={styles.sendMsgView}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Escribe tu mensaje..."
              placeholderTextColor={'#484848'}
            />
          </View>
          <Pressable style={styles.btnView}>
            <Icon name="send" size={34} color="#7C4FFF"></Icon>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Chat;
