import React from 'react';

import ProductsCard from './ProductsCard.js'
import productsData from '../data/products.js'
import UpcomingProductsCards from './UpcomingProductsCards'
import upcomingProdsData from '../data/upcomingProdsData.js'
import HiringNowCards from './HiringNowCards'
import companies from '../data/companies.js'


// Products
function Products(){
    
 return (
    <>
    <h2 className="products-header">What's new!</h2> 
    <ul>
        {productsData.map((product,i) => <ProductsCard key={i} product={product} />)}
    </ul>
    </>
 )
}

// Upcoming Products
function UpcomingProducts () {
    return(
    <>
    <h2 className="upcoming-prods-header">Upcoming Products <span>Powered by Ship</span></h2>    
    <ul>
        {upcomingProdsData.map((product,i)=> <UpcomingProductsCards key={i} product={product}/>)}
    </ul>
    <button className="view">VIEW ALL</button>
    </>
    )
}

// Jobs
function HiringNow () {
    return(
    <>
    <h2 className="hiring-now-header">Hiring now</h2>    
    <ul>
        {companies.map((company,i)=> <HiringNowCards key={i} product={company}/>)}
    </ul>
    <button className="view">VIEW ALL JOBS</button>
    </>
    )
}


// Hero render
function Hero (){
    return (
    <>
    <div className="hero-container">
        <div>
            <Products/>
        </div>
        <div className="sidebar-container">         
            <UpcomingProducts/>
            <HiringNow/>
        </div>
    </div>
    </>
)    
}

export default Hero