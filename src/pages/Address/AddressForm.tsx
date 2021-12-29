import React, {ChangeEvent, useEffect, useState} from "react";
import {Button, Col, Form, FormControl, Row} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import AddressFormInterf from "../../types/AddressFormInterf";
import axios from "axios";

const AddressForm = () => {
    const navigate = useNavigate()
    const {id } = useParams()
    const [address, setAddress] = useState<AddressFormInterf>({
        zipcode: '',//cep
        street: '', // longradouro
        number: 0, //numero
        suite: '', //complemento
        bairro: '', //bairro
        city: '', // cidade
        estado: '' //estado
    })

    useEffect(() => {
        if (id !== undefined){
            findAddress(id)
        }
    }, [id])

    // Funcao para atualizar os valores do endereco,d e acordo com cada campo
    function updateAddress (e: ChangeEvent<HTMLInputElement>){
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        })
    }

    async function findAddress (id: string){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        console.log(response)
        setAddress({
            zipcode: response.data.address.zipcode,
            street: response.data.address.street,
            number: response.data.address.number,
            suite: response.data.address.suite,
            bairro: response.data.address.city,
            city: response.data.address.city,
            estado: response.data.address.estado
        })
    }


    // Funcao para enviar os dados para o BD (api do Elizeu)
    async  function onSubmit (e:ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        if (id !== undefined){
            const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, address)
            console.log(response)
        }else {
            const response = await axios.post('https://jsonplaceholder.typicode.com/users/', address)
            console.log(id)
        }
       goHome()
    }


    function goPerson (){
        if (id !== undefined){
            navigate(`/pessoas_cadastro/${id}`)
        }else {
            navigate(`/pessoas_cadastro`)
        }

    }

    function goHome(){
        navigate('/pessoas')
    }


   return(
        <Form className="container" onSubmit={onSubmit}>
            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridCep">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control
                        type="text"
                        name="zipcode"
                        value={address.zipcode}
                        onChange={(e:ChangeEvent<HTMLInputElement>) => updateAddress(e)}
                        placeholder="Digite o CEP"
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLongradouro">
                    <Form.Label>Longradouro</Form.Label>
                    <Form.Control
                        type="text"
                        name="street"
                        value={address.street}
                        onChange={(e:ChangeEvent<HTMLInputElement>) => updateAddress(e)}
                        placeholder="Longradouro..."
                    />
                </Form.Group>
            </Row>

            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridNumero">
                    <Form.Label>Número</Form.Label>
                    <Form.Control
                        type="number"
                        name="number"
                        value={address.number}
                        onChange={(e:ChangeEvent<HTMLInputElement>) => updateAddress(e)}
                        placeholder="Numero"
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridComplemento">
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control
                        type="text"
                        name="suite"
                        value={address.suite}
                        onChange={(e:ChangeEvent<HTMLInputElement>) => updateAddress(e)}
                        placeholder="Complemento"
                    />
                </Form.Group>
            </Row>

            <Row className="mb-4">

                <Form.Group as={Col} controlId="formGridBairro">
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control
                        type="text"
                        name="bairro"
                        value={address.bairro}
                        onChange={(e:ChangeEvent<HTMLInputElement>) => updateAddress(e)}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCidade">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control
                        type="text"
                        name="city"
                        value={address.city}
                        onChange={(e:ChangeEvent<HTMLInputElement>) => updateAddress(e)}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridUF">
                    <Form.Label>UF</Form.Label>
                    {/*<Form.Select
                            name="estado"
                            value={address.estado}
                            defaultValue="Pesquisar...">
                        <option>Pesquisar...</option>
                        <option>MG</option>
                    </Form.Select>*/}
                    <Form.Control
                        type="text"
                        name="estado"
                        value={address.estado}
                        onChange={(e:ChangeEvent<HTMLInputElement>) => updateAddress(e)}
                    />

                </Form.Group>
            </Row>
            <Button variant="success" onClick={goPerson}>Voltar</Button>{'  '}
            <Button variant="primary" type="submit">
                Salvar
            </Button>
        </Form>
    );
}
export default AddressForm