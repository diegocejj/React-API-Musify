import React from 'react';
import imagenFondo from '../assets/images/404-Error-Page.png';

function NotFound(){
    return(
        <div className="text-center content-img-not-found"> 
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 img-not-found" src={imagenFondo} alt=" Star Wars - Mandalorian "/>
        </div>
        
    )
}


export default NotFound;