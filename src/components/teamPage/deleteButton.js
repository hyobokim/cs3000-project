const DeleteButton = (props) => {

  const handleClick = () => {
    fetch("http://localhost:4000/api/teams/" + props.team.teamId + "/players/"
        + props.player.nuID,
        {
          method: "DELETE"
        }).then(
            props.setPlayers(props.players.filter(player => player.nuID !== props.player.nuID))
    )
  }

  return (
      <>
        <button className="btn-danger" onClick={handleClick}  >Delete</button>
      </>
  );
}

export default DeleteButton;