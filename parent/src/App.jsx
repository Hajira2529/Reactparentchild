import React from 'react'
import Part1 from './Part1'

const App = () => {
  const name = "Inarah";
  return (
    <div className=' underline text-5xl text-amber-400'>
        Happy birthday
        <Part1  data = {name}/>
    </div>
  )
}

export default App
