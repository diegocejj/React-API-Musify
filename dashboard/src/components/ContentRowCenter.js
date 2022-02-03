import React from 'react';
import ProductsInDb from './ProductsInDb';
import GenresInDb from './GenresInDb';
import NextProductInDb from './NextProductInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Products in DB -->*/}
            {/* <ProductsInDb /> */}
            <NextProductInDb/>
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <GenresInDb />

        </div>
    )
}

export default ContentRowCenter;