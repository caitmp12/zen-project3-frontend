import React from "react"
// import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from "react-router-dom"
import Home from "./components/Home"
import Nav from "./components/Nav"
import Show from "./components/Show"
import Favorites from "./components/Favorites"
import DrinkIndex from "./components/DrinkIndex"
import TreatsIndex from "./components/TreatsIndex"


function App() {

    const baseURL = 'http://localhost:4500' //URL used to pull data from backend
    //TREATS
    const [treats, setTreats] = React.useState([]) //Set treats
  
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
