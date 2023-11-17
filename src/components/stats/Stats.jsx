/* eslint-disable react/prop-types */
// import React from 'react'

const Stats = ({ items }) => {
  const itemsLength = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((itemsPacked / itemsLength) * 100);
  if (!items.length) return <p className="stats"><em>Start adding items to your packing list 🚀</em></p>
  return (
    <footer className="stats">
      <em>
        {percentPacked !== 100 ? 
        `💼 You have ${itemsLength} items on your list, and you already packed
        ${itemsPacked} (${itemsLength !== 0 ? percentPacked : 0}%)` : "You got everything! Ready to go ✈️"
        }
      </em>
    </footer>
  );
};

export default Stats;
