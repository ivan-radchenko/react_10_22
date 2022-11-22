import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { add, get } from './store/cashReducer'

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  console.log(cash)

  return (
    <div className="App">
      <div>{cash}</div>
      <div style={{ displey: "flex" }}>
        <button onClick={() => dispatch(add())}>Пополнить</button>
        <button onClick={() => dispatch(get())}>Снять</button>
      </div>
    </div>
  );
}

export default App;
