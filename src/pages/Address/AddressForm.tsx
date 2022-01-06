import React, {ChangeEvent, useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import AddressFormInterf from "../../types/AddressFormInterf";
import axios from "axios";
import apiPessoas from "../../services/api";

const AddressForm = () => {
    const navigate = useNavigate()
    const {id, zipcode} = useParams()
    //Instancia da API de Endereço do Elizeu
    const baseUrlEndereco = process.env.REACT_APP_BASE_URL_ENDERECO
    const apiEndereco = axios.create({
        baseURL: baseUrlEndereco
    })

    const [address, setAddress] = useState<AddressFormInterf>({
        id_pessoa: '', // id_pessoa
        cep: '', //cep
        logradouro: '', // longradouro
        numero: 0, //numero
        complemento: '', //complemento
        bairro: '', // bairro
        cidade: '', // cidade
        uf: '' //estado
    })

    useEffect(() => {
        if (id !== undefined){
            findAddress(id)
                if(zipcode !== undefined){
                    viaCEP(zipcode)
                }
        }
    }, [id, zipcode])

    // Funcao para atualizar os valores do endereco, de acordo com cada campo
    function updateAddress (e: ChangeEvent<HTMLInputElement>){
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        })
    }

    async function findAddress (id: string){
    const response = await apiEndereco.get(`/pessoa/${id}`)
        const getDados = await apiPessoas.get(`/person`)
        const ultimo = getDados.data.pop() // Pop, retornando o ultimo registro no GET.

        if (id == response.data.id_pessoa) {
            console.log(response)
            setAddress({
                id_pessoa: ultimo.id, //id da pessoa vindo da API da Natali
                cep: response.data.cep,
                logradouro: response.data.logradouro,
                numero: response.data.numero,
                complemento: response.data.complemento,
                bairro: response.data.bairro,
                cidade: response.data.cidade,
                uf: response.data.uf
            })
        }else{
            alert("Pessoa não cadastrada !")
        }
    }

    async function viaCEP (zipcode: string) {
        if(zipcode.length > 9){
            alert("CEP Inválido")
        }
        const responseCep = await  axios.get(`https://viacep.com.br/ws/${zipcode}/json`)
        console.log(responseCep)
        if (responseCep.data.erro == true){
            alert("CEP não encontrado ou Desatualizado ! Porém, o cadastro poderá ser concluído. ")
        }else {
            const getDados = await apiPessoas.get(`/person`)
            const ultimo = getDados.data.pop() // Pop, retornando o ultimo registro no GET.
            setAddress({
                id_pessoa: ultimo.id, // Só para nao dar erro, o via CEP nao tem id
                cep: responseCep.data.cep,
                logradouro: responseCep.data.logradouro,
                numero: responseCep.data.number,
                complemento: responseCep.data.suite,
                bairro: responseCep.data.bairro,
                cidade: responseCep.data.localidade,
                uf: responseCep.data.uf
            })
        }
    }

    // Funcao para enviar os dados para o BD (api do Elizeu)
    async  function onSubmit (e:ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        if (id !== undefined){
            const responseAddress = await apiEndereco.get(`/pessoa/${id}`)
            const idAddress = responseAddress.data.id
            const response = await apiEndereco.put(`/endereco/${idAddress}`, address)
            console.log(response)
        }else {
            const response = await apiEndereco.post(`/endereco/`, address)
            console.log(response)
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
            <br/>
            <div className="person-header">
                <h3>Endereço</h3>
            </div>
            <br/>
            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridCep">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control
                        type="text"
                        name="cep"
                        value={address.cep}
                        onChange={(e:ChangeEvent<HTMLInputElement>) => updateAddress(e)}
                        placeholder="Digite o CEP"
                        required
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>ViaCEP</Form.Label><br/>
                    <Button onClick={() => viaCEP(address.cep)}>Pesquisar</Button>
                </Form.Group>
            </Row>

            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridLongradouro">
                    <Form.Label>Logradouro</Form.Label>
                    <Form.Control
                        type="text"
                        name="logradouro"
                        value={address.logradouro}
                        onChange={(e:ChangeEvent<HTMLInputElement>) => updateAddress(e)}
                        placeholder="Logradouro..."
                        required
                    />
                </Form.Group>
            </Row>


            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridNumero">
                    <Form.Label>Número</Form.Label>
                    <Form.Control
                        type="number"
                        name="numero"
                        value={address.numero}
                        onChange={(e:ChangeEvent<HTMLInputElement>) => updateAddress(e)}
                        placeholder="Numero"
                        required
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridComplemento">
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control
                        type="text"
                        name="complemento"
                        value={address.complemento}
                        onChange={(e:ChangeEvent<HTMLInputElement>) => updateAddress(e)}
                        placeholder="Complemento"
                        required
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
                        required
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCidade">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control
                        type="text"
                        name="cidade"
                        value={address.cidade}
                        onChange={(e:ChangeEvent<HTMLInputElement>) => updateAddress(e)}
                        required
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
                        name="uf"
                        value={address.uf}
                        onChange={(e:ChangeEvent<HTMLInputElement>) => updateAddress(e)}
                        required
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