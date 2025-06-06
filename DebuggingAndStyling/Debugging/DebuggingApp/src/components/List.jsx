import React, { useState } from 'react';

function List() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  function addItem() {
    const newItem = `Item ${items.length + 1}`
    setItems([...items, newItem]);
  }

  return (
    <div>
      <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}
export default List;
