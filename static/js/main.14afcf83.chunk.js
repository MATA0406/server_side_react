(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(21)},16:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),s=n.n(r),i=(n(16),n(1)),c=n.n(i),l=n(4),u=n(5),m=n(6),v=n(8),p=n(7),d=n(9);n(19),n(20);function f(e){var t=e.poster,n=e.alt;return o.a.createElement("img",{alt:n,src:t,className:"Movie_Poster"})}function h(e){var t=e.genre;return o.a.createElement("span",{className:"Movie_Genre"},t)}var g=function(e){var t=e.title,n=e.poster,a=e.genres,r=e.synopsis;return o.a.createElement("div",{className:"Movie"},o.a.createElement("div",{className:"Movie_Columns"},o.a.createElement(f,{poster:n,alt:t})),o.a.createElement("div",{className:"Movie_Columns"},o.a.createElement("h1",null,t),o.a.createElement("div",{className:"Movie_Genrs"},a.map(function(e,t){return o.a.createElement(h,{genre:e,key:t})})),o.a.createElement("p",{className:"Movie_Synopsis"},r)))},_=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},n._renderMovies=function(){return n.state.movies.map(function(e){return o.a.createElement(g,{title:e.title_english,poster:e.medium_cover_image,key:e.id,genres:e.genres,synopsis:e.synopsis})})},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e,this)})),n._callApi=function(){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){console.log("will mount")}},{key:"componentDidMount",value:function(){console.log("did mount"),this._getMovies()}},{key:"render",value:function(){var e=this.state.movies;return o.a.createElement("div",{className:e?"App":"App--loading"},this.state.movies?this._renderMovies():"Loading")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.14afcf83.chunk.js.map