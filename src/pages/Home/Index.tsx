import React from "react";
import {Button, Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import ImgPerson from '../../pictures/person.png'

const Home = () => {

    const navigate = useNavigate()

    function goPessoa (){
        navigate('/pessoas')
    }
    return (
    <div className="container">
        <br/>
        <div className="home-header"/>
        <br/>
        <Card style={{ width: '16rem', margin: "auto"}}>
            <Card.Img variant="top" src={ImgPerson} />
            <Card.Body>
                <Card.Title>CRUD de Pessoas</Card.Title>
                <Card.Text>
                    Simples projeto para estudo sobre desenvolvimento WEB.
                </Card.Text>
                <Button variant="primary" onClick={goPessoa}>Iniciar</Button>
            </Card.Body>
        </Card>
    </div>
)}
export default Home;