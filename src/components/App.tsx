import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../layouts/Layout';
import ReceptionPage from '../pages/ReceptionPage';
import StagePage from "../pages/StagePage";
import SessionPage from "../pages/SessionPage";
import AfterpartyPage from "../pages/AfterpartyPage";

const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Redirect exact from="/" to="/afterparty" />
          <Route path="/reception" component={ReceptionPage} />
          <Route path="/stage" component={StagePage} />
          <Route path="/session" component={SessionPage} />
          <Route path="/afterparty" component={AfterpartyPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
