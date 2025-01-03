import { NavLink } from 'react-router-dom'
import './nav.css'

export const Nav = () => {
    return (
        <nav >
            <div className='padre'>
                <div className='container'>
                    <div className='links'>
                        <NavLink to={`/home`}>
                            <p>Productos</p>
                        </NavLink>
                        <NavLink to={`/contact`}>
                            <p>Quien Soy</p>
                        </NavLink>

                        <NavLink to={`/contact`}>
                            <p>Carrito</p>
                        </NavLink>
                        <NavLink to={`/login`}>
                            <p>login</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}