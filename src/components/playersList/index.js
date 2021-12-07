import React, {useEffect, useState} from "react";
// import {fetchAllPlayers} from "../services/main-services";
import "./index.css"

const APlayers = () => {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/a-players")
    .then(response => response.json())
    .then(result => setPlayers(result))
  }, [])

  return(
      <>
        <h1 >Roster:</h1>
        <ul>
          {
            players.map(player => {
              return(
                  <p>{player.name}</p>)
            })
          }
        </ul>
      </>
  )
};


export default APlayers