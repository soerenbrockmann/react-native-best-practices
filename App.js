import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import CounterUseStateScreen from './src/screens/CounterUseStateScreen';
import CounterUseReducerScreen from './src/screens/CounterUseReducerScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    CounterUseState: CounterUseStateScreen,
    CounterUseReducer: CounterUseReducerScreen,
  },
  {
    initialRouteName: 'CounterUseReducer',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
