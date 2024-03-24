import Home from "./pages/home/Home";
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import Profile from "./pages/profile/Profile"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    
    <Router>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>

        <Route path="/register">
          <Register/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/profile/:username">
          <Profile/>
        </Route>
      </Switch>
      
    </Router>
    
    
    
  );
}

export default App;
