import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Person from './pages/Person'

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pessoas" element={<Person/>}/>
        </Routes>
    );
}
export default Router

