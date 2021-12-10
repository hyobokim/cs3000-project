import Button from "@restart/ui/Button";
import Modal from 'react-bootstrap/Modal';
import {useEffect, useState} from "react";



const CreateButton = (props) => {
  const [show, setShow] = useState(false);

  const [player, setPlayer] = useState([]);
  const [points, setPoints] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [completions, setCompletions] = useState([]);
  const [catches, setCatches] = useState([]);
  const [assists, setAssists] = useState([]);

  const [players, setPlayers] = useState([]);

  useEffect(() => {
        fetch('http://localhost:4000/api/teams/' + props.team.teamId + '/players')
        .then(res => res.json())
        .then(result => setPlayers(result))
  },
      [props.team, props.tournament, props.game, props.point]

  )

  const handleClose = () => {
    setShow(false);
    setPoints([]);
    setBlocks([]);
    setCompletions([]);
    setCatches([]);
    setAssists([]);
    setPlayer([]);
  };
  const handleShow = () => {setShow(true)};

  const handleCreate = () => {
    console.log(players);
    fetch("http://localhost:4000/api/teams/" + props.team.teamId + "/events/" + props.tournament.eventId
        + "/games/" + props.game.gameId + "/points/" + props.point.pointId + "/stats", {
      method: 'POST',
      body: JSON.stringify({playerName: player.name, player: player.nuID , points: points, blocks: blocks, completions: completions, catches: catches, assists: assists}),
      headers: {
        'content-type':'application/json'
      }
    }).then(response => response.json())
    .then(result => props.setStats([
          result,
          ...props.stats
    ]
    ));

    setPoints([]);
    setBlocks([]);
    setCompletions([]);
    setCatches([]);
    setAssists([]);
    setPlayer([]);

    setShow(false);
  }

  const handleChange = (event) => {
    switch (event.target.id) {
      case 'points':
        setPoints(event.target.value);
        return;
      case 'blocks':
        setBlocks(event.target.value);
        return;
      case 'completions':
        setCompletions(event.target.value);
        return;
      case 'catches':
        setCatches(event.target.value);
        return;
      case 'assists':
        setAssists(event.target.value);
        return;
      case 'players':
        const parsedPlayer = JSON.parse(event.target.value);
        setPlayer(parsedPlayer);
      default:
        return;
    }
  }

  const listOfPlayers = () => {
    return(
        <select onClick={handleChange} id="players" className="form-select" aria-label="Select player">
          <option defaultValue disabled>Select Player</option>
          {
            players.map(player => {return <option value={JSON.stringify(player)}>{player.name}</option> })
          }
        </select>
    )
  }

  return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Stats
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Point</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            {listOfPlayers()}

            <label htmlFor="points">Points Scored: </label>
            <input value={points} type="number" className="form-control" id="points" onChange={handleChange}/>

            <label htmlFor="blocks"># of Blocks: </label>
            <input value={blocks} type="number" className="form-control" id="blocks" onChange={handleChange}/>

            <label htmlFor="completions"># of Completions: </label>
            <input value={completions} type="number" className="form-control" id="completions" onChange={handleChange}/>

            <label htmlFor="catches"># of Catches: </label>
            <input value={catches} type="number" className="form-control" id="catches" onChange={handleChange}/>

            <label htmlFor="assists"># of Assists: </label>
            <input value={assists} type="number" className="form-control" id="assists" onChange={handleChange}/>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCreate}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  );
}

export default CreateButton;