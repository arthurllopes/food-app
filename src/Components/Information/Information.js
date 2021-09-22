import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../Input/Input'
import {Form} from './style'
import {setOrder} from '../../store/Order'
import DeliverOption from '../DeliverOption/DeliverOption'
import { useNavigate } from 'react-router-dom'


const Information = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {items, total} = useSelector(state => state.Cart)

    const [name, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [error, setError] = React.useState(false)

    function validateNumber(value){
        const regex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/
        const validate = regex.test(value)
        console.log(validate)
        if(!validate){
            setError(true)
        } else {
            setError(false)
        }
    }
    function handleChange(target) {
        setPhone(target.value);
        if (error) {
            validateNumber(target.value)
        }
    }
    function handleBlur(target){
        validateNumber(target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        if (!error && items) {
            dispatch(setOrder({items, total, user: {name, phone}}))
            navigate('/confirmation')
        }
    }
    return (
        <Form action="" onSubmit={(event) => handleSubmit(event)}>
            <div className="user">
                <h2>Seus Dados</h2>
                <div>
                    <Input label="Nome" type="text" name="name" placeholder="Digite seu nome" required value={name} onChange={({target}) => setName(target.value)} />
                    <Input label="Celular" type="number" name="phone" placeholder="Digite seu número" required value={phone} onChange={({target}) => handleChange(target)} onBlur={({target}) => handleBlur(target)} />
                    {error && <p>Preencha um número de telefone válido.</p> }
                </div>
            </div>
            <div>
                <h2>Como gostaria de ter sua refeição?</h2>
                <DeliverOption />    
                {error && <p> !!! Preencha um número de telefone válido.</p>}
                {items.length === 0 && <p> !!! Você não possui itens no carrinho.</p> }
            </div>
            <div className="btn" >
                <button type="submit">
                    Confirmar pedido
                </button>
            </div>   
       </Form>
    )
}

export default Information
