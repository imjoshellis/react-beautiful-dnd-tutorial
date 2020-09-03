import React from 'react'
import Item from './Item'
import { Droppable } from 'react-beautiful-dnd'

interface ColumnProps {
  items: string[]
}

const Column: React.FC<ColumnProps> = ({ items }) => {
  return (
    <Droppable droppableId='col-1'>
      {provided => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {items.map((text, index) => (
            <Item key={text} text={text} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default Column
