import React, { Component } from 'react';
import { Jumbotron, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Spinner } from 'reactstrap';
import './App.css';
import Movie from './Movie.js';



class App extends Component {

  // Life Cycle
  // Render: componentWillMount() -> render() -> ComponentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> component

  state = {

  }

  // 생성
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  componentWillMount(){
    console.log('will mount');
  }
  
  componentDidMount(){
    console.log('did mount');

    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
        torrents={movie.torrents}
        date_uploaded={movie.date_uploaded}
      />
    })

    return movies;
  }

  // 비동기 function
  _getMovies = async () => {
    const movies = await this._callApi(); // await은 성공이 아닌 결과가 끝난 뒤 실행
    this.setState({
      movies
    })
  }

  _callApi = () => {
     // AJAX
     return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
     .then(response => response.json())
     .then(json => json.data.movies) // 화살표 fucntion은 return을 작성할 필요가 없다.(자동!)
     .catch(err => console.log(err))
  }

  

  // Toggle 이벤트
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/http://MATA0406.github.io/server_side_react" className="mr-auto"><h2><img src="./favicon.ico"></img> Movie App</h2></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="https://academy.nomadcoders.co/courses/category/KR">Nomad Coders</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/MATA0406/server_side_react">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Jumbotron>
          <div className={movies ? "App" : "App--loading"}>
            {this.state.movies ? this._renderMovies() : <h1>Loading... </h1>}<Spinner color="danger" />
          </div>
        </Jumbotron>
      </div>
    )
  }
}

export default App;

// state를 변경하는 방법 setState() - state를 변경하면 render가 발생한다.
// this.setState({
//   greeting : 'Hello again!'
// })


// 00 시간 후에 00 작업을 수행시킨다.
// setTimeout(() => {
//   this.setState({
//     movies : [
//       {
//         id : 1,
//         title : "Poket Monster1",
//         poster : "http://image.yes24.com/goods/2125649/L"
//       },
//       {
//         id : 2,
//         title : "Poket Monster2",
//         poster : "http://vignette3.wikia.nocookie.net/pokemon/images/e/e2/2%EA%B8%B0_%EA%B7%B9%EC%9E%A5%ED%8C%90_%ED%8F%AC%EC%8A%A4%ED%84%B0_2.jpg/revision/latest?cb=20150812225936&path-prefix=ko"
//       },
//       {
//         id : 3,
//         title : "Poket Monster3",
//         poster : "https://t1.daumcdn.net/cfile/tistory/999C40405C316B5810"
//       },
//       {
//         id : 4,
//         title : "Poket Monster4",
//         poster : "https://vignette.wikia.nocookie.net/pokemon/images/9/99/8%EA%B8%B0_%EA%B7%B9%EC%9E%A5%ED%8C%90_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/revision/latest?cb=20101022180227&path-prefix=ko"
//       },
//       {
//         title : "Poket Monster5",
//         poster : "https://lh3.googleusercontent.com/proxy/OIHWkhCQOgzGTY-6u-5ugUi6y1hf4o2Lb-dS4duG_aiXe68-0_Lv4hm8Q3f5T5HI7ldCeIigUeCv9V0A4I5CoeDtqf1x50zOpIcFM4mgzbECMQk=w200-h300"
//       }
//     ]
//   })
// }, 5000)
