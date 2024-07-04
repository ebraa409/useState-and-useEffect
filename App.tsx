import React from 'react';
import {Text, View, Button} from 'react-native';
import { useState } from 'react';

const App = () => {
// This will set the state of the number
const [number, setNumber] = useState(0)

// function to increment the number onPress
  const onPress = () => {
    setNumber(number +1)
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "black"
      }}>
      <Text>{number}~{"\n"}</Text>
      <Button
    title="+"
    onPress={onPress}
    />
    </View>

  );
};
export default App