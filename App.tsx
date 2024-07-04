import React from 'react';
import {Text, View, Button} from 'react-native';
import { useState } from 'react';

const App = () => {
// This will set the state of the number
const [number, setNumber] = useState(0)

// function to increment the number onPress
  const onPressIncrement = () => {
    setNumber(number + 1)
  }

  const onPressDecrement = () => {
    setNumber (number - 1)
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
    onPress={onPressIncrement}
    />
    <Button
    title="-"
    onPress={onPressDecrement}
    />
    
    </View>

  );
};
export default App