import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
    return (
        <div>
            checkout
            <button>
                <Link to="confirmation">
                finalizar
                </Link>
            </button>
        </div>
    )
}

export default Checkout
