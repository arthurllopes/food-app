import React from 'react'

const DeliverOption = () => {
    return (
        <div>
            <label>
                <input name="store" type="radio" value="store" checked={typeBuy === "store"} onChange={({ target }) => setTypeBuy(target.value)} />
                Retirar na loja
            </label>
            <label>
                <input name="delivery" type="radio" value="delivery" checked={typeBuy === "delivery"} onChange={({ target }) => setTypeBuy(target.value)} />
                Delivery
            </label>
            {typeBuy === 'delivery' && user !== null ? (
                <AddressDefault />
            ) : (
                ''
            )}
            {typeBuy === 'delivery' && user === null ? (
                <Address />
            ) : (
                ''
            )}
        </div>
    )
}

export default DeliverOption
