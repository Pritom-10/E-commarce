import React from "react";
import './Shop.css'
import Hero from "../Component/Assets/Hero/Hero";
import Popular from "../Component/Popular/Popular";
import Offers from "../Component/Offers/Offers";
import NewCollections from "../Component/NewCollections/NewCollections";
import NewsLetter from "../Component/NewsLetter/NewsLetter";


const Shop=()=>{
    return(
        <div className="shop">
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
            
        </div> 
    )
}
export default Shop