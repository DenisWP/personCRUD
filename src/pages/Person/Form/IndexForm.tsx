import React, {useState, useEffect, ChangeEvent} from "react";
import {Button, Form} from "react-bootstrap";
import api from "../../../services/api";
import {useNavigate, useParams} from "react-router-dom";
import PersonFormInterf from "../../../types/PersonFormInterf";

const Person = () => {
    const [newPerson, setNewPerson] = useState<PersonFormInterf>({
        name: '',
        username:'',
        email: ''
    })
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        if (id !== undefined){
            findPerson(id)
        }
    }, [id])

    function updatedPerson (e: ChangeEvent<HTMLInputElement>){
        setNewPerson({
            ...newPerson,
            [e.target.name]:e.target.value
        })
    }

    async  function onSubmit (e:ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        if (id !== undefined){
            const response = await api.put(`/users/${id}`, newPerson)
            navigate('/address',{state: {userId: id }}) // Passando o id para a tela de endereo
        }else {
            const response = await api.post('/users', newPerson)
        }
       goAddress()
    }

    async function findPerson(id: string | undefined){
        const response = await api.get(`/users/${id}`)
        setNewPerson({
            name: response.data.name,
            username: response.data.username,
            email: response.data.email
        })
    }

    function back (){
        navigate('/pessoas')
    }

    function goAddress (){
        navigate('/address')
    }

    return (
        <div className="container">
            <br/>
            <div className="person-header">
                <h3>Dados Pessoais</h3>
            </div>
            <br/>
            <div className="container">
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>Nome completo</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={newPerson.name}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedPerson(e)}
                            placeholder="Digite seu nome completo"
                        />
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>Idade</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            value={newPerson.username}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedPerson(e)}
                            placeholder="Digite sua idade"
                        />
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>CPF</Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            value={newPerson.email}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedPerson(e)}
                            placeholder="Ex: 000.000.000-00"
                        />
                    </Form.Group>
                    <br/>
                    <Button variant="success" onClick={back}>Voltar</Button> {'   '}
                    <Button variant="primary" type="submit">
                        Próximo
                    </Button>
                </Form>
            </div>

        </div>
    );
}
export default Person
