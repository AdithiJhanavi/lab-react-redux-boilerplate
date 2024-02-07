import React, { useState } from 'react';
import { createStore } from 'redux';
import Third from './third';
import { incrementNumber, decrementNumber } from './first';

const store = createStore(Third)


export default function Counter() {

  const [count, setCounter] = useState(0);

  const unsubscribe = store.subscribe(()=>{
    setCounter(store.getState().count)
  })  

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={()=>store.dispatch(incrementNumber())}>Like</button>
      <button onClick={()=>store.dispatch(decrementNumber())}>Unlike</button>
    </div>
  )
}