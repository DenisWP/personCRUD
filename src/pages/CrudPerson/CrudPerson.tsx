import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import {Button, Table} from "react-bootstrap";
import apiPessoas from "../../services/api";
import PersonInterf from "../../types/PersonInterf"; //importando a tipagem
import './CrudPerson.styles'
import { TableHeader } from './CrudPerson.styles'
import axios from "axios";

const CrudPerson = () => {
    //Declarando variável para pegar os dados da API
    const [person, setPerson] = useState<PersonInterf[]>([])
    const navigate = useNavigate()
    const baseUrlEndereco = process.env.REACT_APP_BASE_URL_ENDERECO
    const apiEndereco = axios.create({
        baseURL: baseUrlEndereco
    })

    //Usado para executar a funcao, assim que a página for iniciada.
    useEffect(() => {
        loadPerson();
    }, [])

    async function loadPerson (){
        await apiPessoas.get('/person')
            .then((response) => {
                setPerson(response.data)
            })
    }

    async function deletePessoa(id: number){
       const getEndereco = await apiEndereco.get(`/pessoa/${id}`)
       const idEndereco = getEndereco.data.id

       await apiPessoas.delete(`/person/${id}`)
            .then(async (response) => {
             await apiEndereco.delete(`/endereco/${idEndereco}`)
            //await apiEndereco.delete(`/endereco/58`)
             loadPerson()
       })
    }

    function newPessoa () {
        navigate('/pessoas_cadastro');
    }

    function editPessoa (id: number) {
        navigate(`/pessoas_cadastro/${id}`);
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
            <TableHeader>
                <input className="form-input" placeholder="Pesquise um usuário" onChange={handleInput}/>
                <Button variant="success" onClick={newPessoa}>Nova Pessoa</Button>
                <Button variant="secondary" onClick={goInicio}>Voltar</Button>
            </TableHeader>
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
                                <td>{person.age}</td>
                                <td>{person.cpf}</td>
                                <td>
                                    <Button variant="info" size="sm" onClick={() => editPessoa(person.id)}>Editar</Button>{'         '}
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
