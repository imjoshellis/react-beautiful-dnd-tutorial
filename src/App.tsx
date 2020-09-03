import React from 'react'
import Column from './components/Column'

function App () {
  const list = ['Item 1', 'Item 2', 'Item 3']
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        margin: '24px auto',
        width: '80%',
        gap: '8px'
      }}
    >
      <Column items={list} />
    </div>
  )
}

export default App
