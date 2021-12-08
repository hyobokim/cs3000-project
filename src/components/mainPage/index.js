import { useState } from "react";
import CoachesTable from "../teamPage/coachesTable";
import EventsTable from "../teamPage/eventsTable";
import PlayersTable from "../teamPage/playersTable";
import TeamPage from "../teamPage/teamPage";
import TournamentsTable from "../teamPage/tournamentsTable";
import TournamentPage from "../tournamentPage/tournamentPage";
import TeamsTable from "./teamTable";

const MainPage = () => {
  const [team, setTeam] = useState(0);
  const [tournament, setTournament] = useState(0);
  const [game, setGame] = useState(0);
  const [point, setPoint] = useState(0);
  
  return (
      <>
        <h1>Northeastern Ultimate Frisbee Team</h1>
        <h2>Teams</h2>
        <TeamsTable setTeam={setTeam}/>
        <hr/>

        <TeamPage team={team} setTournament={setTournament}/>
        <hr/>

        <TournamentPage team={team} setGame={setGame}/>
        <hr/>
      </>
  )
};

export default MainPage;