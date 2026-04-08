import React, { useContext } from "react";
import './Product.css'
import {ShopContext} from '../Context/ShopContext'
import {useParams} from 'react-router-dom'
import Breadcrum from "../Component/Breadcrum/Breadcrum";
import ProductDisplay from "../Component/ProductDisplay/ProductDisplay";
import Description from "../Component/Description/Description";
import RelatedProducts from "../Component/RelatedProducts/RelatedProducts";

const Product=()=>{
    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const product = all_product.find((e)=> e.id===Number(productId))
    return(
        <div className="product">
            <Breadcrum product={product}/>
            <ProductDisplay product={product} />
            <Description/>
            <RelatedProducts/>
        </div> 
    )
}
export default Product