import React, { useState } from 'react'
import Column from './components/Column'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

function App () {
  const initialColumns = {
    todo: {
      id: 'todo',
      list: ['item 1', 'item 2', 'item 3']
    },
    doing: {
      id: 'doing',
      list: []
    },
    done: {
      id: 'done',
      list: []
    }
  }
  const [columns] = useState(initialColumns)
  const [list, setList] = useState(['Item 1', 'Item 2', 'Item 3'])

  const onDragEnd = ({ source, destination }: DropResult) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null

    // Make sure we're actually moving the item
    if (destination.index === source.index) return null

    // Move the item within the list
    // Start by making a new list without the dragged item
    const newList = list.filter((_: any, idx: number) => idx !== source.index)

    // Then insert the item at the right location
    newList.splice(destination.index, 0, list[source.index])

    // Update the list
    setList(newList)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          margin: '24px auto',
          width: '80%',
          gap: '8px'
        }}
      >
        {Object.values(columns).map(col => (
          <Column col={col} key={col.id} />
        ))}
      </div>
    </DragDropContext>
  )
}

export default App
