import React, { useState, useEffect } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

import { CategoryBase, ButtonBlue, ButtonCancel, Input} from './styles'

function CadastroCategoria() {

    const valoresIniciais = {
        nome: 'Nome',
        descricao: 'Descrição',
        cor: ''
    }
    const [categorias, setCategorias] = useState([''])
    const [nomeCategoria, setnomeCategoria] = useState(valoresIniciais)


    function setValue(key, value) {
        setnomeCategoria({
            ...nomeCategoria,
            [key]: value, // nome: 'valor'
        })
    }

    function handleChange(e) {
        const [getAttribute, value] = e.target.value
        setValue(
            e.target.getAttribute('name'),
            e.target.value)
    }

    useEffect(() => {
        const URL = 'http://localhost:8080/categorias'
        fetch(URL)
        .then(async (request) => {
           const response = await request.json()
           setCategorias([...response])
        })
    }, [])

    return (


        <PageDefault>
            <CategoryBase>
            <h1> Cadastro de categoria: {nomeCategoria.nome} </h1>
                <form onSubmit={function handleSubmit(infosDoEvento) {
                    infosDoEvento.preventDefault()
                    setCategorias([...categorias, nomeCategoria])

                    setnomeCategoria(valoresIniciais)
                }}>
                    <FormField
                        type="text"
                        name="nome"
                        value={nomeCategoria.nome}
                        onChange={handleChange}
                    />
                    <FormField
                        type="textarea"
                        name="descricao"
                        value={nomeCategoria.descricao}
                        onChange={handleChange}
                    />
                    
                    <label>Cor da categoria:</label>
                    <FormField
                        type="color"
                        name="cor"
                        value={nomeCategoria.cor}
                        onChange={handleChange}
                    />
                    <ButtonBlue> Salvar </ButtonBlue>
                    <Link to="/">
                    <ButtonCancel> Cancelar </ButtonCancel>
                    </Link>
                </form>
                </CategoryBase>
                
            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>
        </PageDefault>


    )
}

export default CadastroCategoria