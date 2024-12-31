import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { products, product } from "../../models/module";

export const ProductDetail = () => {
    const routeParameter = useParams()
    const [product, setProject] = useState<product>()
    const navigate = useNavigate()
    
    function getProject():void{
        // Como no hay backend solo lo busca en la lista de <modules.ts>
        const productAux = products.find(product=>
            product.id == Number(routeParameter.id)
        )
        setProject(productAux)
    }

    function goBack(){
        navigate(`/home`)
    }

    useEffect(() => {
        getProject();
    }, []);

    return <>
        <div className="project__detail">
            <h1>{product?.title}</h1>
            {/* <h1>{project.title}</h1> */}
            <div><h1>{product?.info}</h1></div>
            <button onClick={goBack}>BACK</button>
        </div>
    </>
};
