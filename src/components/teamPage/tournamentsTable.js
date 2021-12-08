import {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";

const TournamentsTable = (props) => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/teams/" + props.team + "/events")
    .then(response => response.json())
    .then(result => setEvents(result))
  }, [])

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
                        </tr>)
                    })
            }
          </tbody>
        </Table>
      </>
  )
};

export default TournamentsTable;