import React from 'react'
import { useSelector } from 'react-redux'
import { ConfirmationContainer } from './style'
import { CartItem } from '../../Components/Cart/style'
import {FaCheckCircle} from 'react-icons/fa'

const Confirmation = () => {
    const {items, total, deliver} = useSelector(state => state.Order)
    return (
        <ConfirmationContainer>
            <div style={{display: 'flex'}}>
                <FaCheckCircle style={{fontSize: '28px', marginRight: '12px', color: 'green'}} />
                <h2>Pedido confirmado</h2>
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
            {deliver === "delivery" ? (
                <p>Seu pedido será entregue em aproximadamente 60 minutos.</p>
            ) : (
                <p>Em 25 minutos seu pedido estará pronto para ser retirado em nossa loja.</p>
            )}
        </ConfirmationContainer>
    )
}

export default Confirmation
