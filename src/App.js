// import logo from './logo.svg';
import './App.css';
// import HelloWorld from "./components/hello/hello";
// import APlayers from "./components/playersList";
// import BPlayers from "./components/playersList/b-players";
// import CPlayers from "./components/playersList/c-players";
// import Balks from "./components/playersList/balks";
import MainPage from "./components/mainPage";


function App() {
  return (
      <div className="container">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <MainPage/>

        {/*<div className="row">*/}
        {/*  <div className="col-sm">*/}
        {/*    col 1*/}
        {/*  </div>*/}
        {/*  <div className="col-sm">*/}
        {/*    col 2*/}
        {/*  </div>*/}
        {/*  <div className="col-sm">*/}
        {/*    col 3*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
