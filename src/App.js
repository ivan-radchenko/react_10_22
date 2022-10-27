import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';

export const App = () => {
  const [messegeList, setMessegeList] = useState([]);
  const authorRef = React.createRef();
  const messegeRef = React.createRef();


  let addMessege = () => {
    let messegeListAuthor = authorRef.current.value;
    let messegeListMessege = messegeRef.current.value;
    let elem = {
      author: messegeListAuthor,
      ms: messegeListMessege,
    }
    let messeges = [...messegeList, elem];

    setMessegeList(messeges);
    // messegeRef.current.value = '';
    console.log([messeges]);
  }

  useEffect(() => {
    setTimeout(() => {
      if (messegeList[messegeList.length - 1]?.author !== 'bot') {
        setMessegeList([...messegeList, { author: 'bot', ms: 'Hi, i am bot' }]);
      }
    }, "1500")
  }, [messegeList]);


  return (
    <div className="App">
      <h2>Автор:</h2>
      <input type="text" className='Input' ref={authorRef}></input>
      <h2>Сообщение:</h2>
      <textarea type="text" className='Text' ref={messegeRef}></textarea>
      <button className='Button' onClick={addMessege}>send</button>

      {messegeList.map((item, index) =>
        <div key={index}>
          <p className='Who'>{item.author}</p>
          <p className='Messege'>{item.ms}</p>
          <hr />
        </div>
      )
      }

      <p></p>
    </div >
  );
}