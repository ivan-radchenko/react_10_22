import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const App = () => {
  const [messegeList, setMessegeList] = useState([]);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const [list, setList] = useState([
    {
      name: 'firstchat',
      id: 1,
    },
  ]);


  let addMessege = () => {
    let messegeListAuthor = author;
    let messegeListMessege = text;
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

      <TextField
        id="outlined-basic"
        label="Имя"
        variant="outlined"
        type="text"
        onChange={(e) => setAuthor(e.target.value)}
        autoFocus
      />

      <TextField
        id="outlined-multiline-flexible"
        label="Сообщение"
        multiline
        maxRows={4}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />

      <Button
        type="submit"
        size='large'
        variant="contained"
        endIcon={<SendIcon />}
        onClick={addMessege}>
        Send
      </Button>

      {messegeList.map((item, index) =>
        <div key={index}>
          <p className='Who'>От кого:{item.author}</p>
          <p className='Messege'>{item.ms}</p>
          <hr />
        </div>
      )}

      {list.map((item, index) =>
        <nav key={index} aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="test" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      )}

    </div >
  );
}