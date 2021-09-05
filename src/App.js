import React, { Fragment } from "react";
import { useLocation, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion"

import AppLayout from "./appLayout";
import Home from "./view/home";
import Favorites from "./view/favorites"
import Details from "./view/movies/details"
import ThankYouPage from './Thank_You_Page'

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
        <Fragment>
            <AppLayout>
                <Route exact path={`/`} component={Home} />
                <Route exact path={`/movie/:id`} component={Details} />
                <Route exact path={`/favorites`} component={Favorites} />
                <Route exact path={`/thank-you`} component={ThankYouPage} />
            </AppLayout>
        </Fragment>
        </Switch>
    </AnimatePresence>
  );
};

export default App;
