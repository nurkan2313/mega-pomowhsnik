import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import Header from './Header';
import MainContainer from './MainContainer';
import DetailContainer from './DetailContainer';
import HelperDetail from './HelperDetail';
import Description from './Description';
import store from '../redux/store';

import './App.css'

export default class App extends PureComponent {
  _redirectToHome() {
    return <Redirect to="/" />;
  }

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Router>
            <div className='main'>
              <Header />
              {/* content */}
              <Switch>
                <Route exact path="/" component={MainContainer} />
                <Route path="/info/:id/:slug" component={DetailContainer} />
                <Route path="/detail/:id/:slug" component={HelperDetail} />
                <Route path="/description/:id/:slug" component={Description} />
                {/* catch-all redirects to home */}
                <Route render={this._redirectToHome} />
              </Switch>
            </div>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
