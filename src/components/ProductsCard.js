import React from 'react';

export default function ProductsCard(props){
    return (
        <>
        <li className="main-card-container">
        <div className="card-image-container">
            <img src={props.product.url} alt=""/>
        </div>

        <div className="content-container">
            <h3 className="product-title">{props.product.title}</h3>
            <p className="product-description">{props.product.desc}</p>
            <div className="comment-tag">
                <button className="comment-link"><i className="fa fa-comment" aria-hidden="true"></i> {props.product.comments}</button>
                <p className="tag">{props.product.tag}</p>
            </div>
        </div>
        
        <div className="upvote-Container">
            <button className="upvote"><i className="fa fa-caret-up" aria-hidden="true"></i>{props.product.upvotes}</button>
        </div>
        </li>
        </>
    );

}