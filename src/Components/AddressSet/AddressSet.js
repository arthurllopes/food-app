import React from 'react'
import { useSelector, useDispatch  } from 'react-redux';
import PaymentOption from '../PaymentOption/PaymentOption';
import { CepInput } from './style';
import Input from '../Input/Input';
import { fetchCEP, setAddress } from '../../store/Order';

const AddressSet = () => {
    const {address} = useSelector(state => state.Order.info)
    const dispatch = useDispatch()

    function validateCep(target){
        const regex = /^\d{5}-?\d{3}$/
        const validate = regex.test(target.value)
        if(validate) {
            dispatch(fetchCEP(target.value))
        }
    }
    return (
        <CepInput>
            <Input type="text" name="cep" label="CEP" placeholder="Digite seu CEP" maxLength="9" required onChange={({target}) => validateCep(target)} />
            {address && 
                <>
                    {address.zipCode ?
                        <>
                            <div className="address">
                                <p>{address.street}</p>
                                <p>{address.city} / {address.state} - {address.district}</p>
                            </div>
                        </>
                        :
                        <>
                            <p style={{marginBottom: '12px'}}>Não encontramos seu Cep, digite seu endereço abaixo</p>
                        
                            <Input type="text" name="userAddress" label="Endereço" placeholder="Rua, bairro, cidade" required onBlur={({target}) => dispatch(setAddress({userAddress: target.value}))}/>
                        
                        </>
                    }
                    <Input type="number" name="number" label="Número" placeholder="Digite o número da residência" required onBlur={({target}) => dispatch(setAddress({houseNumber: target.value}))} />
                    <Input type="text" name="complement" label="Complemento" placeholder="Digite um complemento" required onBlur={({target}) => dispatch(setAddress({complement: target.value}))} />
                    <PaymentOption />
                </>
            }
        </CepInput>
    )
    
}

export default AddressSet
