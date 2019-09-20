import React, { useEffect, useState } from "react";
import axios from "axios"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CharacterCard from "./CharacterCard"
export default function CharacterList(props) {
  
  return (
    
    <section className="character-list">
      
      {props.items.map(item =>{
        return <CharacterCard key={item.id} name={item.name} status={item.status} species={item.species}> </CharacterCard>
      })}
    </section>
  );
}
