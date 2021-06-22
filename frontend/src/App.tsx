import './App.css';
import Pokemons from './components/Pokemons'
import Header from './components/Header'
import AccountForm from './components/AccountForm';
import TrainerChoredex from './components/TrainerChoredex';
import AdminHomepage from './components/AdminHomepage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import { AccountContextProvider } from './context/auth.context';
import SignInForm from './components/SignInForm';
import linkedinIcon from './assets/linkedinIcon.png';

function App() {
  return (
    <div className="App">
      <Router>
        <AccountContextProvider>
          <Header />
            <Switch>
              <Route path="/account-sign-up">
                <AccountForm/>
              </Route>
              <Route path="/sign-in-form">
                <SignInForm />
              </Route>
              <Route path="/homepage/:admin">
                <AdminHomepage />
              </Route>
              <Route path="/choredex/:name">
                <TrainerChoredex />
              </Route>
              <Route path="/Pokemons">
                <Pokemons />
              </Route>
              <Route path="/">
                <Homepage />
                <footer className="HomepageFooter">
                  <img src={linkedinIcon} alt="linkedin icon" /><a className="linkedinLink" href="https://linkedin.com/in/yitz-hochstadt"><h2 className="Credits">yitz-hochstadt</h2></a>
                  <img src={linkedinIcon} alt="linkedin icon" /><a className="linkedinLink" href="https://linkedin.com/in/curtispunches"><h2 className="Credits">curtispunches</h2></a>
                  <img src={linkedinIcon} alt="linkedin icon" /><a className="linkedinLink" href="https://linkedin.com/in/kaleigh-griffin"><h2 className="Credits">kaleigh-griffin</h2></a>
                </footer>
              </Route>
            </Switch>
        </AccountContextProvider>
      </Router>
    
    </div>
  );
}

export default App;