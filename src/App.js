import React from "react"
// import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from "react-router-dom"
import Home from "./components/Home"
import Nav from "./components/Nav"
import Favorites from "./components/Favorites"

function App() {
  return (
    <div>
      <header>
        <h1>MERN Project</h1>
      </header>
      <main>
        {/* <Switch> */}
          {/* <Home /> */}
          <Favorites />
          {/* Movie Index - Josh */}
          {/* Drink Index - Caitlin */}
          {/* Treat Index */}
          {/* Movie Show - Caitlin */}
          {/* Drink Show - Josh */}
          {/* Treat Show */}
          {/* New Drink Form */}
          {/* New Treat Form */}
          {/* Edit Drink Form */}
          {/* Edit Treat Form */}
        {/* </Switch> */}
      </main>
      <Nav />
    </div>
  );
}

export default App;
