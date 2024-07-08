import React from 'react';
import {Text, View, Button} from 'react-native';
import { useState, useEffect } from 'react';


const App = () => {
// This will set the state of the number
const [number, setNumber] = useState(0)
const [count, setCount] = useState(0)
const [timer, setTimer] = useState(false)
const [fact , setFact] = useState('')

useEffect(() => {
    //Fetching Api Data
    fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(json => {
      setFact(json.fact)
    })
      .catch(error => console.log(error));
  
}, [''])
useEffect(() => {


// Using setInterval or start a timer and increases the counter
if(timer === true){
    const interval = setInterval(() => {
    setCount(counter => counter + 1)
  }, 100);

  // pauses the timer cancels/stops the parameter
  return () =>  clearInterval(interval);
}
}, [timer])


// function to handle startTimer button
const startTimer = () => {
setTimer(true)
}

// function to handle stopTimer button
const stopTimer = () => {
  setTimer(false)
}

// function to increment the number onPress
  const onPressIncrement = () => {
    setNumber(number + 1)
  }

// function to decrement the number onPress

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
        fontSize: 20,
      }}>
        Random Cat Fact:
      </Text>
      <Text>{"\n"}</Text>

      <Text>{fact}</Text>
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