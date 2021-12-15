import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Person from './pages/Person'
import PersonForm from './pages/Person/Form'

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pessoas" element={<Person/>}/>
            <Route path="/pessoas_cadastro" element={<PersonForm/>}/>
        </Routes>
    );
}
export default Router

