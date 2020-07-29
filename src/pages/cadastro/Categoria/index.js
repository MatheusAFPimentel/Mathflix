import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

import { CategoryBase, ButtonBlue, ButtonCancel, Input} from './styles'

function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
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
                        placeHolder={"Categoria"}
                        type="text"
                        name="nome"
                        value={nomeCategoria.nome}
                        onChange={handleChange}
                    />
                    <FormField
                        placeHolder={"Descrição"}
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