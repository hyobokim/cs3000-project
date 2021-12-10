import Button from "@restart/ui/Button";
import Modal from 'react-bootstrap/Modal';
import {useState} from "react";



const CreateButton = (props) => {
  const [show, setShow] = useState(false);

  const [eventName, setEventName] = useState("");
  const [dateStart, setDateStart] = useState([]);
  const [dateEnd, setDateEnd] = useState([]);
  const [location, setLocation] = useState([]);

  const handleClose = () => {
    setShow(false);
    setEventName("");
    setDateStart([]);
    setDateEnd([]);
    setLocation([]);
  };
  const handleShow = () => {setShow(true)};
  const handleCreate = () => {
    fetch("http://localhost:4000/api/teams/" + props.team.teamId + "/events", {
      method: 'POST',
      body: JSON.stringify({eventName: eventName, startDate: dateStart, endDate: dateEnd, location: location}),
      headers: {
        'content-type':'application/json'
      }
    }).then(response => response.json())
    .then(result => props.setEvents([
        result,
        ...props.events
    ]));

    setEventName("");
    setDateStart([]);
    setDateEnd([]);
    setLocation([]);

    setShow(false);
  }

  const handleChange = (event) => {
    switch (event.target.id) {
      case 'event-name':
        setEventName(event.target.value);
        return;
      case 'event-start-date':
        setDateStart(event.target.value)
        return;
      case 'event-end-date':
        setDateEnd(event.target.value)
        return;
      case 'event-location':
        setLocation(event.target.value)
        return;
      default:
        return;
    }
  }


  return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Tournament
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Tournament</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label htmlFor="event-name">Name: </label>
            <input value={eventName} type="text" className="form-control" id="event-name" onChange={handleChange} />
            <label htmlFor="event-start-date">Start Date: </label>
            <input value={dateStart} type="datetime-local" className="form-control" id="event-start-date" onChange={handleChange}/>
            <label htmlFor="event-end-date">End Date: </label>
            <input value={dateEnd} type="datetime-local" className="form-control" id="event-end-date" onChange={handleChange}/>
            <label htmlFor="event-location"  className="form-check-label">Location: </label>
            <input type="text" className="form-control" id="event-location" value={location} onChange={handleChange}/>
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