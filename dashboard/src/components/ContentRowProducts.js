import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Total Products',
    color: 'primary', 
    cuantity: 15,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:' Total category', 
    color:'success', 
    cuantity: '16',
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Total Producers' ,
    color:'warning',
    cuantity:'6',
    icon:'fa-user-check'
}
 

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowProducts(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowProducts;