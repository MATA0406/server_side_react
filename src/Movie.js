import React, { Component } from 'react';
import PropType from 'prop-types';
import './Movie.css';

// Class가 아닌 Dumb function
function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie_Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie_Columns">
                <h1>{title}</h1>
                <div className="Movie_Genrs">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie_Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

// Dumb function
// Life Cycle도 없고 그냥 function을 리턴할뿐(state도 없다.)
function MoviePoster({poster, alt}){
    return(
        <img alt={alt} src={poster} className="Movie_Poster" />
    )
}

function MovieGenre({genre}){
    return(
        <span className="Movie_Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title : PropType.string.isRequired,
    poster : PropType.string.isRequired,
    genres : PropType.array.isRequired,
    synopsis : PropType.string.isRequired
}

MoviePoster.propTypes = {
    poster : PropType.string.isRequired,
    alt : PropType.string.isRequired
}

MovieGenre.propTypes = {
    genre : PropType.string.isRequired
}

export default Movie;