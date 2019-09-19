import React from 'react'

const aprovados = ['paula','roberta','gustavo','Julia']

export default props =>{
    const gerarItens = itens =>{
        return itens.map(item => <li>{item}</li>)
    }
    return (
        <ul>
        {gerarItens(aprovados)}
    </ul>
    )
    }
