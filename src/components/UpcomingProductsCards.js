import React from 'react';

export default function UpcomingProductsCards (props){
    return (
    <>              
        <li className="upcoming-products-container">

        <div className="upcoming-prods-content">
            <h3 className="upcoming-prods-title">{props.product.title}</h3>
            <p className="upcoming-prods-description">{props.product.desc}</p>
            <p className="upcoming-prods-follow">+ FOLLOW ({props.product.followers})</p>
        </div>

        <div className="upcoming-prods-image">
            <img src={props.product.img} alt=""/>
        </div>
        </li>
    </>
    )
}