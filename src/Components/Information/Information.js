import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../Input/Input'
import {Form} from './style'
import {setOrder} from '../../store/Order'
import { Link} from 'react-router-dom';
import DeliverOption from '../DeliverOption/DeliverOption'


const Information = () => {
    const dispatch = useDispatch()
    const {items} = useSelector(state => state.Cart)

    function handleSubmit(event){
        event.preventDefault()
        dispatch(setOrder([items, 'info']))
    }
    return (
        <Form action="" onSubmit={(event) => handleSubmit(event)}>
            <div className="user">
                <h2>Seus Dados</h2>
                <div>
                    <Input label="Nome" type="text" name="name" placeholder="Digite seu nome"/>
                    <Input label="Celular" type="text" name="phone" placeholder="Digite seu número"/>
                </div>
            </div>
            <div>
                <h2>Como gostaria de ter sua refeição?</h2>
                <DeliverOption />    
            </div>
            <div className="btn">

            <button type="submit">
                <Link to="confirmation">Confirmar pedido</Link>
            </button>
            </div>   
       </Form>
    )
}

export default Information
