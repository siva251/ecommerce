import React from "react";

import './CollectionPreview.style.scss';
import Collectionitem from "../Collectionitem/Collectionitem.component";

const CollectionPreview = ({title, items}) =>{
    return(
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items.filter((item,index)=> index < 4 ).map(({id, ...otherItemProps})=>(
                    <Collectionitem key={id} {...otherItemProps}/>
                ))}
            </div>
        </div>
    );
}

export default CollectionPreview;