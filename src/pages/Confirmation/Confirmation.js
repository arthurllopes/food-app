import React from 'react'
import { useSelector } from 'react-redux'
import { ConfirmationContainer } from './style'
import { CartItem } from '../../Components/Cart/style'

const Confirmation = () => {
    const {items, total} = useSelector(state => state.Cart)
    const order = useSelector(state => state.Order.items)
    return (
        <ConfirmationContainer>
            <div>
                <ion-icon name="checkmark-circle"></ion-icon>
                {order[0]}
                <h2>Pedido finalizado</h2>
            </div>
            <div >
                <div>    
                    {items.map((item) => (
                        <div key={item.id}>    
                            <CartItem>
                                <div className="qt">
                                    <span>{item.qt}</span>
                                </div>
                                <div className="img">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className="title">
                                    {item.title}
                                </div>
                                <div className="price">
                                    {item.total},00
                                </div>
                            </CartItem>
                        </div>
                    ))}
                </div>
                <div className="total">
                    <h4>Total: </h4>
                    <h4 >R$ {total},00</h4>
                </div>
            </div>
            {'delivery' === "delivery" ? (
                <p>Seu pedido será entregue em aproximadamente 60 minutos.</p>
            ) : (
                <p>Em 25 minutos seu pedido estará pronto para ser retirado em nossa loja.</p>
            )}
        </ConfirmationContainer>
    )
}

export default Confirmation
