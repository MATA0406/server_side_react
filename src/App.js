import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

const movies = [
  {
    id : 1,
    title : "Matrix",
    poster : "https://ae01.alicdn.com/kf/HTB1RPP8QVXXXXX4aXXXq6xXFXXXP/Keanu.jpg_640x640.jpg"
  },
  {
    id : 2,
    title : "Full Metal Jacket",
    poster : "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1485423697/bvacgjpzkogqdbcbo506.jpg"
  },
  {
    id : 3,
    title : "Oldboy",
    poster : "http://vod.busan.go.kr/movie/poster/poster16.jpg"
  },
  {
    id : 4,
    title : "Star Wors",
    poster : "https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    )
  }
}

export default App;
