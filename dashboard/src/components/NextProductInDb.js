import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';

import imagenProduct1 from '../assets/images/allproducts/article10.jpg';
import imagenProduct2 from '../assets/images/allproducts/article11.jpg';
import imagenProduct3 from '../assets/images/allproducts/article12.jpg';
import imagenProduct4 from '../assets/images/allproducts/article13.jpg';
import imagenProduct5 from '../assets/images/allproducts/article14.jpg';
import imagenProduct6 from '../assets/images/allproducts/article15.jpg';
import imagenProduct7 from '../assets/images/allproducts/article16.jpg';
import imagenProduct8 from '../assets/images/allproducts/article17.jpg';
import imagenProduct9 from '../assets/images/allproducts/article18.jpg';
import imagenProduct10 from '../assets/images/allproducts/article19.jpg';
import imagenProduct11 from '../assets/images/allproducts/article69.jpg';
import imagenProduct12 from '../assets/images/allproducts/article70.jpg';
import imagenProduct13 from '../assets/images/allproducts/article71.jpg';
import imagenProduct14 from '../assets/images/allproducts/article72.jpg';
import imagenProduct15 from '../assets/images/allproducts/article73.jpg';

function ProductsInDb(){

    // const [products, setProducts] = useState([]);
  
    // useEffect(() =>{
    //   console.log("%cthe component is assembled","color:green");
    //   fetch("http://api.music-story.com/en/genre/1")
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data);
    //       setProducts(data.name)
    //     })
    //     .catch(error => console.error(error));
    // },[])

    // useEffect(() => {
    //   console.log("%cUpdate component","color : yellow");
    // },[genres]);

    // useEffect(() => {
    //   return () => console.log("%cDismount component", "color : red");
    // },[]);


    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">All products in Data Base</h5>
                </div> 
                <div className="card-body">
                
                    <button type="button" class="button-down">
                        <i class="fas fa-caret-down"></i>
                    </button>
                  
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenProduct1} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>
                    Keeping a beat interesting is one of the most important parts of production. Flow was designed to add ear candy to your beats. Stand out and add energy and excitement to your music just by dragging and dropping. This is one of the several samples made by Soundscrapes producers.
                    </p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
                </div>
            </div>
        </div>
    )
}

export default ProductsInDb;
