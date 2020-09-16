import React from 'react';

export default function HiringNowCards (props){
    return (
    <>              
        <li className="hiring-now-container">

        <div className="hiring-now-content">
            <h3 className="hiring-now-name">{props.product.name}</h3>
            <p className="hiring-now-role">{props.product.role}</p>
            <p className="hiring-now-location">{props.product.location}</p>
        </div>

        <div className="hiring-now-image">
            <img src={props.product.img} alt=""/>
        </div>
        </li>
    </>
    )
}