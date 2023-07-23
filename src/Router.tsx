import { BrowserRouter, Route, Switch } from "react-router-dom";
import Gallery from "./routes/Gallery";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Qna from "./routes/Qna";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/qna">
          <Qna />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
