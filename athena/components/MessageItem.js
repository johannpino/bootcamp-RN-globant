import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import { getFirstLetter } from '../utils/helpers';

const styles = StyleSheet.create({
  messageItem: {
    padding: 8,
    marginVertical: 4,
    marginHorizontal: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageAuthor: {
    color: '#676767',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  messageText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  messageTextView: {
    maxWidth: '80%',
  },
  itemCircleText: {
    fontSize: 24,
    color: 'white',
  },
  circle: {
    height: 44,
    width: 44,
    backgroundColor: '#E022FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 48,
    marginRight: '4%',
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
  circleImg: {
    height: 44,
    width: 44,
    borderRadius: 48,
    marginRight: '4%',
  },
});

const MessageItem = ({
  isMessage, text, author, date, image,
}) => {

    const dateObj = new Date(date);

  if (!isMessage) {
    return (
      <View style={styles.notificationItem}>
        <View style={styles.notificationTextView}>
          <Text style={styles.notificationText}>
            {author}
            {' '}
            {text}
          </Text>
        </View>
      </View>
    );
  }
  return (
    <View>
      <View style={styles.messageItem}>
        {image ? (
          <Image style={styles.circleImg} source={{ uri: image }} />
        ) : (
          <View style={styles.circle}>
            <Text style={styles.itemCircleText}>{getFirstLetter(author)}</Text>
          </View>
        )}

        <View style={styles.messageTextView}>
          <Text style={styles.messageAuthor}>{`${author} • ${dateObj.getHours()}:${dateObj.getMinutes()}`}</Text>
          <View style={styles.subMessageTextView}>
            <Text style={styles.messageText}>{text}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MessageItem;
