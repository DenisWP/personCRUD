import React, {useState, useEffect} from "react";
import {Button, Table} from "react-bootstrap";
import api from "../../services/api";
import PersonInterf from "../../types/PersonInterf"; //importando a tipagem

const Person = () => {
    //Declarando variável para pegar os dados da API
    const [person, setPerson] = useState<PersonInterf[]>([])

    //Usado para executar a funcao, assim que a página for iniciada.
    useEffect(() => {
        loadPerson();
    }, [])

    async function loadPerson (){
        //Mudar o servico depois
        const response = await api.get('/posts')
        console.log(response)
        setPerson(response.data)
    }


    return (
        <div className="container">
            <br/>
            <h1>Pessoas</h1>
            <br/>
                <Table striped bordered hover className="text-center">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>CPF</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        person.map(person => (
                            <tr key={person.id}>
                                    <td>{person.id}</td>
                                    <td>{person.title}</td>
                                    <td>{person.body}</td>
                                    <td>{person.userId}</td>
                                    <td>
                                        <Button size="sm">Editar</Button>{' '}
                                        <Button size="sm" variant="danger">Excluir</Button>
                                    </td>
                            </tr>
                            )
                        )
                    }
                    </tbody>
                </Table>
        </div>
    );
}
export default Person
