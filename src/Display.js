import React, { useContext } from 'react'
import { AppContext } from './context'
export default () => {
  const [value] = useContext(AppContext);
  return(<h1>Count : {value}</h1>)
}