import { useState } from "react";
// import CoachesTable from "../teamPage/coachesTable";
// import EventsTable from "../teamPage/eventsTable";
// import PlayersTable from "../teamPage/playersTable";
import TeamPage from "../teamPage/teamPage";
// import TournamentsTable from "../teamPage/tournamentsTable";
import TournamentPage from "../tournamentPage/tournamentPage";
import TeamsTable from "./teamTable";

const MainPage = () => {
  const [team, setTeam] = useState({});
  const [tournament, setTournament] = useState({});
  const [game, setGame] = useState(0);
  const [point, setPoint] = useState(0);

  const renderTeam = () => {
    if (team.teamId == null) {
      return (<></>)
    }

    return (<TeamPage team={team} setTournament={setTournament}/>)

  }

  const renderTournament = () => {
    if (tournament.eventId == null) {
      return (<></>)
    }

    return (<TournamentPage team={team} tournament={tournament} setGame={setGame}/>)

  }

  return (
      <>
        <h1>Northeastern Ultimate Frisbee Team</h1>
        <h2>Teams</h2>
        <TeamsTable setTeam={setTeam}/>
        <hr/>

        {renderTeam()}
        <hr/>

        {renderTournament()}
        <hr/>
      </>
  )
};

export default MainPage;