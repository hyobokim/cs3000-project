import { useEffect, useState } from "react";
import GamePage from "../gamePage/gamePage";
import GamesTable from "./gamesTable";

const TournamentPage = (props) => {
  const [game, setGame] = useState({})

  useEffect(() => {
    setGame({})
  }, [props.team, props.tournament])

  const renderGame = () => {
    if (game.gameId == null) {
      return (<></>)
    }

    return (<GamePage team={props.team} tournament={props.tournament} game={game}/>)

  }

  return (
      <>
        <h1>{props.tournament.eventName}</h1>
        <h2>Games</h2>
        <GamesTable team={props.team} tournament={props.tournament} setGame={setGame}/>
        <hr></hr>
        {renderGame()}
      </>
  )
};

export default TournamentPage;