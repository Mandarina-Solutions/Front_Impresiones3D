import { NavLink, Outlet } from "react-router-dom";
import './layout.css'
import { Search } from "../search/search";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Nav } from "../nav/nav";

export const Layout = () => {

    return <>
        <Header></Header>
        <Nav></Nav>
        <Search></Search>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
};
