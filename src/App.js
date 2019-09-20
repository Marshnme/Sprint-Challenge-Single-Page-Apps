import React, {useState, useEffect} from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios"

export default function App() {

  const [chars , setChars] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response =>{
        console.log("response",response.data.results);
        setChars(response.data.results);
      })
  }, []);
  

  return (
    <main>
      <Route exact path="/" component={WelcomePage}></Route>
      <Route path="/chars" render={props => <Header {...props}></Header>}></Route>
      <Route path="/chars"  render={props => <SearchForm {...props} items={chars}></SearchForm>}></Route>
      <Route path="/chars" render={props => <CharacterList {...props} items={chars}></CharacterList>}></Route>
      
    </main>
  );
}
