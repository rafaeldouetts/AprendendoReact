import React, {Component} from 'react'

export default class Contandor extends Component{

    state ={
        numero:this.props.numeroInicial
    }
    
    maisUm =()=>
    {
        this.setState({numero:this.state.numero +1 })
        //this.state.numero++
    }
   menosUm =()=>
    {
        this.setState({numero:this.state.numero -1 })
   
    }

    alterarNumero =(diferenca)=>
    {
        this.setState({
            numero:this.state.numero + diferenca
        })
    }

   
    render(){
        return (
            <div>
                <h1>Número:{this.state.numero}</h1>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={()=>this.alterarNumero(10)}>Inc 10</button>
                <button onClick={()=>this.alterarNumero(-10)}>Dec - 10</button>
            </div>
                
        )
    }
}

//soluçao 1: para garantir que a palavra "this" sempre aponte para o objeto atual
    // constructor(props){
    //     super(props)
    //     this.maisum = this.maisUm.bind(this)
    // }


    //solucao 2:uso das arrow function
    //  <button onClick={()=>this.maisUm()}>Inc</button>
    
    //solucao 3:transforma o metodo em uma funcao arrow 
    // maisUm =()=>
    // {
    //     this.props.numero++
    // }
