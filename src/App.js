import './App.css';
import { Messege } from './components/Messege';
import { useState } from 'react';

export const App = () => {
  const [messege, setMessege] = useState('null')

  const ChangeMessege = (ev) => {
    setMessege(ev.target.value)
  }

  return (
    <div className="App">
      <input type="text" className='Input' onChange={ChangeMessege}></input>
      <Messege messege={messege} />
    </div>
  );
}