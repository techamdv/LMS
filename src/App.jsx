import { useState } from 'react'
import Dashboard from "./components/Dashboard";
import Header from './components/Production Master/Header';
import SiderBar from './components/Production Master/SiderBar';
import Footer from './components/Production Master/Footer';

function App() {
  return (
    <>
      <Header />
      <SiderBar />
      <Dashboard />
      <Footer />

    </>
  )
}

export default App
