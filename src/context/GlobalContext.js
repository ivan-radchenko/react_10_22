import {createContext, useState} from 'react'

import axios from 'axios'

export const GlobalContext= createContext()

export const GlobalProvider = ({children}) => {

  const title = 'CHAT:'

  const [items, setItems] = useState([]);
  const [inputs, setInputs] = useState({ title: '', text: '' });

  const handlerForm = (event) => {
    event.preventDefault()
    console.log('Submit form')
    axios.post('http://localhost:3001/posts', {
      myId: Math.round(Math.random() * 99),
      title: inputs.title,
      text: inputs.text,
      likes: 0,
    }).then((newPost) => {
      console.log('NEW-POST', newPost.data.post)
      const { myId, title, text, likes } = newPost.data.post
      setItems(prev => [...prev, { myId, title, text, likes }])
    });

    setInputs({ title: '', text: '' })
  }

  const handleInputs = (event) => {
    console.log(event.target.name)
    setInputs(prev => (
      {
        ...prev,
        [event.target.name]: event.target.value
      }
    ))
  }

  return (
    <GlobalContext.Provider value={{title, items, inputs, handlerForm, handleInputs, setItems}} >
      {children}
    </GlobalContext.Provider>
  )
}