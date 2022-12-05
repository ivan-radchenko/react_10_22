import React from 'react'

export default function Form({handlerForm, handleInputs, inputs}) {
  console.log('Form')
  return (
    <div>
      <form onSubmit={handlerForm}>
        <div id="emailHelp" className="form-text">Ваше имя:</div>
        <div className="mb-3">
          <input 
            type="text" 
            className="form-control" 
            id="exampleInputEmail1"
            name='title'
            onChange={handleInputs}
            value={inputs.title}
            aria-describedby="emailHelp" 
          />
          <div id="emailHelp" className="form-text">Ваше сообщение:</div>
        </div>
        <div className="mb-3">

          <input 
            type="text" 
            name="text"
            className="form-control"
            onChange={handleInputs}
            value={inputs.text}
            id="exampleInputPassword1" 
          />
        </div>

        <button type="submit" className="btn btn-primary">Отправить</button>
      </form>
    </div>
  )
}
