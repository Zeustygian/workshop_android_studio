import { StatusBar } from 'expo-status-bar';
import React, { Children } from 'react';
import { Button, Alert } from 'react-native'; 

import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const Cat = ({children}) => {
  return <View>{children}</View>;
};

export default function App() {
  const [text, onChangeText] = React.useState('Useless Text');

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}> Welcome !</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        title="Click here for free V-bucks"
        onPress={() => Alert.alert("haha silly you")}
      />
      <Cat>
        <Text>
          Hello world from my component!
        </Text>
      </Cat>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});



