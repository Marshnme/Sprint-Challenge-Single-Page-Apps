import React, { useState,useEffect } from "react";
import CharacterList from "./CharacterList"
export default function SearchForm(props) {
  console.log(props.items.name);
        const [search, setSearch] = useState("");
        const [result, setResult] = useState([]);

       const name=  props.items.map(item =>{
          return item.name
        });

        useEffect(()=>{
          const results = name.filter(item =>
            item.toLowerCase().includes(search)
          );
          
          setResult(results)
        },[search]);

        const handleChange = e => {
          setSearch(e.target.value);
        }
  return (
      
    <section className="search-form">
      <form>
        <label for="name">Search:</label>
        <input id="name" type="text" placeholder="Search" value={search} onChange={handleChange}></input>
      </form>
      <div>
        <ul>
          {result.map(items=>
            <li>{items}</li>)}
        </ul>
      </div>
      
    </section>
  );
}
