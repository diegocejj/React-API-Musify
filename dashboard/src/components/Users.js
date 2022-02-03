import React from 'react';

import imagenUser1 from '../assets/images/producer-img/1_producerUser.jpg';
import imagenUser2 from '../assets/images/producer-img/2_producerUser.jpg';
import imagenUser3 from '../assets/images/producer-img/3_producerUser.jpg';
import imagenUser4 from '../assets/images/producer-img/4_producerUser.jpg';
import imagenUser5 from '../assets/images/producer-img/5_producerUser.jpg';
import imagenUser6 from '../assets/images/producer-img/6_producerUser.jpg';
import imagenUser7 from '../assets/images/producer-img/7_producerUser.jpg';

function Users(){
    return(
        <React.Fragment>
            
        <div className="card-user-box">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">All registered users</h5>
            </div> 
            
            <div className="card-user-subbox">
                <div className="card-user">                  
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 img-user" src={imagenUser1} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>Jean W. Gibson</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View profile</a>
                </div>

                <div className="card-user">                  
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 img-user" src={imagenUser2} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>Jim L. Bremer</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View profile</a>
                </div>

                <div className="card-user">                  
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 img-user" src={imagenUser3} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>Sam K. Preston</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View profile</a>
                </div>

                <div className="card-user">                  
                    <div className="text-center ">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 img-user" src={imagenUser4} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>Eric D. Franklin</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View profile</a>
                </div>

                <div className="card-user">                  
                    <div className="text-center ">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 img-user" src={imagenUser5} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>Rita S. Richter</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View profile</a>
                </div>

                <div className="card-user">                  
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 img-user" src={imagenUser6} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>Eugene M. Hansen</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View profile</a>
                </div>
            </div>
        </div>

        </React.Fragment>
    )
}
export default Users;