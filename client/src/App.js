import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { NewAccount } from './pages/NewAccount/NewAccount';
import { Disqualification } from './pages/Disqualification/Disqualification';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <main className="main">
        <Router>
          <Switch>
            <Route path="/" exact>
              <LandingPage />
            </Route>
            <Route path="/newaccount" exact>
              <NewAccount />
            </Route>
            <Route path="/disqualification" exact>
              <Disqualification />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
