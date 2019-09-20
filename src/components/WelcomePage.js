import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <div className="button-home">
          <Link className="center-b" to="/chars">Characters</Link>
        </div>
        
      </header>
    </section>
  );
}
