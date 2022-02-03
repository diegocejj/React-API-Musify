import React from 'react';

import imagenProduct1 from '../assets/images/Genres/Acoustic.jpg';
import imagenProduct2 from '../assets/images/Genres/Ambiance.jpg';
import imagenProduct3 from '../assets/images/Genres/Beats.jpg';
import imagenProduct4 from '../assets/images/Genres/Classical.jpg';
import imagenProduct5 from '../assets/images/Genres/Country.jpg';
import imagenProduct6 from '../assets/images/Genres/Dreamy.jpg';
import imagenProduct7 from '../assets/images/Genres/Eletronica.jpg';
import imagenProduct8 from '../assets/images/Genres/Euphoric.jpg';
import imagenProduct9 from '../assets/images/Genres/Footsteps.jpg';
import imagenProduct10 from '../assets/images/Genres/Funk.jpg';
import imagenProduct11 from '../assets/images/Genres/HipHop.jpg';
import imagenProduct12 from '../assets/images/Genres/Jazz.jpg';
import imagenProduct13 from '../assets/images/Genres/Pop.jpg';
import imagenProduct14 from '../assets/images/Genres/Props.jpg';
import imagenProduct15 from '../assets/images/Genres/RnB.jpg'; 
import imagenProduct17 from '../assets/images/Genres/SmallEmotions.jpg';
import imagenProduct18 from '../assets/images/Genres/Rock.jpg';

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



    // const products = [
	// 	{
	// 		"Title": "Parchís",
	// 		"Year": "1983",
	// 		"Poster": "https://m.media-amazon.com/images/M/MV5BYTgxNjg2MTAtYjhmYS00NjQwLTk1YTMtNmZmOTMyNTAwZWUwXkEyXkFqcGdeQXVyMTY5MDE5NA@@._V1_SX300.jpg"
	// 	},
	// 	{
	// 		"Title": "Brigada en acción",
	// 		"Year": "1977",
	// 		"Poster": "N/A"
	// 	},
	// ];

	const keyword = '';

	// // Credenciales de API
	// const apiKey = 'X'; // Intenta poner cualquier cosa antes para probar

    return(

<div className="container-fluid">

        <div className="mb-4 card-product-box">


            {/* ------------------------------- SEARCH BAR ---------------------------------- */}
            <div>
                <div className="row my-4">
                    <div className="col-12 col-md-6">
                        {/* Buscador */}
                        <form method="GET">
                            <div className="form-group">
                                <label htmlFor="">Search title:</label>
                                <input type="text" className="form-control" />
                            </div>
                            <button className="btn btn-info btn-search">Search</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2>Genres for word: {keyword}</h2>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------------------------------- */}


            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">All Genres</h5>
            </div> 

            <div className="card shadow mb-4 card-product-subbox">

                 
                    <article className="card-body card-product">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenProduct1} alt=" Star Wars - Mandalorian "/>
                        </div>
                        {/* <p>
                        Keeping a beat interesting is one of the most important parts of production. Flow was designed to add ear candy to your beats. Stand out and add energy and excitement to your music just by dragging and dropping. This is one of the several samples made by Soundscrapes producers.
                        </p> */}
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Acoustic</a>
                    </article>
                    
                    <article className="card-body card-product">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenProduct2} alt=" Star Wars - Mandalorian "/>
                        </div>
                        {/* <p>
                        Trap King is the latest installment from Soundscrapes inspired by modern Trap music. This edition includes drums, 808s, loops, MIDIs and voice samples from Duki that will be sure to help you create crazy beats! This kit is a must-have as it will quickly become your favorite go-to when making beats.
                        </p> */}
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Urban</a>
                    </article>
                        
                    <article className="card-body card-product">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenProduct3} alt=" Star Wars - Mandalorian "/>
                        </div>
                        {/* <p>
                        Have you ever listened to Explosions in the Sky and though 'How these guys make these crazy melodies with their guitars?' well, here our friends from Soundscrapes are sharing their secrets in this sample pack to reproduce the same kind of unique sound associated with Post Rock.
                        </p> */}
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Trap</a>
                    </article> 
                 
                    <article className="card-body card-product">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenProduct4} alt=" Star Wars - Mandalorian "/>
                        </div>
                        {/* <p>
                        Another iteration from Soundscrapes that will complement your Trap songs.
                        </p> */}
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ambient</a>
                    </article>
                        
                    <article className="card-body card-product">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenProduct5} alt=" Star Wars - Mandalorian "/>
                        </div>
                        {/* <p>'Smashed' is a Heavy Trap sample pack featuring everything you need to create explosive tracks.

                            This Smashed collection of 1,21 GB Trap fuelled drops, Construction Kits, melodies, beats & one shots provides some of the freshest, most intense sounds conceivable.

                            Expect the unexpected with Smashed, designed to push your production to new limits, this is one sample library not to be missed.

                            Smashed contains everything you need to create, intense, authentic and most importantly huge sounding Trap tracks.

                            A pool of 220+ blistering audio and sounds covering a range of options including song starters, full mix loops, Arp elements, Synth Loops, Basses, FX, Drum loops, and Percussion ensure whatever you need from the smallest sound to the largest stem is included in this pack.

                            As always, all sounds and loops are 100% royalty free and available for immediate download. Audio is supplied in HQ 24-Bit Wav
                        </p> */}
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Country</a>
                    </article>
                        
                    <article className="card-body card-product">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenProduct6} alt=" Star Wars - Mandalorian "/>
                        </div>
                        {/* <p>
                        This sample pack from Andhera Records is filled with 150+ sounds, one shots, and loops, created by our very own Andhera artists. With no signs of slowing down on releases during these crazy times we’re holding a contest open to all producers to submit an original track that utilizes parts of this sample pack (see guidelines below). The winning track will be signed to Andhera and released on our upcoming ‘Various Artists’ compilation this summer. This sample pack represents the style we all love and we can’t wait to hear what everyone makes with it!
                        </p> */}
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Small Emotions</a>
                    </article> 
              
                <div className="card-body card-product">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenProduct7} alt=" Star Wars - Mandalorian "/>
                    </div>
                    {/* <p>
                    We are extremely excited to bring you Hypeddit’s new sample pack in collaboration with @functionloops: Hypeddit #FUTURE POP Vol 1 is filled with massive construction kits, wav and midi files! This is a MUST HAVE!
                    </p>*/}
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Trap latino</a> 
                </div>
                    
                    
                <div className="card-body card-product">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenProduct10} alt=" Star Wars - Mandalorian "/>
                    </div>
                    {/* <p>
                    After a short break, Skifonix Sounds returns with a new freebie, now covering the popular drum & bass genre.

                    Drum & Bass Essentials is a production toolkit tailored for DnB or Liquid, Neurofunk and other subgenres. It features a set of three construction kits filled with 56 loops, 26 Massive presets, 16 MIDI loops, 13 kicks, 13 snares, 9 top loops.
                    </p>     */}
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Hip Hop</a>
                </div>
                    
                <div className="card-body card-product">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenProduct11} alt=" Star Wars - Mandalorian "/>
                    </div>
                    {/* <p>
                    'Trap Essentials Bundle' by Baltic Audio combines the first three packs of this bestselling series including 10 construction kits, melody loops, stems, one-shots, Serum presets and MIDI files to produce the finest Trap songs.
                    </p>     */}
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Gansta Rap</a>
                </div>
                
                <div className="card-body card-product">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenProduct12} alt=" Star Wars - Mandalorian "/>
                    </div>
                    {/* <p>
                    Trap Construction Kits brings you 5 kits of bangin’ Trap hits including everything from Synth and leads Drum Loops and Bass Loops to help you ensure that your next track is a hit!

                    Each audio file has been expertly cut and edited to loop perfectly, and has been recorded in the highest quality 24-bit rate to ensure absolutely top quality end results.
                    </p> */}
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Tropical</a>
                </div>
                
                <div className="card-body card-product">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenProduct13} alt=" Star Wars - Mandalorian "/>
                    </div>
                    {/* <p>
                    Asonic brings you "Dark Hip Hop" an array of unique, Dark Hip-Hop Construction Kits, elements, MIDI files and Synth Presets to assist you in all your creative Hip-Hop production.

                    The pack provides 5 Complete Construction Kits, WAV files, MIDI files, Serum & Nexus synth presets.
                    </p>     */}
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Pop</a>
                </div>

                <div className="card-body card-product">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenProduct18} alt=" Star Wars - Mandalorian "/>
                    </div>
                    {/* <p>
                    Asonic brings you "Dark Hip Hop" an array of unique, Dark Hip-Hop Construction Kits, elements, MIDI files and Synth Presets to assist you in all your creative Hip-Hop production.

                    The pack provides 5 Complete Construction Kits, WAV files, MIDI files, Serum & Nexus synth presets.
                    </p>     */}
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Rock</a>
                </div>
                
                
            </div>
        </div>
</div>
    )
}

export default ProductsInDb;
