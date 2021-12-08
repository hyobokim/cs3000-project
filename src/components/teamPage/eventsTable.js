import {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";

const EventsTable = (props) => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/teams/" + props.team.teamId + "/events")
    .then(response => response.json())
    .then(result => setEvents(result))
  }, [props.team])

  return(
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Event Name</th>
            </tr>
          </thead>
          <tbody>
            {   events
                    .filter(event => event.eventType !== "Tournament")
                    .map(event => {
                        return(<tr>
                            <td>{event.eventName}</td>
                        </tr>)
                    })
            }
          </tbody>
        </Table>
      </>
  )
};

export default EventsTable;