import React from 'react'

export default function Item({item}) {
  console.log('Item')
  return (
    <>
        <hr/>
      <div className="card" >
          <h5 className="card-title">{item.title ?? 'Card title'}</h5>
          <p className="card-text">{item.text ?? 'Some quick example'}</p>
            <hr/>
      </div>
    </>
  )
}
