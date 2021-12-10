import Button from "@restart/ui/Button";
import Modal from 'react-bootstrap/Modal';
import {useState} from "react";



const CreateButton = (props) => {
  const [show, setShow] = useState(false);

  const [oLine, setOLine] = useState(0);
  const [pointScored, setPointScored] = useState(1);
  const [hScore, setHScore] = useState([]);
  const [aScore, setAScore] = useState([]);

  const handleClose = () => {
    setShow(false);
    setOLine(0);
    setPointScored(0);
    setHScore([]);
    setAScore([]);
  };
  const handleShow = () => {setShow(true)};
  const handleCreate = () => {
    fetch("http://localhost:4000/api/teams/" + props.team.teamId + "/events/" + props.tournament.eventId
        + "/games/" + props.game.gameId + "/points", {
      method: 'POST',
      body: JSON.stringify({oLine: oLine, pointScored: pointScored, hScore: hScore, aScore: aScore}),
      headers: {
        'content-type':'application/json'
      }
    }).then(response => response.json())
    .then(result => props.setPoints([
      ...props.points,
        result
    ]));

    setOLine(0);
    setPointScored(0);
    setAScore([]);
    setHScore([]);

    setShow(false);
  }

  const handleChange = (event) => {
    switch (event.target.id) {
      case 'o-line-yes':
        setOLine(1);
        console.log(event.target.value)
        return;
      case 'o-line-no':
        setOLine(0);
        return;
      case 'point-scored':
        setPointScored((pointScored + 1) % 2);
        console.log(pointScored);
        return;
      case 'ascore':
        setAScore(event.target.value)
        return;
      case 'hscore':
        setHScore(event.target.value)
        return;
      default:
        return;
    }
  }


  return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Point
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Point</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>O-Line?</div>

            <div className="form-check">
              <input className="form-check-input" type="radio"
                     name="o-line" id="o-line-no" value="no" onClick={handleChange}
                   />
                <label className="form-check-label" htmlFor="o-line-no">
                  No
                </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio"
                     name="o-line" id="o-line-yes" value="yes" onClick={handleChange}/>
                <label className="form-check-label" htmlFor="o-line-yes">
                  Yes
                </label>
            </div>

            <label htmlFor="point-scored"  className="form-check-label">NEU Point Scored?: </label>
            <input type="checkbox" className="form-check-input" id="point-scored" value="" onClick={handleChange}/>

            <label htmlFor="ascore">Away Score: </label>
            <input value={aScore} type="number" className="form-control" id="ascore" onChange={handleChange}/>
            <label htmlFor="hscore">Home Score: </label>
            <input value={hScore} type="number" className="form-control" id="hscore" onChange={handleChange}/>
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