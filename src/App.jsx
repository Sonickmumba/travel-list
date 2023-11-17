import { useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
import Logo from "./components/logo/Logo";
import Form from "./components/form/Form";
import PackingList from "./components/packingList/PackingList";
import Stats from "./components/stats/Stats";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleCheck = (e) => {
    setItems((items) =>
      items.map((item) =>
        item.id === Number(e.target.id)
          ? { ...item, packed: !item.packed }
          : item
      )
    );
  };

  const handleClearButton = () => {
    // I can also clear those items packed by the following code
    // setItems((items) => items.filter((item) => !item.packed));
    const confirmed = window.confirm('Are you sure deleting every item in the list?')
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        handleClearButton={handleClearButton}
      />
      <Stats items={items}/>
    </div>
  );
}

export default App;
