import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Index'
import Person from './pages/Person/Index'
import PersonForm from './pages/Person/Form/Index'
import PersonAddress from './pages/Person/Form/Address'

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pessoas" element={<Person/>}/>
            <Route path="/pessoas_cadastro" element={<PersonForm/>}/>
            <Route path="/pessoas_cadastro/:id" element={<PersonForm/>}/>
            <Route path="/address" element={<PersonAddress/>}/>
            <Route path="/address/:id" element={<PersonAddress/>}/>
        </Routes>
    );
}
export default Router

