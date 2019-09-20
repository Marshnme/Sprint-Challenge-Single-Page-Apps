import React, { useEffect, useState } from "react";


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
