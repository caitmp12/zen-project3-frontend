import React from "react";
// import logo from './logo.svg';

import './App.css';
import { Route, Link, Switch } from "react-router-dom"
import Home from "./components/Home"
import Nav from "./components/Nav"
import Show from "./components/Show"
import Favorites from "./components/Favorites"
import DrinkIndex from "./components/DrinkIndex"
import TreatsIndex from "./components/TreatsIndex"
import Form from "./components/Form";
import Movies from "./components/MoviesIndex"
///Testing
import Steven from "./components/stevenMovies"



function App() {
  const baseURL = "http://localhost:4500"; //URL used to pull data from backend



  //TREATS
  const [treats, setTreats] = React.useState([]); //Set treats
  //const [selectedTreat, setSelectedTreat] = React.useState
  
    const getTreats = () => {
      fetch(`${baseURL}/treats`)
        .then(response => response.json())
        .then(data => {
          setTreats(data)
        })
    }
    React.useEffect(() => {
      getTreats()
    }, [])

//DRINKS
    const [drinks, setDrinks] = React.useState([])

    const getDrinks = () => {
      fetch(`${baseURL}/drinks`)
        .then(response => response.json())
        .then(data => {
          setDrinks(data)
        })
    }
    React.useEffect(() => {
      getDrinks()
    }, [])   
    
//Movies
    const [movies, setMovies] = React.useState([])
    
    const getMovies = () => {
      fetch(`${baseURL}/drinks`)
        .then(response => response.json())
        .then(data => {
          setMovies(data)
        })
    }
    React.useEffect(() => {
      getMovies()
    }, [])



  const emptyDrink = {
    name: "",
    img: "",
    ingredients: [],
    directions: ""
  }

  const [selectedDrink, setSelectedDrink] = React.useState(emptyDrink)

  const getDrinks = () => {
    fetch(`${baseURL}/drinks`)
      .then(response => response.json())
      .then(data => {
        setDrinks(data)
      })
  }
  React.useEffect(() => {
    getDrinks()
  }, [])

  const selectDrink = (drink) => {
    setSelectedDrink(drink)
  }




//Empty Function
    const emptyItem = {
      name: "",
      img: "",
      ingredients: [],
      directions: ""
    }

    const [selectedItem, setSelectedItem] = React.useState(emptyItem)

    const selectItem = (aItem) => {
      setSelectedItem(aItem)
    }
  

  const handleCreate = (newDrink) => {
    fetch(`${baseURL}/drinks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDrink),
    }).then((response) => {
      getDrinks();
    });
  };

  //RANDOMIZER

  const emptyRandom = {
    //movie: {},
    treat: {},
    drink: {},
  }

  const [selectedRandomList, setSelectedRandomList] = React.useState(emptyRandom)

  const selectRandomList = () => {
    setSelectedRandomList({treat: treats[Math.floor(Math.random() * treats.length)],
                          drink: drinks[Math.floor(Math.random() * drinks.length)]
    })
  }

  //API MOVIE 
  const [searchedMovies, setSearchedMovies] = React.useState([]);

  const getSearchMovies = (search, page) => {
    fetch(`${baseURL}/movies/search/${page}/${search}`)
      .then(response => response.json())
      .then(data => {
        setSearchedMovies(data)
      })
  }
  React.useEffect(() => {
    getTreats()
  }, [])


  return (
    <div>
      <header>
        <h1>MERN Project</h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/" render={(rp) => <Home randomList = {selectedRandomList} selectRandomList = {selectRandomList}  selectItem = {selectItem} />} />
          {/* <Favorites /> */}
          {/* <TreatsIndex treats={treats} /> */}

          <Route exact path="/drinks" render={(rp) =>
            <MoviesIndex {...rp} movies={movies} selectItem={selectItem} />
          }
          />

          <Route exact path="/drinks" render={ (rp) =>
            <DrinkIndex {...rp} drinks={drinks} selectItem = {selectItem} /> 
            }
          />
          <Route exact path="/treats" render={ (rp) =>
            <TreatsIndex {...rp} treats={treats} selectItem = {selectItem} /> 
            }
          />
          <Route exact path="/drinks/:id" render={ (rp)=>
            <Show {...rp} item={selectedItem} />
            } 
          />

          <Route exact path="/treats/:id" render={ (rp)=>
            <Show {...rp} item={selectedItem} />
            } 
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
            path="/create"
            render={(rp) => (
              <Form
                {...rp}
                label="create"
                drink={emptyItem}
                handleSubmit={handleCreate}
              />
            )}
          />
          {/* New Drink Form */}
          {/* New Treat Form */}
          {/* Edit Drink Form */}
          {/* Edit Treat Form */}
          <Route exact path="/movies/search" render={ (rp)=>
            <Steven {...rp} searchedMovies={searchedMovies} />
            } 
          />
        </Switch>
      </main>
      <Nav />
    </div>
  );
}

export default App;
