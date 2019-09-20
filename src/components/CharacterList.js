import React, { useEffect, useState } from "react";
import axios from "axios"
import CharacterCard from "./CharacterCard"
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
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
    <section className="character-list">
      {chars.map(item =>{
        return <CharacterCard key={item.id} name={item.name} status={item.status} species={item.species}> </CharacterCard>
      })}
    </section>
  );
}
