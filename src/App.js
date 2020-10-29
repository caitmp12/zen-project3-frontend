import React from "react"
// import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from "react-router-dom"
import Home from "./components/Home"
import Nav from "./components/Nav"
import Favorites from "./components/Favorites"
import DrinkIndex from "./components/DrinkIndex"
import TreatsIndex from "./components/TreatsIndex"


function App() {

    const baseURL = 'http://localhost:4500' //URL used to pull data from backend
    //TREATS
    const [treats, setTreats] = React.useState([]) //Set treats
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

    //Empty Drink Function
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
  




  return (
    <div>
      <header>
        <h1>MERN Project</h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/" render={(rp) =>
            <Home />
          }
          />
          {/* <Favorites /> */}
          {/* <TreatsIndex treats={treats} /> */}
          <Route exact path="/drinks" render={ (rp) =>
            <DrinkIndex {...rp} drinks={drinks} selectDrink = {selectDrink} /> 
            }
          />
          <Route exact path="/drinks/:id" render={ (rp)=>
            <Show {...rp} item={selectDrink} />
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
          {/* New Drink Form */}
          {/* New Treat Form */}
          {/* Edit Drink Form */}
          {/* Edit Treat Form */}
        </Switch>
      </main>
      <Nav />
    </div>
  );
}

export default App;
