import {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

const PointsTable = (props) => {

  const [points, setPoints] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/teams/" + props.team.teamId + "/events/" + props.tournament.eventId + 
        "/games/" + props.game.gameId + "/points")
    .then(response => response.json())
    .then(result => setPoints(result))
  }, [props.team, props.tournament, props.game])



  return(
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>OLine</th>
              <th>Scored?</th>
              <th>Score</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
                points.map(point => {
                    return(<tr>
                        <td>{(point.oLine === 1) ? "Yes" : "No"}</td>
                        <td>{(point.pointScored === 1) ? "Yes" : "No"}</td>
                        <td>{point.hScore}-{point.aScore}</td>
                        <td><Button onClick={() => { props.setPoint(point) }}>Select</Button></td>
                    </tr>)
                })
            }
          </tbody>
        </Table>
      </>
  )
};

export default PointsTable;