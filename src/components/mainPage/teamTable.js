import Button from "@restart/ui/esm/Button";
import {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";

const TeamsTable = (props) => {

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/teams")
    .then(response => response.json())
    .then(result => setTeams(result))
  }, [])

  const handleClick = (team) => {
    return (
        () => {
            props.setTeam(team)
        }
    )
  };

  return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
                teams.map(team => {
                    return(
                        <tr>
                            <td>{team.teamName}</td>
                            <td><Button onClick={handleClick(team)}>Select</Button></td>
                        </tr>)
                })
            }
          </tbody>
        </Table>
      </>
  )
};

export default TeamsTable;