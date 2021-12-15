import React, {useState, useEffect, ChangeEvent} from "react";
import {Button, Form} from "react-bootstrap";
import api from "../../../services/api";
import {useNavigate, useParams} from "react-router-dom";

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
    const navigate = useNavigate()
    const {id} = useParams()


    useEffect(() => {
        if (id != undefined){
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
        if (id != undefined){
            const response = await api.put(`/posts${id}`, newPerson)
        }else {
            const response = await api.post('/posts', newPerson)
        }
        back()
    }

    async function findPerson(id: string | undefined){
        const response = await api.get(`/posts/${id}`)
        setNewPerson({
            title: response.data.title,
            body: response.data.body,
            userId: response.data.userId
        })
    }

    function back (){
        navigate('/pessoas')
    }


    return (
        <div className="container">
            <br/>
            <div className="person-header">
                <h3>Nova Pessoa</h3>
                <Button variant="success" onClick={back}>Voltar</Button>
            </div>
            <br/>
            <div className="container">
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>Nome completo</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={newPerson.title}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedPerson(e)}
                            placeholder="Digite seu nome completo"/>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>Idade</Form.Label>
                        <Form.Control
                            type="text"
                            name="body"
                            value={newPerson.body}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedPerson(e)}
                            placeholder="Digite sua idade" />
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>CPF</Form.Label>
                        <Form.Control
                            type="text"
                            name="userId"
                            value={newPerson.userId}
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
