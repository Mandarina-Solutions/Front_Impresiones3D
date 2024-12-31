import { NavLink, Outlet } from "react-router-dom";
import './layout.css'

export const Layout = () => {

    return <>
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
        <div className="search">
            <input type="text" className="input--text"/>
            <button>SEARCH</button>
        </div>
        <div className="content">
            <Outlet></Outlet>
        </div>
        <footer>
            <span>Social 1</span>
            <span>Social 2</span>
            <span>Social 3</span>
        </footer>
    </>
};
