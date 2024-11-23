import { useState } from 'react'
import Dashboard from "./components/Dashboard";
import Header from './components/Header';
import SiderBar from './components/SiderBar';
import Footer from './components/Footer';

import { Outlet, Route, Routes } from 'react-router-dom';
import Test from './components/Test';

import DownTimeEntry from './components/ProductionMaster/DownTimeEntry';


function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/test' element={<Test />} />
        <Route path='/downtime-entry' element={<DownTimeEntry />} />
      </Routes>
      <Header />
      <SiderBar />
      <Outlet />
      <Footer />


    </>
  )
}

export default App
