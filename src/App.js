import React, { useState } from "react";
import axios from "axios";

function App() {

  const [text, setText] = useState('')
  const [movie, setMovie] = useState([])
  
  const getMovie = (e) => {
    e.preventDefault()
    axios.get(`http://www.omdbapi.com/?s=${text}&apikey=a94ea35`)
    .then((response) => {
      console.log(response);
      setMovie(response.data.Search)
    })
  }

  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Movie APP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>

      </ul>
      <form className="d-flex" role="search" onSubmit={getMovie}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={(e) => setText(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  <div className="container my-3">
    <div className="row">
     {
      movie.map((value, index) => {
        return (
            <div className="card" style={{width: '18rem'}}>
                  <img src={value.Poster} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h3 className="card-title">{value.Year}</h3>
                    <h4 className="card-text">{value.Title}</h4>
                  </div>
            </div>
        )
      })
     }
    </div>
  </div>
</>
  );
}

export default App;
