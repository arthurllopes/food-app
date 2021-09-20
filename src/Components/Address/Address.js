import React from 'react'
import PaymentOption from '../PaymentOption/PaymentOption';

const Address = () => {
    return (
        <div>
            <label htmlFor="cep" >CEP</label>
            <input id="cep" name="cep" placeholder="Digite seu CEP" type="text" maxLength="8" onChange={(event) => { setCep(event.target.value); setError(false) }} onBlur={validateCep} value={cep} />
            {error && <p>Digite um CEP válido</p>}
            {address  && (
                <>
                <div>
                    <p>{address.rua}</p>
                    <p>{address.cidade} / {address.uf} - {address.bairro}</p>
                </div>
                <label htmlFor="number">Número</label>
                <input id="number" name="number" placeholder="Digite o número da residência"  type="number" onChange={(event) => setNumber(event.target.value)} value={number} />
                <label htmlFor="complement" >Complemento</label>
                <input id="complement" name="complement" placeholder="Digite um complemento"  type="text" onChange={(event) => setComplement(event.target.value)} value={complement} />
                <h3>Pagamento</h3>
                <p>Método de pagamento:</p>
                <PaymentOption />
                </>
            )}
        </div>
    )
}

export default Address
