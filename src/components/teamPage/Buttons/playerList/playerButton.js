import Button from "@restart/ui/Button";
import Modal from 'react-bootstrap/Modal';
import {useState} from "react";



const PlayerButton = (props) => {
  const [show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [number, setNumber] = useState([]);
  const [nuid, setNUID] = useState([]);
  const [coach, setCoach] = useState(0)

  const handleClose = () => {
    setShow(false);
    setName("");
    setNumber([]);
    setNUID([]);
    setCoach(0);
  };
  const handleShow = () => {setShow(true)};
  const handleCreate = () => {
    fetch("http://localhost:4000/api/teams/" + props.team.teamId + "/players", {
      method: 'POST',
      body: JSON.stringify({playerName: name, playerNumber: number, isCoach: coach, playerTeam: props.team, playernuid: nuid}),
      headers: {
        'content-type':'application/json'
      }
    }).then(response => response.json())
    .then(result => props.setPlayers([
      result,
        ...props.players
    ]));

    setName("");
    setNumber([]);
    setNUID([]);
    setCoach(0);

    setShow(false);
  }

  const handleChange = (event) => {
    console.log(coach);
    switch (event.target.id) {
      case 'player-name':
        setName(event.target.value);
        return;
      case 'player-number':
        setNumber(event.target.value)
        return;
      case 'player-nuid':
        setNUID(event.target.value)
        return;
      default:
        return;
    }
  }


  return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Player
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Player</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label htmlFor="player-name">Name: </label>
            <input value={name} type="text" className="form-control" id="player-name" onChange={handleChange} />
            <label htmlFor="player-number">Number: </label>
            <input value={number} type="number" className="form-control" id="player-number" onChange={handleChange}/>
            <label htmlFor="player-nuid">NUID: </label>
            <input value={nuid} type="number" className="form-control" id="player-nuid" onChange={handleChange}/>
            <label htmlFor="player-coach"  className="form-check-label">Is a Coach?: </label>
            <input type="checkbox" className="form-check-input" id="player-coach" value="" onClick={() => setCoach((coach + 1) % 2)}/>
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

export default PlayerButton;