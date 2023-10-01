import {Route,Routes} from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import Login from "./login/login";
import Partner from "./partner/Partner";
import Admin from "./admin/Admin";
import MainCategory from "./main-category/MainCategory";
import SubCategory from "./sub-category/SubCategory";
import ProductDetails from "./productdetails/ProductDetails";
import React from "react";

const AllRoutes = () => {
return (
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/partner" element={<Partner/>} />
    <Route path="/admin" element={<Admin/>} />
    <Route path="/maincategory/:categoryId" element={<MainCategory />} />
    <Route path="/subcategory/:categoryId" element={<SubCategory />} />
    <Route path="/productdetails/:id" element={<ProductDetails />} />
  </Routes>
)
}
export default AllRoutes