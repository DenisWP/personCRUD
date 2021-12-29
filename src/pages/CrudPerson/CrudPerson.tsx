import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import {Button, Table} from "react-bootstrap";
import api from "../../services/api";
import PersonInterf from "../../types/PersonInterf"; //importando a tipagem
import './Index.css'

const CrudPerson = () => {
    //Declarando variável para pegar os dados da API
    const [person, setPerson] = useState<PersonInterf[]>([])
    const navigate = useNavigate()

    //Usado para executar a funcao, assim que a página for iniciada.
    useEffect(() => {
        loadPerson();
    }, [])

    async function loadPerson (){
        //Mudar o servico depois
        const response = await api.get('/users')
        console.log(response)
        setPerson(response.data)
    }

    function newPessoa () {
        navigate('/pessoas_cadastro');
    }

    function editPessoa (id: number) {
        navigate(`/pessoas_cadastro/${id}`);
    }

    async function deletePessoa(id: number){
        await api.delete(`/users/${id}`)
        loadPerson()
    }

    function goInicio(){
        navigate('/')
    }

    function searchTable(value: string){
        const filteredData = [];
        for (let i = 0; i < person.length; ++i){
            const newValue = value.toLowerCase()
            const user = person[i].name.toLowerCase()
            if(user.includes(newValue)){
                filteredData.push(person[i])
            }
        }
        return filteredData
    }

    function handleInput(e: any){
        const inputValue = e.target.value;
        setPerson(searchTable(inputValue))
    }

    return (
        <div className="container">
            <br/>
            <div className="person-header">
                <h1>Pessoas</h1>
                <input className="form-input" placeholder="Pesquise um usuário" onChange={handleInput}/>
                <Button variant="success" onClick={newPessoa}>Nova Pessoa</Button>
                <Button variant="secondary" onClick={goInicio}>Voltar</Button>
            </div>
            <br/>
            <Table striped bordered hover className="responsive-table">
                <thead>
                <tr className="text-center">
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
                                <td>{person.name}</td>
                                <td>{person.username}</td>
                                <td>{person.email}</td>
                                <td>
                                    <Button variant="info" size="sm" onClick={() => editPessoa(person.id)}>Editar</Button>{'      '}
                                    <Button variant="danger" size="sm" onClick={() => deletePessoa(person.id)}>Excluir</Button>
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
export default CrudPerson
