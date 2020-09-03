import React from 'react'
import Item from './Item'

interface ColumnProps {
  items: string[]
}

const Column: React.FC<ColumnProps> = ({ items }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {items.map((text, index) => (
        <Item key={text} text={text} index={index} />
      ))}
    </div>
  )
}

export default Column
