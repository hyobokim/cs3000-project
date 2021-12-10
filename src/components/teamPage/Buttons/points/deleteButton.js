const DeleteButton = (props) => {

  const handleClick = () => {
    fetch("http://localhost:4000/api/teams/" + props.team.teamId + "/events/" + props.event.eventId
        + "/games/" + props.game.gameId + "/points/" + props.point.pointId,
        {
          method: "DELETE"
        }).then(
        props.setPoints(props.points.filter(point => point.pointId !== props.point.pointId))
    )
  }

  return (
      <>
        <button className="btn-danger" onClick={handleClick}  >Delete</button>
      </>
  );
}

export default DeleteButton;