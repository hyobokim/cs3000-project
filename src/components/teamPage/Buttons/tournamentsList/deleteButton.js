const DeleteButton = (props) => {

  const handleClick = () => {
    fetch("http://localhost:4000/api/teams/" + props.team.teamId + "/events/" + props.event.eventId,
        {
          method: "DELETE"
        }).then(
        props.setEvents(props.events.filter(event => event.eventId !== props.event.eventId))
    )
  }

  return (
      <>
        <button className="btn-danger" onClick={handleClick}  >Delete</button>
      </>
  );
}

export default DeleteButton;