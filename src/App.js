import React, { Component } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route
            className="navbar"
            exact
            path="/"
            component={() => (
              <Home
                url={`https://saurav.tech/NewsAPI/top-headlines/category/general/in.json`}
              />
            )}
          />
          <Route
            className="navbar"
            path="/health"
            component={() => (
              <Home
                url={`https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`}
              />
            )}
          />
          <Route
            className="navbar"
            path="/sports"
            component={() => (
              <Home
                url={`https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json`}
              />
            )}
          />
          <Route
            className="navbar"
            path="/entertain"
            component={() => (
              <Home
                url={`https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json`}
              />
            )}
          />
          <Route
            className="navbar"
            path="/tech"
            component={() => (
              <Home
                url={`https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json`}
              />
            )}
          />
          <Route
            className="navbar"
            path="/science"
            component={() => (
              <Home
                url={`https://saurav.tech/NewsAPI/top-headlines/category/science/in.json`}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
