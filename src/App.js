import { useState } from 'react';
import './App.css';
import ResuresultScreen from "./components/Screen/App";
import Keyboard from "./components/Keyboard/App";

function App() {
  const [writing, setWriting] = useState("0");
  const [number, setNumber] = useState([]);

  let aux_number = ''

  const SetNumber = (number) => {
    if(writing == "0") setWriting(number)
    else{
      console.log(writing)
      console.log(number)
  
      aux_number = writing + number
      setWriting(aux_number)
    }
  }

  const setReset = () => {
    setWriting('0')
    setNumber([])
  }

  const operation = (text_operation) => {
    console.log(text_operation)

    let array = number
    array.push(writing)
    array.push(text_operation)

    setNumber(array)
    setWriting("0")
  }

  const settleAccount = () => {
    if(writing != ''){
      let array = number
      array.push(writing)
      setNumber(array)
      setWriting("0")
    }

    let result

    number.forEach((num, index) => {
      console.log(num)

      if(num == '+'){
        result = Number(number[index-1]) + Number(number[index+1])
      }
    });

    console.log(result)
    setWriting(result)
  }

  return (
    <div className="App">
      <ResuresultScreen writing={writing} />
      <Keyboard SetNumber={SetNumber} setReset={setReset} operation={operation} settleAccount={settleAccount} />
    </div>
  );
}

export default App;
