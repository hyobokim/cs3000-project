import { useEffect, useState } from "react";
import PointPage from "../pointPage/pointPage";
import PointsTable from "./pointsTable";

const GamePage = (props) => {
  const [point, setPoint] = useState({})

  useEffect(() => {
    setPoint({})
  }, [props.team, props.tournament, props.game])

  const renderPoint = () => {
    if (point.pointId == null) {
      return (<></>)
    }

    return (<PointPage team={props.team} tournament={props.tournament} game={props.game} point={point}/>)

  }

  return (
      <>
        <h1>Vs. {props.game.opponent}</h1>
        <h2>Points</h2>
        <PointsTable team={props.team} tournament={props.tournament} game={props.game} setPoint={setPoint}/>
        <hr></hr>
        {renderPoint()}
      </>
  )
};

export default GamePage;