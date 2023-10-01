import {useLocation,} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import SubNav from "./components/subnav/SubNav";

import React from "react";
import {useEffect,useState} from "react";

import {ToastContainer} from "react-toastify";
import Routes from "./routes";
import Cart from "./cart/Cart";
import './App.scss'


function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  const location = useLocation();

  useEffect(() => {
    console.log("Pathname is", location.pathname);
    const pathsToHideSidebar = ['/partner', '/about', '/contact', '/productdetails','/product-catalog','/login'];

    if (pathsToHideSidebar.some(path => location.pathname.toLowerCase().includes(path.toLowerCase()))) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  }, [location.pathname]);


  return (
    <div className="app">
      <SubNav/>
      <Navbar showSidebar={showSidebar} />
      <Cart/>
      <Routes/>
      <ToastContainer limit={2}/>
      <Footer/>
    </div>
  );
}

export default App;