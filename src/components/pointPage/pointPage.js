import { useEffect, useState } from "react";
import StatsTable from "./statsTable";
import CreateButton from "../teamPage/Buttons/points/createButton";

const PointPage = (props) => {

  useEffect(() => {
  }, [props.team, props.tournament, props.game, props.point])


  return (
      <>
        <h1>Point</h1>
        <h2>Stats</h2>
        <StatsTable team={props.team} tournament={props.tournament} game={props.game} point={props.point}/>
      </>
  )
};

export default PointPage;