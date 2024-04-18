import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
import TableGrid from './TableGrid/TableGrid';
import Filter from './FILTER/Filter';


function App() {
  return (
    <>
    <Dashboard />
    <TableGrid />
    <Filter />
    </> 
  );
}

export default App;
