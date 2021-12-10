import Button from "@restart/ui/Button";
import Modal from 'react-bootstrap/Modal';
import {useEffect, useState} from "react";



const UpdateButton = (props) => {
  const [show, setShow] = useState(false);

  const [newStat, setNewStat] = useState(props.stats);

  const [points, setPoints] = useState(props.stat.pointScored);
  const [blocks, setBlocks] = useState(props.stat.blocks);
  const [completions, setCompletions] = useState(props.stat.completions);
  const [catches, setCatches] = useState(props.stat.catches);
  const [assists, setAssists] = useState(props.stat.assist);



  const handleClose = () => {
    setShow(false);
    setPoints(props.stat.pointScored);
    setBlocks(props.stat.blocks);
    setCompletions(props.stat.completions);
    setCatches(props.stat.catches);
    setAssists(props.stat.assist);
  };

  const handleShow = () => {setShow(true)};

  const handleCreate = () => {
    fetch("http://localhost:4000/api/teams/" + props.team.teamId + "/events/" + props.tournament.eventId
        + "/games/" + props.game.gameId + "/points/" + props.point.pointId + "/stats/" + props.stat.player, {
      method: "PUT",
      body: JSON.stringify({playerName: props.name , points: points, blocks: blocks, completions: completions, catches: catches, assist: assists}),
      headers: {
        'content-type':'application/json'
      }
    }).then(response => response.json())
    .then(result => console.log(result));

    props.setTest(!props.test);

    setPoints(props.stat.pointScored);
    setBlocks(props.stat.blocks);
    setCompletions(props.stat.completions);
    setCatches(props.stat.catches);
    setAssists(props.stat.assist);

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
      default:
        return;
    }
  }

  return (
      <>
        <Button className="btn-primary" onClick={handleShow}>
          Update
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Point</Modal.Title>
          </Modal.Header>
          <Modal.Body>

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

export default UpdateButton;