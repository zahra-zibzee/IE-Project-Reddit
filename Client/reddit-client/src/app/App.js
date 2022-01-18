import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Pages/Home";
import Login from "../components/Pages/Login";
import Signup from "../components/Pages/Signup";
function App() {
  const login = false;

  const init_component = login ? Home : Login;
  
  return (
    <div className="App" id="App">
      <Router>
        <Switch>
          <Route exact path="/" component={init_component} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route exact path="/r/:display_name/" component={Subreddit} />
          <Route path="/r/:subreddit/post/:id" component={Post} />
          <Route exact path="/r/:currentSubreddit/hot" component={Hot} />
          <Route exact path="/r/:currentSubreddit/top" component={Top} />
          <Route exact path="/r/:currentSubreddit/new" component={New} />
          <Route path="/results" component={Results} />
          <Route exact path="/bookmarks" component={Bookmarks} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} /> */}
        </Switch>
      </Router>
      {/* <SiteFooter /> */}
    </div>
  );
}

export default App;
