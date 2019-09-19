import React from 'react'


export function filhosComponentComProps(props){
    return React.Children.map(props.children, filho =>{ 
        return React.cloneElement(filho,{...props})})
}