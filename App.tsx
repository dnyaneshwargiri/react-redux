import * as React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import './style.css';

export default function App() {
  const counter=useSelector((state)=>state.counter);
  const dispatch=useDispatch();
  const increment=()=>{
    dispatch({type:'INC'});
  }
  const decrement=()=>{
    dispatch({type:'DEC'})
  }
  const addBy=()=>{
    dispatch({type:'ADD',payload:10});
  }
  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add Value</button>
    </div>
  );
}
