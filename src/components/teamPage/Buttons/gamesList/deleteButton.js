const DeleteButton = (props) => {

  const handleClick = () => {
    fetch("http://localhost:4000/api/teams/" + props.team.teamId + "/events/"
        + props.tournament.eventId + "/games/" + props.game.gameId,
        {
          method: "DELETE"
        }).then(
        props.setGames(props.games.filter(game => game.gameId !== props.game.gameId))
    )
  }

  return (
      <>
        <button className="btn-danger" onClick={handleClick}  >Delete</button>
      </>
  );
}

export default DeleteButton;