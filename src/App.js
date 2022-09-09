import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {

  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  const increase = () => {
    dispatch({type: 'INCREMENT', payload: ''})
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+ button</button>
    </div>
  )
}

export default App
