import { NavLink } from 'react-router-dom'
import './nav.css'

export const Nav = () => {
    return (
        <nav>
            <div className='links'>
                <NavLink to={`/home`}>
                    <p>Productos</p>
                </NavLink>
                <NavLink to={`/contact`}>
                    <p>Quien Soy</p>
                </NavLink>
                <NavLink to={`/contact`}>
                    <p>Contacto</p>
                </NavLink>
                <NavLink to={`/contact`}>
                    <p>Carrito</p>
                </NavLink>
            </div>
        </nav>
    )
}