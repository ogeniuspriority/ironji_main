import React, { Component }
from 'react';
import classNames from 'classnames';
import Modal from 'react-bootstrap-modal';
import { Users } from '../../api/users';
import { Client_hot_deals } from '../../api/hot_deals';
import { Drivers_schedules } from '../../api/drivers_schedules';
import { withTracker } from 'meteor/react-meteor-data';
import DatePicker from 'react-datepicker';
import moment from 'react-moment';
import 'moment-timezone';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import { render } from 'react-dom';
import Switch from 'react-toggle-switch';
import "react-toggle-switch/dist/css/switch.min.css";

//import {TrackerReact} from 'ultimatejs:tracker-react';



class TraderDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideCompleted: false, lat: -1.944676,
            lng: 30.089745,
            productPop: false,

        };


    }

    componentDidMount() {

        if (sessionStorage.length == 0) {
            window.open("/", "_self");
        }
    }

    render() {

        return (<div className="container">
            <div className="theConainer theRightSide">
                <img src="images/ironji.png" />
                <div className="TrademarkAndName">Ironji<sup>TM</sup></div>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr><td><a href="/" className="headerLinks">Homepage</a></td><td><a href="/" className="headerLinks">Logout</a></td></tr>
                    </tbody>
                </table>
            </div>
            <div className="pull-right" style={{marginTop: "70px"}}>
                <img src={"images/Mugabo Shyaka Cedric.jpg"} style={{width: "150px", height: "150px"}} />
        
            </div>
            <div style={{clear: "both"}}></div>
            <h2 style={{textDecoration: "underline", textAlign: "center"}}>Dashboard</h2>
            <div className="align-items-center d-flex justify-content-center" style={{marginLeft: "30%", marginRight: "10%", marginTop: "70px"}}>
        
                <div >
                    <div style={{float: "left", width: "250px", height: "100px"}}>
                        <h4>MainPage</h4>
                        <img src={"images/home.png"} style={{width: "100px", height: "100px"}} />
                    </div>
                    <div style={{float: "left", width: "250px", height: "100px"}}>
                        <h4>Ironji Wallet</h4>
                        <img src={"images/wallet.png"} style={{width: "100px", height: "100px"}} />
                    </div>
                    <div style={{clear: "both"}}></div>
        
                </div>
                <div style={{marginTop: "70px"}} >
                    <div style={{float: "left", width: "250px", height: "100px"}}>
                        <h4>Messages</h4>
                        <img src={"images/messages.png"} style={{width: "100px", height: "100px"}} />
                    </div>
                    <div style={{float: "left", width: "250px", height: "100px"}}>
                        <h4>FAQs</h4>
                        <img src={"images/faq.png"} style={{width: "100px", height: "100px"}} />
                    </div>
                    <div style={{clear: "both"}}></div>
        
                </div>
        
            </div>
            <div style={{clear: "both", height: "60px"}}></div>
        </div>
                                                                                    );
                                                                        }

                                                                    }
                                                                    export default withTracker(() => {
                                                                        return {
                                                                            tasks: Users.find({}).fetch(),
                                                                            theSchedules: Drivers_schedules.find({}, {sort: {createdAt: -1}}).fetch(),
                                                                        };
                                                                    })(TraderDashboard);

