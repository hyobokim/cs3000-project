import {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import CreateButton from "../teamPage/Buttons/playerPoints/createButton";
import UpdateButton from "../teamPage/Buttons/playerPoints/updateButton";

const StatsTable = (props) => {

  const [test, setTest] = useState(false);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/teams/" + props.team.teamId + "/events/" + props.tournament.eventId + 
        "/games/" + props.game.gameId + "/points/" + props.point.pointId + "/stats")
    .then(response => response.json())
    .then(result => setStats(result))
  }, [props.team, props.tournament, props.game, props.point.pointId, test])



  return(
      <>
        <CreateButton team={props.team} tournament={props.tournament} game={props.game} point={props.point} stats={stats} setStats={setStats}/>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Player</th>
              <th>Point</th>
              <th>Assist</th>
              <th>Blocks</th>
              <th>Completions</th>
              <th>Catches</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
                stats.map(stat => {
                    console.log(stat)
                    return(<tr>
                        <td>{stat.name}</td>
                        <td>{stat.pointScored}</td>
                        <td>{stat.assist}</td>
                        <td>{stat.blocks}</td>
                        <td>{stat.completions}</td>
                        <td>{stat.catches}</td>
                        <td><UpdateButton test={test} setTest={setTest} team={props.team} tournament={props.tournament} game={props.game} setTeam={props.setTeam}
                                          point={props.point} stat={stat} stats={stats} setStats={setStats} name={stat.name}/></td>
                    </tr>)
                })
            }
          </tbody>
        </Table>
      </>
  )
};

export default StatsTable;