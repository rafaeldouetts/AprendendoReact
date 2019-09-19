import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeiroComponent from './components/PrimeiroComponent'
//import {CompA,CompB as B } from './components/DoisComponent'

//importa elemento por elemento
//import CompA,{CompB}  from './components/DoisComponent'

//import MultiComponents from './components/MultiComponents'
// import FamiliaSilva from './components/FamiliaSIlva'

// import Familia from './components/Familia';
// import Membro from './components/Membro';

//import ComponenteComFuncao from './components/ComponenteComFuncao'

//  import Pai from './components/Pai'

// import Contador from './components/Contador'

import Hook from './components/Hook'

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
<Hook></Hook>
{/* <Contador numeroInicial={100}></Contador> */}

{/* <ComponentClasse valor="sou um componente de classe !"></ComponentClasse> */}
 {/* <Pai/>  */}

    {/* 
        <ComponenteComFuncao/> */}
{/* <Familia sobrenome="pereiraaaaaaaaaa">
    <Membro nome = "Andre" ></Membro>
    </Familia> */}
        

{/* <Familia>
    <Membro nome = "Andre" sobrenome ="Pereira"></Membro>
    <Membro nome = "Mariana" sobrenome ="Pereira"></Membro>
</Familia>

<Familia>
    <Membro nome = "Bia" sobrenome ="Arruda"></Membro>
    <Membro nome = "Gustavo" sobrenome ="Arruda"></Membro>
</Familia> */}


 {/*passando parametros para o componente*/}
 {/* <FamiliaSilva sobrenome="Silva Pereira"/>  */}

{/* 
 <FamiliaSilva sobrenome="Silva Pereira"/>  */}
{/* <MultiComponents/> */}


{/* <CompA valor="ola eu sou a "/>
<B valor="ola eu sou B "/> */}
      
        {
            /* <PrimeiroComponent valor="BoA noite"/>
        <PrimeiroComponent ABcD="seja bem vindo"/> */}
    </div>
,elemento)