import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>What's your name?</Text>
      <TextInput style={styles.input} placeholder="Enter your name" onChangeText={text => setName(text)} defaultValue={name} />
      <Button title="Submit" onPress={() => alert(`Hello, ${name}!`)} />
      {name ? <Text style={styles.name}>Hello, {name}!</Text> : null}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20
  },
  name: {
    fontSize: 18,
    marginTop: 20
  }
});
export default App;