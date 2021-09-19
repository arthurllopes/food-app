import React from 'react'
import { Link } from 'react-router-dom'
import UserInput from '../Input/UserInput'
import { Container, Form } from './style'


const Information = () => {
    return (
        <Container>
            <div>
                <h2>Seus Dados</h2>
                <Form action="">
                    <UserInput label="Nome" type="text" name="name" placeholder="Digite seu nome"/>
                    <UserInput label="Celular" type="text" name="phone" placeholder="Digite seu número"/>
                    <div>
                            
                    </div>
                    <div  className="btn">
                        <Link to="confirmation">
                            <button>
                                Confirmar pedido
                            </button>
                        </Link>
                    </div>
                </Form>
            </div>
            <div>
               <h2>Como gostaria de ter sua refeição?</h2> 
            </div>       
       </Container>
    )
}

export default Information
