import {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";

const CoachesTable = (props) => {

  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/teams/" + props.team.teamId + "/coaches")
    .then(response => response.json())
    .then(result => setCoaches(result))
  }, [props.team.teamId])

  return(
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Coach Name</th>
              <th>Experience</th>
            </tr>
          </thead>
          <tbody>
            {
                coaches.map(coach => {
                    return(<tr>
                        <td>{coach.name}</td>
                        <td>{coach.experience}</td>
                    </tr>)
                })
            }
          </tbody>
        </Table>
      </>
  )
};

export default CoachesTable;