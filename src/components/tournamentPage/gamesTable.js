import {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

const GamesTable = (props) => {

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/teams/" + props.team.teamId + "/events/" + props.tournament.eventId + "/games")
    .then(response => response.json())
    .then(result => setGames(result))
  }, [props.team, props.tournament])



  return(
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Opponent</th>
              <th>NEU Score</th>
              <th>Opp Score</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
                games.map(game => {
                    return(<tr>
                        <td>{game.opponent}</td>
                        <td>{game.finalScoreNEU}</td>
                        <td>{game.finalScoreOpp}</td>
                        <td><Button onClick={() => { props.setGame(game) }}>Select</Button></td>
                    </tr>)
                })
            }
          </tbody>
        </Table>
      </>
  )
};

export default GamesTable;