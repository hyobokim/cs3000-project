import { Button } from "react-bootstrap";
import {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import CreateButton from "./Buttons/tournamentsList/createButton";
import DeleteButton from "./Buttons/tournamentsList/deleteButton";

const TournamentsTable = (props) => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    console.log(props.team.teamId);
    fetch("http://localhost:4000/api/teams/" + props.team.teamId + "/events")
    .then(response => response.json())
    .then(result => setEvents(result))
  }, [props.team])

  return(
      <>
        <CreateButton team={props.team} setEvents={setEvents} events={events}/>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Tournament Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {   events
                    .filter(event => event.eventType === "Tournament")
                    .map(tournament => {
                        return(<tr>
                            <td>{tournament.eventName}</td>
                          <td>
                            <td><Button onClick={() => { props.setTournament(tournament) }}>Select</Button></td>
                            <td><DeleteButton team={props.team} events={events} event={tournament} setEvents={setEvents}/></td>
                          </td>
                        </tr>)
                    })
            }
          </tbody>
        </Table>
      </>
  )
};

export default TournamentsTable;