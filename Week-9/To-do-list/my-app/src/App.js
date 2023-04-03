import { useState } from 'react';
import './App.css';
import InputArea from "./Components/InputArea";
import ToDoItem from './Components/ToDoItem';


function App() {
  const [items, setItems] = useState([]);

  const addItems = (inputText) => {
    setItems((previousItems) => {
      return [...previousItems, inputText]
    });
  };

  const deleteItem = (id) => {
    setItems((previousItems) => {
      return previousItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do-List</h1>
      </div>
      <InputArea addItems={addItems} />
      <div>
        <ul>
          {
            items.map((item, index) => {
              return <ToDoItem key={index} text={item} deleteItem={deleteItem} id={index} />;
            })
          }
        </ul>
      </div>

    </div>
  );
}

export default App;
