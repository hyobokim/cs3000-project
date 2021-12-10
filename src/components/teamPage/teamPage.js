import { useEffect, useState} from "react";
import CoachesTable from "../teamPage/coachesTable";
import EventsTable from "../teamPage/eventsTable";
import PlayersTable from "../teamPage/playersTable";
import TournamentsTable from "../teamPage/tournamentsTable";
import TournamentPage from "../tournamentPage/tournamentPage";

const TeamPage = (props) => {
  const [tournament, setTournament] = useState({});
  useEffect(() => {
    setTournament({})
  }, [props.team])

  const renderTournament = () => {
    if (tournament.eventId == null) {
      return (<></>)
    }

    return (<TournamentPage team={props.team} tournament={tournament}/>)


  }


  return (
      <>
        <h1>{props.team.teamName}</h1>
        <h2>Roster</h2>
        <PlayersTable team={props.team}/>
        <h2>Tournaments</h2>
        <TournamentsTable team={props.team} setTournament={setTournament}/>
        <hr></hr>
        {renderTournament()}
      </>
  )
}

export default TeamPage;