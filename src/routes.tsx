import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Index'
import CrudPerson from './pages/CrudPerson/Index'
import PersonForm from './pages/Person/PersonForm'
import AddressForm from "./pages/Address/AddressForm";

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pessoas" element={<CrudPerson/>}/>
            <Route path="/pessoas_cadastro" element={<PersonForm/>}/>
            <Route path="/pessoas_cadastro/:id" element={<PersonForm/>}/>
            <Route path="/address" element={<AddressForm/>}/>
            <Route path="/address/:id" element={<AddressForm/>}/>
        </Routes>
    );
}
export default Router

