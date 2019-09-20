import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function App() {
  return (
    
    <main>
      <Route exact path="/" component={WelcomePage}></Route>
      <Route path="/chars" render={props => <Header {...props}></Header>}></Route>
      <Route path="/chars" render={props => <CharacterList {...props}></CharacterList>}></Route>
      
    </main>
  );
}
