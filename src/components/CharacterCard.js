import React from "react";
import styled from "styled-components"

const CardDiv = styled.div`
  display:flex;
  flex-flow:column ;
  justify-content:center;
  align-items:center;
  border:1px solid black;
`;

export default function CharacterCard(props) {
  return (
    <CardDiv key={props.id}>
      <h1>{props.name}</h1>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
    </CardDiv>
  )
}
