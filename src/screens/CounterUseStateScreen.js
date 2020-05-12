import React, { useState } from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

const CounterUseStateScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button title='Increase' onPress={() => setCounter(counter + 1)}></Button>
      <Button title='Decrease' onPress={() => setCounter(counter - 1)}></Button>
      <Text style={styles.text}>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default CounterUseStateScreen;
