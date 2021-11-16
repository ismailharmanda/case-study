import { Route, Switch } from "react-router-dom";

import Albums from "../views/Albums";
import Shows from "../views/Shows";

const Routes = () => {
  return (
    <Switch>
      <Route path="/shows" component={Shows} />
      <Route path="/" component={Albums} />
    </Switch>
  );
};

export default Routes;
