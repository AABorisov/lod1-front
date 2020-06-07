import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../layouts/Layout';
import ReceptionPage from '../pages/ReceptionPage';
import StagePage from "../pages/StagePage";
import SessionPage from "../pages/SessionPage";
import AfterpartyPage from "../pages/AfterpartyPage";
import {AuthData} from "../store/auth/types";
import LayoutAuth from "../layouts/LayoutAuth";
import RegistrationPage from "../pages/RegistrationPage";
import {AppState} from "../store";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import {registration} from "../store/auth/actions";

interface AuthStateProps {
  auth: AuthData;
}

interface AuthDispatchProps {
  registrationUser: () => void;
}

type AppProps = AuthStateProps & AuthDispatchProps;

const App: React.FC<AppProps> = ( { auth } ) => {
  const renderApp = () => {
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
  }

  const renderAuthApp = () => {
    return (
      <BrowserRouter>
        <LayoutAuth>
          <RegistrationPage />
        </LayoutAuth>
      </BrowserRouter>
    );
  }

  if (auth || true) {
    return renderApp();
  } else {
    return renderAuthApp()
  }
};

const mapStateToProps = (state: AppState): AuthStateProps => ({
  auth: state.auth.auth,
});

const mapDispatchToProps = (dispatch: Dispatch): AuthDispatchProps =>
  bindActionCreators(
    {
      registrationUser: registration,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
