import {useState, useEffect} from "react";

const Balks = () => {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/balks")
    .then(response => response.json())
    .then(result => setPlayers(result))
  }, [])

  return(
      <>
        <h1 >Roster:</h1>
        <ul>
          {
            players.map(player => {
              return(<p>{player.name}</p>)
            })
          }
        </ul>
      </>
  )
};

export default Balks