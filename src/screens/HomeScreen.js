import React from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Welcome To Ludo Family</Text>
    <Button
      title="Create A Game"
      style={styles.create}
      onPress={() => Alert.alert('Simple Button pressed')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#030D4F',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  create: {
    flex: 1,
    backgroundColor: '#9CC4E4',
  },
});

export default HomeScreen;
