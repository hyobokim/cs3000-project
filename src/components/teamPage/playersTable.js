import {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import PlayerButton from "./Buttons/playerList/playerButton";
import DeleteButton from "./Buttons/playerList/deleteButton";

const PlayersTable = (props) => {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/teams/" + props.team.teamId + "/players")
    .then(response => response.json())
    .then(result => setPlayers(result))
  }, [props.team])



  return(
      <>
        <PlayerButton team={props.team} setPlayers={setPlayers} players={players}/>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
                players.map(player => {
                    return(<tr>
                        <td>{player.name}</td>
                        <td>{player.number}</td>
                      <td><DeleteButton team={props.team} setPlayers={setPlayers} players={players} player={player}/></td>
                    </tr>)
                })
            }
          </tbody>
        </Table>
      </>
  )
};

export default PlayersTable;