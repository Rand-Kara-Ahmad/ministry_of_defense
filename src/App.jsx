import {Fragment, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Outlet, ScrollRestoration} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {

  return (
      <Fragment>
          <ScrollRestoration/>
          <Navbar/>
          <Outlet/>
          <Footer/>
      </Fragment>

  )
}

export default App
