import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import {SafeAreaView, StyleSheet, View, ActivityIndicator} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});

const ActivityIndicatorElement = () => {
  return (
    <View style={styles.activityIndicatorStyle}>
      <ActivityIndicator color="#009688" size="large" />
    </View>
  );
};

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <WebView
          style={{flex: 1}}
          source={{
            uri:
              'https://saludresponde.minsal.cl/preguntas-frecuentes-covid19/',
          }}
          onLoadStart={() => setVisible(true)}
          onLoad={() => setVisible(false)}
        />
        {visible ? <ActivityIndicatorElement /> : null}
      </View>
    </SafeAreaView>
  );
};
