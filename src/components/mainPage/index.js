import { useState } from "react";
import TeamPage from "../teamPage/teamPage";
import TeamsTable from "./teamTable";

const MainPage = () => {
  const [team, setTeam] = useState({});

  const renderTeam = () => {
    if (team.teamId == null) {
      return (<></>)
    }

    return (<TeamPage team={team}/>)

  }

  return (
      <>
        <h1>Northeastern Ultimate Frisbee Team</h1>
        <h2>Teams</h2>
        <TeamsTable setTeam={setTeam}/>
        <hr/>

        {renderTeam()}
      </>
  )
};

export default MainPage;