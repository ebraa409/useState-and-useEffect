import React from 'react';
import {Text, View, Button} from 'react-native';
import { useState, useEffect } from 'react';


const App = () => {
// This will set the state of the number
const [number, setNumber] = useState(0)
const [count, setCount] = useState(0)
const [timer, setTimer] = useState(false)

useEffect(() => {
if(timer === true){
    const interval = setInterval(() => {
    setCount(counter => counter + 1)
  }, 1000);

  return () =>  clearInterval(interval);
}
}, [timer])



const startTimer = () => {
setTimer(true)
}

const stopTimer = () => {
  setTimer(false)
  console.log(timer)
  clearInterval(count)
}

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
      <Text style= {{
        fontSize: 40,
      }}>
        API Fetch:
      </Text>
      <Text>{number}{"\n"}</Text>
      
      <Button 
    title="+"
    onPress={onPressIncrement}
    />
    
      <Text>{"\n"}</Text>
    
    <Button
    title="-"
    onPress={onPressDecrement}
    />
      <Text>{"\n"}</Text>

      <Text>{count}{"\n"}</Text>
    <Button
    title="Start Timer"
    onPress={startTimer}
    />
      <Text>{"\n"}</Text>

    <Button
    title="Stop Timer"
    onPress={stopTimer}
    />

    </View>
    

    

  );
};
export default App