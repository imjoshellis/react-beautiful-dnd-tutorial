import React from 'react'

interface ItemProps {
  text: string
  index: number
}

const Item: React.FC<ItemProps> = ({ text, index }) => {
  return <div>{text}</div>
}

export default Item
