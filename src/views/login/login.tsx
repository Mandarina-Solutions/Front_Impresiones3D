import { NavLink } from 'react-router-dom'
import './login.css'
import { useState } from 'react'

interface Credential {userName : string, pass: string}
const mockCredential: Credential = {userName: 'admin', pass: 'mandarina'}

export const Login = () => {

    const [user, setUser] = useState({userName: '', pass: ''})

    const handleSubmit = () => {
        const flag = checkValueUser()
        alert(`Autenticación correcta: ${flag} valor del name =>  ${user.userName} valor del pass => ${user.pass}`)
    }

    const checkValueUser = () => {
        return user.userName === mockCredential.userName && user.pass === mockCredential.pass
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
                        value={user.userName} 
                        onChange={(ev) => setUser({...user, userName: ev.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                        type="password"
                        id="password"
                        placeholder="Ingresa tu contraseña"
                        value={user.pass}
                        onChange={(ev) => setUser({...user, pass : ev.target.value})}
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