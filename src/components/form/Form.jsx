/* eslint-disable react/prop-types */
// import React from 'react'
import { useState } from 'react';

const Form = ({handleAddItems}) => {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = {description, quantity, packed: false, id: Date.now()}
    handleAddItems(newItem);
    setDescription('');
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({length: 20}, (_,i) => i+1).map((num) => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)}></input>
      <button type="submit">Add</button>
    </form>
  )
}

export default Form;
