import Button from "@restart/ui/Button";
import Modal from 'react-bootstrap/Modal';
import {useState} from "react";



const CreateButton = (props) => {
  const [show, setShow] = useState(false);

  const [date, setDate] = useState([]);
  const [opponent, setOpponent] = useState([]);

  const handleClose = () => {
    setShow(false);
    setDate([]);
    setOpponent([]);
  };
  const handleShow = () => {setShow(true)};
  const handleCreate = () => {
    console.log(date);
    fetch("http://localhost:4000/api/teams/" + props.team.teamId + "/events/" + props.tournament.eventId + "/games", {
      method: 'POST',
      body: JSON.stringify({startDate: '2021-10-20 10:00:00', opponent: opponent}),
      headers: {
        'content-type':'application/json'
      }
    }).then(response => response.json())
    .then(result => props.setGames([
      result,
      ...props.games
    ]));

    setOpponent([]);
    setDate([]);

    setShow(false);
  }

  const handleChange = (event) => {
    switch (event.target.id) {
      case 'event-date':
        setDate(event.target.value);
        return;
      case 'event-opponent':
        setOpponent(event.target.value)
        return;
      default:
        return;
    }
  }


  return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Game
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Game</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label htmlFor="event-date">Date: </label>
            <input value={date} type="date" className="form-control" id="event-date" onChange={handleChange} />
            <label htmlFor="event-opponent">Opponent: </label>
            <input value={opponent} type="text" className="form-control" id="event-opponent" onChange={handleChange}/>
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