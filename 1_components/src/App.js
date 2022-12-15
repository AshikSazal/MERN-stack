import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Users />
        </Route>
        <Route path="/" exact={true}>
          <NewPlace />
        </Route>
        {/* If there is no page in Route then redirect to default page */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
