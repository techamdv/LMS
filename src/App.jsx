import { useState } from 'react'
import Dashboard from "./components/Dashboard";
import Header from './components/Header';
import SiderBar from './components/SiderBar';
import Footer from './components/Footer';
import DownTimeEntry from './components/ProductionMaster/DownTimeEntry';


function App() {
  return (
    <>
      <Header />
      <SiderBar />
      <Dashboard />
      <DownTimeEntry/>
      <Footer />
      

    </>
  )
}

export default App
