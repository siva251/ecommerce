import React from "react";

import './Collectionitem.style.scss';

const Collectionitem =({id,name,price,imageUrl})=>{
    return(
    <div className="collection-item">
        <div className="image" style={{background : `url(${imageUrl})`}}/>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        
    </div>);
}

export default Collectionitem;