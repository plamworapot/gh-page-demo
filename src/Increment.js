import React, { useContext } from 'react'
import { AppContext } from './context'
export default () => {
  const [value, setValue] = useContext(AppContext);
  return(<button onClick={() => {
    setValue(value + 1)
  }}>Increment</button>)
}