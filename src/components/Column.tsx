import React from 'react'
import Item from './Item'
import { Droppable } from 'react-beautiful-dnd'

interface ColumnProps {
  col: {
    id: string
    list: string[]
  }
}

const Column: React.FC<ColumnProps> = ({ col: { list, id } }) => {
  return (
    <Droppable droppableId={id}>
      {provided => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <h2>{id}</h2>
          {list.map((text, index) => (
            <Item key={text} text={text} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default Column
