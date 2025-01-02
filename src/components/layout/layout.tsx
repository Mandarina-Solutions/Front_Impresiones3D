import { NavLink, Outlet } from "react-router-dom";
import './layout.css'
import { Search } from "../search/search";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Nav } from "../nav/nav";

export const Layout = () => {

    return <>
    <div className="layout">
        <Header></Header>
        <Nav></Nav>
        <Search></Search>
        
        <div className="renderContent">
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </div>
    </>
};
