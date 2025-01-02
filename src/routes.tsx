import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { Layout } from './components/layout/layout';
import { Home } from './views/home/home';
import { ProductDetail } from './views/productDetail/productDetail';
import { Contact } from './views/contact/contact';

export const AppRouter = () => {
    return <>
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route element={<Home />} path={`/home`} />
                    {/* <Route element={<ProductList />} path={`/products`} /> */}
                    <Route element={<ProductDetail />} path={`/products/:id`} />
                    <Route element={<Contact />} path={`/contact`} />
                </Route>
                {/* REDIRECCIONAR A ALGUNA ROUTA POR DEFAULT */}
                <Route path="*" element={<Navigate to={`/home`} replace />} />
            </Routes>
        </Router>
    </>
};