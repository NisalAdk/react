import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';


function Todolist() {
  const [todo, setTodo] = useState({ description: '', date: null, priority: '' });

  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = () => {
        setTodos([...todos, todo]);
    setTodo({ description: '', date: null, priority: '' });
  };

  const deleteTodo = () => {
    setTodos(todos.filter((todo, i) => i !== 0));
  };

  const dateChanged = (date) => {
    
    setTodo({ ...todo, date: date });
    


  };

  const columns = [
    { headerName: 'Date', field: 'date', sortable: true, filter: true, floatingFilter: true },
    { headerName: 'Description', field: 'description', sortable: true, filter: true, floatingFilter: true },
    { headerName: 'Priority', field: 'priority', sortable: true, filter: true, floatingFilter: true, cellStyle: params => params.value === 'High' ? { color: 'red' } : { color: 'black' } }
  ];

  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
        <TextField variant="standard" onChange={inputChanged} label="Description" name="description" value={todo.description} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Date" value={todo.date} onChange={date => dateChanged(date)} />



        </LocalizationProvider>
        <TextField variant="standard" onChange={inputChanged} label="Priority" name="priority" value={todo.priority} />
        <Button onClick={addTodo} variant="contained">Add</Button>
        <Button onClick={deleteTodo} variant="contained">Delete</Button>
      </Stack>
      <div className="ag-theme-material" style={{ height: '700px', width: '70%', margin: 'auto' }}>
        <AgGridReact columnDefs={columns} rowData={todos} animateRows={true} />
      </div>
    </div>
  );
}

export default Todolist;
