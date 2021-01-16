import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { NewAccount } from './pages/NewAccount/NewAccount';
import { Disqualification } from './pages/Disqualification/Disqualification';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
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
