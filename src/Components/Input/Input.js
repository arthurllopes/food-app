import React from 'react'
import { InputContainer } from './style'

const Input = ({...props}) => {
    return (
        <InputContainer>
            <label htmlFor={props.name}>{props.label}</label>
            <input {...props} id={props.name} name={props.name} placeholder={props.placeholder} type={props.type} value={props.value} onChange={props.onChange} onBlur={props.onBlur} />
        </InputContainer>
    )
}

export default Input
