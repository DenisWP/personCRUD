import React from "react";
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { HeaderNav } from './Header.styles'

const Header = () => {
    return(
        <HeaderNav>
            <div>
                <h1> CRUD de Pessoas </h1>
            </div>
        </HeaderNav>
    );
}

export default Header