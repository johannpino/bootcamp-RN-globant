import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import MessageItem from './MessageItem';

const styles = StyleSheet.create({
  messagesView: {
    height: '100%',
    marginBottom: 80,
  },
});

const scrollToBottom = () =>
  this.scrollView.scrollToEnd({ animated: false, index: -1 });

const scrollToBottomAnimated = () =>
  this.scrollView.scrollToEnd({ animated: true, index: -1 }, 200);

const MessagesView = ({ filteredMessages }) => (
  <ScrollView
    style={styles.messagesView}
    ref={(ref) => (this.scrollView = ref)}
    onContentSizeChange={() => {
      scrollToBottom();
    }}
  >
    {filteredMessages.map((message, index) => {
      const { isMessage, text, photoURL, date } = message;
      return (
        <MessageItem
          isMessage={isMessage}
          author={message.name}
          text={text}
          key={index}
          date={date}
          image={photoURL}
        />
      );
    })}
  </ScrollView>
);

export default MessagesView;
