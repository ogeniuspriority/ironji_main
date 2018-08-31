import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';

import ClientMainPage from '../pages/ClientMainPage.jsx';
import ClientRegister from '../pages/ClientRegister.jsx';
import DriverMainPage from '../pages/DriverMainPage.jsx';
import BuyerMainPage from '../pages/BuyerMainPage.jsx';
import DriverRegister from '../pages/DriverRegister.jsx';
import BuyerRegister from '../pages/BuyerRegister.jsx';
import FQ_Asked from '../pages/FQ_Asked.jsx';
import admin from '../pages/admin.jsx';

import {Users} from '../../api/users.js';

import NotFound from '../pages/NotFound.jsx';
import Messages from '../pages/Messages.jsx';
import Profile from '../pages/Profile.jsx';


export default class MainLayout extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path = '/about' component={About} />
              <Route path = '/clientMainPage' component={ClientMainPage} />
              <Route path = '/clientRegister' component={ClientRegister} />
              <Route path = '/driverMainPage' component={DriverMainPage} />
              <Route path = '/driverRegister' component={DriverRegister} />
              <Route path = '/fq_asked' component={FQ_Asked} />
              <Route path = '/admin' component={admin} />
              <Route path = '/buyerMainPage' component={BuyerMainPage} />
              <Route path = '/messages' component={Messages} />
              <Route path = '/buyerRegister' component={BuyerRegister} />
                 <Route path = '/profile' component={Profile} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
        </div>
      </Router>
    );
  }
}
