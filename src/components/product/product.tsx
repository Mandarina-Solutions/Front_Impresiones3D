
import { useNavigate } from 'react-router-dom';
import './product.css'
import { product } from '../../models/module';

export const Product = ({product}:{product:product}) => {
    const navigate = useNavigate()
    function goToDetail(){
        navigate(`/products/${product.id}`)
    }
    return <>
        <div className="product">
            <img src={`${product.img}`} alt="IMG" />
            <div className="content">
                <h5>{`${product.title}`}</h5>
                <p className="info">{`${product.info}`}</p>
            </div>
            <div className="actions">
                <button className='mock' onClick={goToDetail}>Details</button>
                <button className='mock'>Buy</button>
            </div>
        </div>
    </>
};
