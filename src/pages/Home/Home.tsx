import React from "react";
import {Button, Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import ImgPerson from '../../pictures/person.png'
import {CardHome, CardBody } from './Home.styles'

const Home = () => {

    const navigate = useNavigate()

    function goPessoa (){
        navigate('/pessoas')
    }

    return (
        <div className="container">
            <br/>
            <div/>
            <br/>
            <CardHome>
                <Card.Img variant="top" src={ImgPerson} />
                <CardBody>
                    <Card.Text>
                        Estudo sobre Desenvolvimento WEB.
                    </Card.Text>
                    <Button onClick={goPessoa}>Iniciar</Button>
                </CardBody>
            </CardHome>
        </div>
    )}
export default Home;