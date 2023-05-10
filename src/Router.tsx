import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId"></Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
