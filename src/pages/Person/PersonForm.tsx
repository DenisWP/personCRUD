import React, {useState, useEffect, ChangeEvent} from "react";
import { Button, Form} from "react-bootstrap";
import apiPessoas from "../../services/api";
import {useNavigate, useParams} from "react-router-dom";
import PersonFormInterf from "../../types/PersonFormInterf";
import {cpfMask} from "./Mask";


const Person = ( ) => {
    const navigate = useNavigate()
    const {id} =  useParams()
    const [newPerson, setNewPerson] = useState<PersonFormInterf>({
        id: '',
        name: '',
        age: 0,
        cpf: ''
    })

    /*É um hook: Executar o código, só quando um componente sofre um update*/
    useEffect(() => {
        if (id !== undefined){
            findPerson(id)
        }
    }, [id])

    async function updatedPerson (e: ChangeEvent<HTMLInputElement>){
        setNewPerson({
            ...newPerson,
            [e.target.name]:e.target.value //name do input, e o value é o atual. Pega o valor do input e passa o valor para ela. Pega pelo name na no input e passa para o target.
        })
    }

    async  function onSubmit (e:ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        if (id !== undefined){
            await apiPessoas.put(`/person/${id}`, newPerson)
                .then((response) =>{
                    navigate(`/address/${id}`)
                })
        }else{
            await apiPessoas.post('/person', newPerson)
                .then((response) => {
                    const id = response.data.id
                    navigate(`/address/${id}`)
                    //this.props.navigate(`/address`, {idCliente : id})

                })
        }
    }

    // id da pessoa tem que enviar no PUT.
    async function findPerson(id: string){
        await apiPessoas.get(`/person/${id}`)
            .then((response) => {
                setNewPerson({
                    id: id,
                    name: response.data.name,
                    age: response.data.age,
                    cpf: response.data.cpf
                })
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
                            required
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
                            required
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
                            required
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
