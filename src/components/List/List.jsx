import React from 'react'

import { useSelector} from 'react-redux'

import Item from '../Item/Item'

export default function List({title}) {
  const posts = useSelector((store) => store.posts)
  // console.log(posts)
  return (
    <div>
      <h1>{title}</h1>
      <div className="row justify-content-center">
        {
          posts.map((post) =>
            <Item key={post.myId} item={post} />
          )
        }
      </div>
    </div>
  )
}
