import { NavLink } from 'react-router-dom'
import './header.css'

export const Header = () => {
    return (
        <header>
        <div className="detail">
            <img src="./src/assets/logo.png" alt="IMG" className="logo" />
            <h2>VLab</h2>
        </div>
        <div className="shortcuts">
            <NavLink to={`/home`}>
                <button>Home</button>
            </NavLink>
            <NavLink to={`/contact`}>
                <button>About me</button>
            </NavLink>
        </div>

    </header>
    )
}