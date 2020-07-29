import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

import { CategoryBase, ButtonBlue, ButtonCancel} from './styles'

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
            <h1> Cadastro de categoria: {nomeCategoria.nome} </h1>
            
                <form onSubmit={function handleSubmit(infosDoEvento) {
                    infosDoEvento.preventDefault()
                    setCategorias([...categorias, nomeCategoria])

                    setnomeCategoria(valoresIniciais)
                }}>
                    <CategoryBase>
                    <FormField
                        placeHolder={"Categoria"}
                        type="text"
                        name="nome"
                        value={nomeCategoria.nome}
                        onChange={handleChange}
                    />
                    </CategoryBase>
                    <FormField
                        placeHolder={"Descrição"}
                        type="textarea"
                        name="descricao"
                        value={nomeCategoria.descricao}
                        onChange={handleChange}
                    />
                    <CategoryBase>
                    <label>Cor da categoria:</label>
                    <FormField
                        type="color"
                        name="cor"
                        value={nomeCategoria.cor}
                        onChange={handleChange}
                    />
                    </CategoryBase>
                    <ButtonBlue> Salvar </ButtonBlue>
                    <Link to="/">
                    <ButtonCancel> Cancelar </ButtonCancel>
                    </Link>
                </form>
                
            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>
            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>


    )
}

export default CadastroCategoria