import { NavLink } from 'react-router-dom'
import './login.css'
import { useState } from 'react'

const credential = {user: 'admin', pass: 'mandarina'}

export const Login = () => {

    const [userName, setUserName] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = () => {
        const flag = checkValueUser()
        alert(`Autenticación correcta: ${flag} valor del name =>  ${userName} valor del pass => ${pass}`)
    }

    const checkValueUser = () => {
        return userName === credential.user && pass === credential.pass
    }

    return(
        <>
            <div className="login-container">
                <div className="login-card">
                    <h2>Iniciar Sesión</h2>
                    <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Usuario</label>
                        <input 
                        type="text" 
                        id="username" 
                        placeholder="Ingresa tu usuario" 
                        value={userName} 
                        onChange={(ev) => setUserName(ev.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                        type="password"
                        id="password"
                        placeholder="Ingresa tu contraseña"
                        value={pass}
                        onChange={(ev) => setPass(ev.target.value)}
                        />
                    </div>
                    <button type='submit' className="login-button">
                        Entrar
                    </button>
                    </form>
                    <NavLink to='/home'><button className="login-button-volver">
                        Volver
                    </button></NavLink>
                </div>
            </div>
        </>
    )
}