// import React from 'react'

import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Books", quantity: 2, packed: false },
//   { id: 4, description: "Soap", quantity: 12, packed: true },
// ];
/* eslint-disable react/prop-types */
const PackingList = ({items, handleDelete, handleCheck, handleClearButton}) => {
  const [sortBy, setSortBy] = useState('input');
  
  let sortedItems;
  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'description') sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed') sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} handleDelete={handleDelete} handleCheck={handleCheck} key={item.id} />
        ))}
      </ul>
      <div className="actions">
        <select name="" id="" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button type="button" onClick={handleClearButton}>Clear list</button>
      </div>
    </div>
  );
};

const Item = ({ item, handleDelete, handleCheck={handleCheck} }) => {
  return (
    <li>
      <input type="checkbox" id={item.id} name="myCheckbox" onChange={(e) => handleCheck(e)}></input>
      <span style={item.packed ? {textDecoration: "line-through"} : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={()=> handleDelete(item.id)}>❌</button>
    </li>
  );
};
export default PackingList;
