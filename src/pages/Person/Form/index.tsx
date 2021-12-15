import React, {useState, useEffect, ChangeEvent} from "react";
import {Button, Form, Table} from "react-bootstrap";
import api from "../../../services/api";
//import PersonInterf from "../../../types/PersonInterf"; //importando a tipagem


interface PersonInterf{
    title: string,
    body: string,
    userId: number
}

const Person = () => {
    const [newPerson, setNewPerson] = useState<PersonInterf>({
        title: '',
        body:'',
        userId: 0
    })

    function updatedPerson (e: ChangeEvent<HTMLInputElement>){
        setNewPerson({
            ...newPerson,
            [e.target.name]:e.target.value
        })
    }

    async  function onSubmit (e:ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        const response = await api.post('/posts', newPerson)
        console.log(response)
    }


    return (
        <div className="container">
            <br/>
            <div className="person-header">
                <h3>Nova Pessoa</h3>
                <Button variant="success">Voltar</Button>
            </div>
            <br/>
            <div className="container">
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>Nome completo</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedPerson(e)}
                            placeholder="Digite seu nome completo"/>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>Idade</Form.Label>
                        <Form.Control
                            type="text"
                            name="body"
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedPerson(e)}
                            placeholder="Digite sua idade" />
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>CPF</Form.Label>
                        <Form.Control
                            type="text"
                            name="userId"
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedPerson(e)}
                            placeholder="Digite seu CPF" />
                    </Form.Group>
                    <br/>
                    <Button variant="primary" type="submit">
                        Salvar
                    </Button>
                </Form>
            </div>

        </div>
    );
}
export default Person
