import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Navigation from './customer/Components/Navbar/Navigation';
import CustomerRoutes from './Routers/CustomerRoutes';
import AdminRoutes from './Routers/AdminRoutes';
import NotFound from './Pages/Notfound';
import AdminPannel from './Admin/AdminPannel';
import ProductDetails from './customer/Components/Product/ProductDetails/ProductDetails';
import Routers from './Routers/Routers';

function App() {

  const isAdmin=true;
  
  return (
    <div className="">
      {/* <ProductDetails/> */}

      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
        <Route path="/admin/*" element={<AdminPannel />} />
        
       </Routes>
    </div>
  );
} 

export default App;

