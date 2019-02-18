import React, { Component } from 'react';
import PropType from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardLink, Col, Button } from 'reactstrap';
import './Movie.css';

// Class가 아닌 Dumb function
function Movie({title, poster, genres, synopsis, torrents, date_uploaded}){
    return(
        <Col sm="3">
            <Card>
                <div className="Movie">
                    <div className="Movie_Columns">
                        <MoviePoster poster={poster} alt={title}/>
                    </div>
                    <CardBody>
                        <div className="Movie_Columns">
                            <CardText>
                                <small className="text-muted">UpLoad Date: {date_uploaded}</small>
                            </CardText>
                            <CardTitle>
                                <h3>{title}</h3>
                            </CardTitle>
                            <div className="Movie_Genrs">
                                <b>Genre:</b>
                                {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                            </div>
                            <CardText className="Movie_Synopsis">
                            <b>Synopsis:</b> {synopsis}
                            </CardText>
                            { torrents.map((torrent, index) => <p><CardLink href={torrent.url}>Torrent DownLoad{index+1}</CardLink></p> )}
                            { torrents.map((torrent, index) => <Button size="lg" href={torrent.url} block>Torrent DownLoad{index+1}</Button> )}
                        </div>
                    </CardBody>
                </div>
            </Card>
        </Col>
    )
}

// Dumb function
// Life Cycle도 없고 그냥 function을 리턴할뿐(state도 없다.)
function MoviePoster({poster, alt}){
    return(
        <CardImg top width="100%" alt={alt} src={poster} className="Movie_Poster" />
    )
}

function MovieGenre({genre}){
    return(
        <CardSubtitle className="Movie_Genre">{genre}</CardSubtitle>
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