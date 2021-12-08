import { useEffect, useState } from "react";

const TournamentPage = (props) => {
  const [tournament, setTournament] = useState({});

  useEffect(() => {
    fetch("http://localhost:4000/api/teams/" + props.team)
    .then(response => response.json())
    .then(result => setTournament(result[0]))

    console.log(tournament)
  }, [props.team])


  return (
      <>
        <h1>{tournament.name}</h1>
        <h2>Games</h2>
      </>
  )
};

export default TournamentPage;