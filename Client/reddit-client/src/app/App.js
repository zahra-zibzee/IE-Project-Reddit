import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Pages/Home";
import Login from "../components/Pages/Login";
import Signup from "../components/Pages/Signup";
import AddNewPost from "../components/Pages/Post/AddNewPost";
import UserSettings from "../components/Pages/Setting/UserSettings";
import UserProfile from "../components/Pages/Profile/UserProfile";
import Community from "../components/Pages/Profile/Community";
import Post from "../components/Pages/Post/Post";

function App() {
  const login = true;

  const init_component = login ? Home : Login;

  return (
    <div className="App" id="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path={"/addPost"} component={AddNewPost} />
          <Route exact path={"/userSettings"} component={UserSettings} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/user" component={UserProfile} />
          <Route exact path="/community" component={Community} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
