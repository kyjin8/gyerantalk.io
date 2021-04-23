import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
// import Auth from './api/auth'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/" component={Auth(LoginPage, false)} /> */}
          <Route exact path="/" component={LoginPage} />
          {/* <Route exact path="/register" component={Auth(RegisterPage, false)} /> */}
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
