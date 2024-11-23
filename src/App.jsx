import { useState } from 'react'
import Dashboard from "./components/Dashboard";
import Header from './components/Header';
import SiderBar from './components/SiderBar';
import Footer from './components/Footer';

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
