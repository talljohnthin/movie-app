import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AppLayout from "./appLayout";
import Home from "./view/home";
import Favorites from "./view/favorites"
import Details from "./view/movies/details"

const App = () => {
  return (
    <BrowserRouter basename={"/"}>
        <Switch>
          <Fragment>
            <AppLayout>
              <Route exact path={`/`} component={Home} />
              <Route exact path={`/movie/:id`} component={Details} />
              <Route exact path={`/favorites`} component={Favorites} />
            </AppLayout>
          </Fragment>
        </Switch>
    </BrowserRouter>
  );
};

export default App;
