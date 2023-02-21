import React, { useState } from 'react';
import './App.css';

function App() {

  const [todo, setTodo] = useState({ desc: '', date: '' });

  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });

  }



  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);

  }

  return (
    <div className="App">



      <form onSubmit={addTodo}>
        <fieldset>
          <legend>
            Add Todo:
          </legend>

          <p className="todo">
            Date: <input type="text" value={todo.date} name="date" onChange={inputChanged} />
            Description: <input type="text" value={todo.desc} name="desc" onChange={inputChanged} />
            <input type="submit" value="Add" />
          </p>
        </fieldset>



      </form>


      <table>

        <th>Date</th>
        <th>Description</th>
        <tbody>

          {
            todos.map((todo, index) =>
              <tr key={index}>

                <td>{todo.date}</td>
                <td>{todo.desc}</td></tr>)
          }
        </tbody>
      </table>

    </div>
  );
}

export default App;
