import React from "react"; 
import { useState, useEffect } from "react";

function GenresInDb() {

    // const [genres, setGenres] = useState([]);
  
    // useEffect(() =>{
    //   console.log("%cthe component is assembled","color:green");
    //   fetch("http://api.music-story.com/en/genre/1")
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data);
    //       setGenres(data.name)
    //     })
    //     .catch(error => console.error(error));
    // },[])

    // useEffect(() => {
    //   console.log("%cUpdate component","color : yellow");
    // },[genres]);

    // useEffect(() => {
    //   return () => console.log("%cDismount component", "color : red");
    // },[]);

    return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Featured genres
          </h5>
        </div>
        <div className="card-body">
          <div className="row">

            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body genres-list">Rock</div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body genres-list">Trap</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body genres-list">Techouse</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body genres-list">Tropical</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body genres-list">Hip Hop</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body genres-list">Ambient</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body genres-list">Metal</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body genres-list">Experimental rock</div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body genres-list">Southern rap</div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body genres-list">Hip Hop Hardcore</div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body genres-list">Gansta rap</div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body genres-list">Crunk</div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body genres-list">Trap latino</div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body genres-list">Beats</div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body genres-list">Small emotions</div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body genres-list">Pop</div>
              </div>
            </div>




            
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
