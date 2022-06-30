import React from "react";


const Card = (movie) => {
    console.log(movie.info);
    let img_path = "https://image.tmdb.org/t/p/w500";
    return (
        <>
            <div className="movie">
                <img src={img_path + movie.info.poster_path} alt="" className="poster" style={{ width: "200px", height: "250px" }} />
                <div className="movie-details">
                    <div className="box">
                        <h6 className="title">{movie.info.title}</h6>
                        <p className="reating">{movie.info.vote_average}</p>
                    </div>
                    <div className="overview">
                        <h3>{movie.info.overview}</h3>
                        {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, labore. */}
                    </div>
                </div>
                {/* <div className="watch">
            <button>Watch</button>
            </div> */}
            </div>
            
        </>
    )
}
export default Card;