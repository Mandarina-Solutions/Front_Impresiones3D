import { Product } from "../../components/product/product";
import { products } from "../../models/module";
import './home.css';

export const Home = () => {

    const listProducts = products.map((product)=>
        <Product product={product}></Product>
    )

    return <>
        <div className="products">
            {listProducts}
        </div>
    </>
};
