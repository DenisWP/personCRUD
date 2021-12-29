import React, {useState, useEffect, ChangeEvent} from "react";
import {Alert, Button, Form} from "react-bootstrap";
import api from "../../services/api";
import {useNavigate, useParams} from "react-router-dom";
import PersonFormInterf from "../../types/PersonFormInterf";
import {cpfMask} from "./Mask";

const Person = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [newPerson, setNewPerson] = useState<PersonFormInterf>({
        name: '',
        age: 0,
        cpf: ''
    })

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
            const response = await api.put(`/person/${id}`, newPerson)
            navigate(`/address/${id}`)
        }else {
            const response = await api.post('/person', newPerson)
            navigate('/address')
        }
    }

    async function findPerson(id: string){
        const response = await api.get(`/person/${id}`)
        setNewPerson({
            name: response.data.name,
            age: response.data.age,
            cpf: response.data.cpf
        })
    }

    function back (){
        navigate('/pessoas')
    }

    return (
        <div className="container" >
            <br/>
            <div className="person-header">
                <h3>Dados Pessoais</h3>
            </div>
            <br/>
            <div className="container">
                <Form onSubmit={onSubmit} role="form">
                    <Form.Group>
                        <Form.Label>Nome completo</Form.Label>
                        <Form.Control
                            id="namePerson"
                            type="text"
                            name="name"
                            value={newPerson.name}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedPerson(e)}
                            placeholder="Nome completo"
                        />
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>Idade</Form.Label>
                        <Form.Control
                            id="agePerson"
                            type="number"
                            name="age"
                            value={newPerson.age}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedPerson(e)}
                            placeholder="Idade"
                        />
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>CPF</Form.Label>
                        <Form.Control
                            id="cpfPerson"
                            type="text"
                            name="cpf"
                            value={cpfMask(newPerson.cpf)}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedPerson(e)}
                            placeholder="CPF"
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
