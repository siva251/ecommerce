import React from "react";
import SHOP_DATA from './Shopdata'
import CollectionPreview from "../Collectionpreview/CollectionPreview.component";

class Shoppage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collection : SHOP_DATA
        }
    }

    render(){
        const {collection} = this.state
        return(
            <div className="shop-page">
                {collection.map(({id, ...otherCollectionProps})=>(
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))}
            </div>
        );
    }
}

export default Shoppage;