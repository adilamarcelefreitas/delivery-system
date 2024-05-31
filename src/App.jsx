// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterAddress from './pages/RegisterAddress';
import EditAddress from './pages/EditAddress';
import AddressList from './pages/AddressList';
import AddressProvider from './context/AddressContext';


const App = () => {
  return (
    <AddressProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AddressList />} />
          <Route path="/list" element={<AddressList />} />
          <Route path="/register" element={<RegisterAddress />} />
          <Route path="/edit/:id" element={<EditAddress />} />
        </Routes>
      </Router>
    </AddressProvider>
  );
};

export default App;