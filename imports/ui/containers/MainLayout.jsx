import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';

import ClientMainPage from '../pages/ClientMainPage.jsx';
import ClientRegister from '../pages/ClientRegister.jsx';
import DriverDashboard from '../pages/DriverDashboard.jsx';
import DriverMainPage from '../pages/DriverMainPage.jsx';
import BuyerMainPage from '../pages/BuyerMainPage.jsx';
import DriverRegister from '../pages/DriverRegister.jsx';
import BuyerRegister from '../pages/BuyerRegister.jsx';
import TraderDashboard from '../pages/TraderDashboard.jsx';
import BuyerDashboard from '../pages/BuyerDashboard.jsx';
import FQ_Asked from '../pages/FQ_Asked.jsx';
import admin from '../pages/admin.jsx';

import {Users} from '../../api/users.js';

import NotFound from '../pages/NotFound.jsx';
import Messages from '../pages/Messages.jsx';
import BuyerMessages from '../pages/BuyerMessages.jsx';
import ClientMessages from '../pages/ClientMessages.jsx';
import tradermessages from '../pages/ClientMessages.jsx';
import DriverMessages from '../pages/DriverMessages.jsx';
import Profile from '../pages/Profile.jsx';
import ClientProfile from '../pages/ClientProfile.jsx';
import DriverProfile from '../pages/DriverProfile.jsx';
import BuyerProfile from '../pages/BuyerProfile.jsx';
import Team from '../pages/Team.jsx';
import FarmerRegister from '../pages/FarmerRegister.jsx';
import FarmerDashboard from '../pages/FarmerDashboard.jsx';
import FarmerMainPage from '../pages/FarmerMainPage.jsx';
import FarmerProfile from '../pages/FarmerProfile.jsx';
import FarmerMessages from '../pages/FarmerMessages.jsx';
import BuyerSendCargo from '../pages/BuyerSendCargo.jsx';
import TraderSendCargo from '../pages/TraderSendCargo.jsx';
import FarmerSendCargo from '../pages/FarmerSendCargo.jsx';
import DriverSendCargo from '../pages/DriverSendCargo.jsx';
import DriverCarryCargo from '../pages/DriverCarryCargo.jsx';
import FarmerCarryCargo from '../pages/FarmerCarryCargo.jsx';
import BuyerCarryCargo from '../pages/BuyerCarryCargo.jsx';
import TraderCarryCargo from '../pages/TraderCarryCargo.jsx';
import business_page_home from '../pages/business_page_home.jsx';


export default class MainLayout extends React.Component {
  render() {
    return (
        <Router>
            <div  style={{ fontSize: "15px",margin:"20px",borderTop:"1px solid orange",borderRadius:"5px" }}>
          
            <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/BusinessProfile' component={business_page_home} />
              <Route path = '/about' component={About} />
              <Route path = '/clientMainPage' component={ClientMainPage} />
              <Route path = '/clientRegister' component={ClientRegister} />
              <Route path = '/driverMainPage' component={DriverMainPage} />
              <Route path = '/DriverDashboard' component={DriverDashboard} />
              <Route path = '/driverRegister' component={DriverRegister} />
              <Route path = '/fq_asked' component={FQ_Asked} />
              <Route path = '/admin' component={admin} />
              <Route path = '/buyerMainPage' component={BuyerMainPage} />
              <Route path = '/BuyerDashboard' component={BuyerDashboard} />
              <Route path = '/TraderDashboard' component={TraderDashboard} />
              <Route path = '/messages' component={Messages} />
              <Route path = '/Clientmessages' component={ClientMessages} />
              <Route path = '/Buyermessages' component={BuyerMessages} />
              <Route path = '/DriverMessages' component={DriverMessages} />
                    <Route path='/buyerRegister' component={BuyerRegister}/> 
                        <Route path='/team' component={Team}/>
                 <Route path = '/profile' component={Profile} />
                 <Route path = '/Clientprofile' component={ClientProfile} />
                 <Route path = '/Driverprofile' component={DriverProfile} />
                    <Route path='/Buyerprofile' component={BuyerProfile} />
                    <Route path='/FarmerRegister' component={FarmerRegister} />
                    <Route path='/FarmerDashboard' component={FarmerDashboard} />
                    <Route path='/FarmerMainPage' component={FarmerMainPage} />
                    <Route path='/FarmerMessages' component={FarmerMessages} />
                    <Route path='/FarmerProfile' component={FarmerProfile} />
                    <Route path='/DriverSendCargo' component={DriverSendCargo} />
                    <Route path='/BuyerSendCargo' component={BuyerSendCargo} />
                    <Route path='/FarmerSendCargo' component={FarmerSendCargo} />
                    <Route path='/TraderSendCargo' component={TraderSendCargo} />
                    <Route path='/FarmerCarryCargo' component={FarmerCarryCargo} />
                    <Route path='/BuyerCarryCargo' component={BuyerCarryCargo} />
                    <Route path='/DriverCarryCargo' component={DriverCarryCargo} />
                    <Route path='/TraderCarryCargo' component={TraderCarryCargo} />
                    <Route path='/tradermessages' component={tradermessages} />
              <Route component={NotFound} />
            </Switch>
            
        </div>
      </Router>
    );
  }
}
