import logo from './logo.svg';
import './App.css';
import Display from './components/display'
import Button from './components/buttons'
import {UseState, useState} from 'react'

function App() {

  const[counter,setCount]= useState(0);
  const[name , setName] = useState("Robyn")

  var c = 0;

const changeName = ()=>{ 
  setName("Nicole")
}


const increment = ()=>{
let sum = counter +1 ;
setCount(sum);


}
const decrement = ()=>{
 
 if (counter == 0){
   setCount(0)

 }
 
 
 else{
  let sum = counter -1 ;
  setCount(sum);

 }


}
;


const changenum = ()=>{
setCount (5)

}
  return (
    <div className="App">
    
    <Display counter={counter}/>
  
    <Button increment={increment}  decrement={decrement}/>
    <h1>{name}</h1>
    <h1>{counter}</h1>
    <button onClick={changenum}>SET NUMBER</button>
    <button onClick={changeName}> SET NAME</button>
    </div>

  );
}

export default App;
