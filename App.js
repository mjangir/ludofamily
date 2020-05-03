/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import gameService from './src/services/game';
import useAsync from './src/hooks/useAsync';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [rooms, setRooms] = useState([]);
  const {isLoading, isError, run} = useAsync();

  useEffect(() => {
    const subscriber = firestore()
      .collection('Rooms')
      .onSnapshot(roomSnapshots => {
        const data = roomSnapshots.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(data);
        setRooms(data);
      });

    return () => subscriber();
  }, []);

  useEffect(() => {
    run(() => gameService.createRoom('Gopendra', 'RED'));
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>hello</Text>
        <View>
          {rooms.length > 0 && rooms.map(r => <Text>{r.totalPlayers}</Text>)}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
