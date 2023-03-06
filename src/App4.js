
import './App.css';

import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
function Todolist() {


  const [todo, setTodo] = useState({ description: '', date: '', priority: '' });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const addTodo = (event) => {
    setTodos([...todos, todo]);
  }
  const deleteTodo = () => {
    setTodos(todos.filter((todo, i) => i !== 0));



  }
  const columns = [
    { headerName: 'Date', field: "date", sortable: true, filter: true, floatingFilter:true },
    { headerName: 'Description', field: "description", sortable: true, filter: true, floatingFilter:true },
    { headerName: 'Priority', field: "priority", sortable: true, filter: true, floatingFilter:true, cellStyle: params => params.value === "High"? {color:'red'} : {color:'black'} }]


  return (
    <div  >
      <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description} />
      <input type="text" onChange={inputChanged} placeholder="Date" name="date" value={todo.date} />
      <input type="text" onChange={inputChanged} placeholder="Priority" name="priority" value={todo.priority} />
      <button onClick={addTodo}>Add</button>
      <button onClick={deleteTodo}>Delete</button>
      <div className="ag-theme-material"
        style={{ height: '700px', width: '70%', margin: 'auto' }} >
        <AgGridReact
          columnDefs={columns}
          rowData={todos}
          animateRows={true}>
        </AgGridReact>
      </div>


    </div>
  );
};

export default Todolist;
