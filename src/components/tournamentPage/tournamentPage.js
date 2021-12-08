import { useEffect } from "react";

const TournamentPage = (props) => {

  useEffect(() => {
  }, [props.team, props.tournament])


  return (
      <>
        <h1>{props.tournament.eventName}</h1>
        <h2>Games</h2>
      </>
  )
};

export default TournamentPage;