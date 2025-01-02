import { NavLink, Outlet } from "react-router-dom";
import './layout.css'
import { Search } from "../search/search";
import { Header } from "../header/header";

export const Layout = () => {

    return <>
        <Header></Header>
        <Search></Search>
        
        <div className="content">
            <Outlet></Outlet>
        </div>
        <Header></Header>

    </>
};
