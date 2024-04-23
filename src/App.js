import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
import TableGrid from './TableGrid/TableGrid';
import Filter from './FILTER/Filter';
import AccountingTest from './Accounting Overview/AccountingTest';
import AccountingTable from './Accounting Overview/AccountingTable';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccountingPage from './Accounting Overview/AccountingPage';


function App() {
  return (
    <>
     <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/TableGrid" element={<TableGrid />} />
          <Route path="/Filter" element={<Filter />} />
          <Route path="/AccountingTable" element={<AccountingTable />} />
          <Route path="/Accounting" element={<AccountingPage />} />
          <Route path="/Test" element={<AccountingTest />} />
        </Routes>
      </BrowserRouter>
    </div>
    </> 
  );
}

export default App;
