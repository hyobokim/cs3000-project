import {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";

const PlayersTable = (props) => {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/teams/" + props.team + "/players")
    .then(response => response.json())
    .then(result => setPlayers(result))
  }, [props.team])

  return(
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {
                players.map(player => {
                    return(<tr>
                        <td>{player.name}</td>
                        <td>{player.number}</td>
                    </tr>)
                })
            }
          </tbody>
        </Table>
      </>
  )
};

export default PlayersTable;