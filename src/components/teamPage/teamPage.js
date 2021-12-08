import { useEffect} from "react";
import CoachesTable from "../teamPage/coachesTable";
import EventsTable from "../teamPage/eventsTable";
import PlayersTable from "../teamPage/playersTable";
import TournamentsTable from "../teamPage/tournamentsTable";

const TeamPage = (props) => {
  useEffect(() => {}, [props.team])


  return (
      <>
        <h1>{props.team.teamName}</h1>
        <h2>Coaches</h2>
        <CoachesTable team={props.team}/>
        <h2>Roster</h2>
        <PlayersTable team={props.team}/>
        <h2>Events</h2>
        <EventsTable team={props.team}/>
        <h2>Tournaments</h2>
        <TournamentsTable team={props.team} setTournament={props.setTournament}/>
      </>
  )
}

export default TeamPage;