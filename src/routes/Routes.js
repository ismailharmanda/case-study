import { Route, Switch, Redirect } from "react-router-dom";

import Albums from "../views/Albums";
import Shows from "../views/Shows";
import NavBar from "../components/NavBar";

const Routes = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/albums" component={Albums} />
        <Route path="/shows" component={Shows} />
        <Route path="/">
          <Redirect to="/albums" />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
