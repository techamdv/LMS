import { useState } from 'react'
import Dashboard from "./components/Dashboard";
import Header from './components/Header';
import SiderBar from './components/SiderBar';
import Footer from './components/Footer';
<<<<<<< HEAD
import { Outlet, Route, Routes } from 'react-router-dom';
import Test from './components/Test';
=======
import DownTimeEntry from './components/ProductionMaster/DownTimeEntry';

>>>>>>> 3d40e3258951700364fffcbf5407fbb1ce5d6439

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/test' element={<Test />} />
      </Routes>
      <Header />
      <SiderBar />
<<<<<<< HEAD
      <Outlet />
=======
      <Dashboard />
      <DownTimeEntry/>
>>>>>>> 3d40e3258951700364fffcbf5407fbb1ce5d6439
      <Footer />
      

    </>
  )
}

export default App
