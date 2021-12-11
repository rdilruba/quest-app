import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import User from './components/User/User';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/users/:userId" component={User}></Route>
          <Route exact path="/auth">
          {localStorage.getItem("currentUser") != null ? <Redirect to="/"/>: <Auth/>}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
