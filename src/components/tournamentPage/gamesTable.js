import {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import CreateButton from "../teamPage/Buttons/gamesList/createButton";
import DeleteButton from "../teamPage/Buttons/gamesList/deleteButton";

const GamesTable = (props) => {

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/teams/" + props.team.teamId + "/events/" + props.tournament.eventId + "/games")
    .then(response => response.json())
    .then(result => setGames(result))
  }, [props.team, props.tournament])



  return(
      <>
        <CreateButton games={games} team={props.team} tournament={props.tournament} setGames={setGames}/>
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
                        <td>
                          <td><Button onClick={() => { props.setGame(game) }}>Select</Button></td>
                          <td><DeleteButton setGames={setGames} games={games} game={game} team={props.team} tournament={props.tournament}/></td>
                        </td>
                    </tr>)
                })
            }
          </tbody>
        </Table>
      </>
  )
};

export default GamesTable;