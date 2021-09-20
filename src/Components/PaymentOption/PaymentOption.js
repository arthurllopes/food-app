import React from 'react'

const PaymentOption = () => {
    return (
        <div>
            <label>
                <input name="card" type="radio" value="card" checked={typePayment === "card"} onChange={({ target }) => setTypePayment(target.value)} />
                Cartão
            </label>
            <label>
                <input name="money" type="radio" value="money" checked={typePayment === "money"} onChange={({ target }) => setTypePayment(target.value)} />
                Dinheiro
            </label>
        </div>
    )
}

export default PaymentOption
