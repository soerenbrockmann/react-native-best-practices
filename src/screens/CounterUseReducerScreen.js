import React, { useReducer } from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};
const CounterUseReducerScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Button title='Increase' onPress={() => dispatch({ type: 'increment', payload: 1 })}></Button>
      <Button title='Decrease' onPress={() => dispatch({ type: 'decrement', payload: 1 })}></Button>
      <Text style={styles.text}>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default CounterUseReducerScreen;
