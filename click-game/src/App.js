import React, { Component } from 'react';
import './App.css';
import Images from "./components/Images";
import photo from "./pictures.json";

let myScore = 50;


class App extends Component {
  render () {
    return (
<div>
  <div className="jumbotron">
    <h1 className="text-center">The Click Game</h1>
    <h2 className="text-right">Your Score: {myScore} </h2>
  </div>
  <div className="row">
    <div className="col-md-6 col-md-offset-3">
          {photo.map(photos => {
            return (
              <Images
                image={photos.image}
              />
            )
          })}
      </div>
    </div>

</div>






  );
  }
}


export default App;
