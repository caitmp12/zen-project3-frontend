import React from "react";
// import logo from './logo.svg';

import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Show from "./components/Show";
import Favorites from "./components/Favorites";
import DrinkIndex from "./components/DrinkIndex";
import TreatsIndex from "./components/TreatsIndex";
import Form from "./components/Form";
///Testing
import Steven from "./components/stevenMovies";

function App() {
  const baseURL = "http://localhost:4500"; //URL used to pull data from backend
  //TREATS
  const [treats, setTreats] = React.useState([]); //Set treats
  //const [selectedTreat, setSelectedTreat] = React.useState

  const getTreats = () => {
    fetch(`${baseURL}/treats`)
      .then((response) => response.json())
      .then((data) => {
        setTreats(data);
      });
  };
  React.useEffect(() => {
    getTreats();
  }, []);

  //DRINKS
  const [drinks, setDrinks] = React.useState([]);

  const getDrinks = () => {
    fetch(`${baseURL}/drinks`)
      .then((response) => response.json())
      .then((data) => {
        setDrinks(data);
      });
  };
  React.useEffect(() => {
    getDrinks();
  }, []);

  //Empty Function
  const emptyItem = {
    name: "",
    img: "",
    ingredients: [],
    directions: "",
  };

  const [selectedItem, setSelectedItem] = React.useState(emptyItem);

  const selectItem = (aItem) => {
    setSelectedItem(aItem);
  };

  const handleCreate = (newItem, type) => {
    fetch(`${baseURL}/${type}s`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    }).then((response) => {
      if (type === "drink") {
        getDrinks();
      } else {
        getTreats();
      }
    });
  };

  const handleUpdate = (item, type) => {
    fetch(`${baseURL}/${type}s/${type._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((response) => {
      if (type === "drink") {
        getDrinks();
      } else {
        getTreats();
      }
    });
  };

  const deleteItem = (item, type) => {
    fetch(`${baseURL}/${type}s/${item._id}`, {
      method: "DELETE",
    }).then((response) => {
      if (type === "drink") {
        getDrinks();
      } else {
        getTreats();
      }
    });
  };

  const emptyRandom = {
    //movie: {},
    treat: {},
    drink: {},
  };

  const [selectedRandomList, setSelectedRandomList] = React.useState(
    emptyRandom
  );

  const selectRandomList = () => {
    setSelectedRandomList({
      treat: treats[Math.floor(Math.random() * treats.length)],
      drink: drinks[Math.floor(Math.random() * drinks.length)],
    });
  };

  //API MOVIE
  const [searchedMovies, setSearchedMovies] = React.useState([]);

  const getSearchMovies = (search, page) => {
    fetch(`${baseURL}/movies/search/${page}/${search}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchedMovies(data);
      });
  };
  React.useEffect(() => {
    getTreats();
  }, []);

  return (
    <div>
      <header>
        <h1>MERN Project</h1>
      </header>
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={(rp) => (
              <Home
                randomList={selectedRandomList}
                selectRandomList={selectRandomList}
                selectItem={selectItem}
              />
            )}
          />
          {/* <Favorites /> */}
          {/* <TreatsIndex treats={treats} /> */}

          <Route
            exact
            path="/drinks"
            render={(rp) => (
              <DrinkIndex {...rp} drinks={drinks} selectItem={selectItem} />
            )}
          />
          <Route
            exact
            path="/treats"
            render={(rp) => (
              <TreatsIndex {...rp} treats={treats} selectItem={selectItem} />
            )}
          />
          <Route
            exact
            path="/drinks/:id"
            render={(rp) => (
              <Show
                {...rp}
                item={selectedItem}
                selectItem={selectItem}
                type="drink"
                deleteItem={deleteItem}
              />
            )}
          />

          <Route
            exact
            path="/treats/:id"
            render={(rp) => (
              <Show
                {...rp}
                item={selectedItem}
                type="treat"
                deleteItem={deleteItem}
              />
            )}
          />
          {/* <Route exact path="/treats/:id" render={ (rp)=>
            <Show {...rp} item={selectDrink} />
            } 
          /> */}
          {/* Treat Index */}
          {/* Movie Show - Caitlin */}
          {/* Drink Show - Josh */}
          {/* Treat Show */}
          {/* Form */}
          <Route
            exact
            path="/create/drinks"
            render={(rp) => (
              <Form
                {...rp}
                label="create"
                item={emptyItem}
                handleSubmit={handleCreate}
                type="drink"
              />
            )}
          />
          <Route
            exact
            path="/create/treats"
            render={(rp) => (
              <Form
                {...rp}
                label="create"
                item={emptyItem}
                handleSubmit={handleCreate}
                type="treat"
              />
            )}
          />
          <Route
            exact
            path="/edit/drinks"
            render={(rp) => (
              <Form
                {...rp}
                label="update"
                item={selectedItem}
                handleSubmit={handleUpdate}
                type="drink"
              />
            )}
          />
          {/* New Drink Form */}
          {/* New Treat Form */}
          {/* Edit Drink Form */}
          {/* Edit Treat Form */}
          <Route
            exact
            path="/movies/search"
            render={(rp) => <Steven {...rp} searchedMovies={searchedMovies} />}
          />
        </Switch>
      </main>
      <Nav />
    </div>
  );
}

export default App;
