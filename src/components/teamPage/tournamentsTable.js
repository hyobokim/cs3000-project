import {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";

const TournamentsTable = (props) => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    console.log(props.team.teamId);
    fetch("http://localhost:4000/api/teams/" + props.team.teamId + "/events")
    .then(response => response.json())
    .then(result => setEvents(result))
  }, [props.team])

  const selectTournament = (selectedGame) => {
    return () => {
      props.setTournament(selectedGame);
    }
  }

  return(
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Tournament Name</th>
            </tr>
          </thead>
          <tbody>
            {   events
                    .filter(event => event.eventType === "Tournament")
                    .map(tournament => {
                        return(<tr>
                            <td>{tournament.eventName}</td>
                          <td><button onClick={selectTournament(tournament)}>Select</button></td>
                        </tr>)
                    })
            }
          </tbody>
        </Table>
      </>
  )
};

export default TournamentsTable;