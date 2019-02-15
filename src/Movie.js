import React, { Component } from 'react';
import PropType from 'prop-types';
import './Movie.css';

class Movie extends Component {

    // 부모에게 받는 파라미터의 타입을 알 수 있다.(return true & false)
    static proptype = {
        title : PropType.string.isRequired,
        poster : PropType.string.isRequired
    }

    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <MoviePoster poster={this.props.poster}/>
            </div>
        )
    }
}

class MoviePoster extends Component {

    // 부모에게 받는 파라미터의 타입을 알 수 있다.(return true & false)
    static proptype = {
        poster : PropType.string.isRequired
    }

    render() {
        return(
            <img alt="testImage" src={this.props.poster} />
        )
    }
}

export default Movie;