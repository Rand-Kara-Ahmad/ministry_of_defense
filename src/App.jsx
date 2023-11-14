import {Fragment} from 'react'
import './App.css'
import './consts/root.css'
import {Outlet, ScrollRestoration} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import 'bootstrap/dist/js/bootstrap.min.js';
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
