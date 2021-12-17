import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Address = () => {
    const navigate = useNavigate()









    function goPerson (){
        navigate('/pessoas_cadastro')
    }

    return(
        <Form className="container">

            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridCep">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLongradouro">
                    <Form.Label>Longradouro</Form.Label>
                    <Form.Control placeholder="Longradouro..." />
                </Form.Group>
            </Row>

            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridNumero">
                    <Form.Label>Número</Form.Label>
                    <Form.Control type="number" placeholder="Numero" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridComplemento">
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control type="text" placeholder="Complemento" />
                </Form.Group>
            </Row>

            <Row className="mb-4">

                <Form.Group as={Col} controlId="formGridBairro">
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCidade">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridUF">
                    <Form.Label>UF</Form.Label>
                    <Form.Select defaultValue="Pesquisar...">
                        <option>Pesquisar...</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Button variant="success" onClick={goPerson}>Voltar</Button>{'  '}
            <Button variant="primary" type="submit">
                Salvar
            </Button>
        </Form>
    );
}
export default Address