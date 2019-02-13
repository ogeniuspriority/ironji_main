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
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import { TradersSendCargoWin0 } from '../traders_custom/TradersSendCargoWin0';
import { TradersSendCargoWin1 } from '../traders_custom/TradersSendCargoWin1';
import { TradersSendCargoWin2 } from '../traders_custom/TradersSendCargoWin2';
import { TradersSendCargoWin3 } from '../traders_custom/TradersSendCargoWin3';
import { TradersSendCargoWin4 } from '../traders_custom/TradersSendCargoWin4';

class TraderSendCargo extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.getElementById("tabWin0").style.display = "block";
        document.getElementById("tabWin1").style.display = "none";
        document.getElementById("tabWin2").style.display = "none";
        document.getElementById("tabWin3").style.display = "none";
        document.getElementById("tabWin4").style.display = "none";
    }
    renderThisAccountAvatar() {

        global.the_id_op = "";
        global.avatar_profile = "";
        var po = Users.find({ username: "" + sessionStorage.getItem('ironji_account_username') }, { sort: { text: 1 } }).fetch();
        for (var key in po) {
            if (po.hasOwnProperty(key)) {
                //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);

                if (po[key].account_type == "trader") {
                    global.the_id_op = po[key]._id;
                    global.avatar_profile = po[key].avatar_profile;
                }
            }
        }
        var url = "";
        if (typeof global.avatar_profile === 'undefined') {
            // variable is undefined
            url = "/images/profile.png";
        } else {
            url = "https://map.ogeniuspriority.com/upload_scripts/" + global.avatar_profile;
        }
        global.userna_me = "";
        return (<img className="followLinks" src={url} />);
    }
    switchBetweenShipmentMenus(param, e) {
        //alert(param);
        if (param.includes("tabWin0")) {
            document.getElementById("tabWin0").style.display = "block";
            document.getElementById("tabWin1").style.display = "none";
            document.getElementById("tabWin2").style.display = "none";
            document.getElementById("tabWin3").style.display = "none";
            document.getElementById("tabWin4").style.display = "none";
            //------------Remove class--
            var element = document.getElementById("btntabWin0");
            element.classList.remove("active");
            var element = document.getElementById("btntabWin1");
            element.classList.remove("active");
            var element = document.getElementById("btntabWin2");
            element.classList.remove("active");
            var element = document.getElementById("btntabWin3");
            element.classList.remove("active");
            var element = document.getElementById("btntabWin4");
            element.classList.remove("active");
            //-------------
            var element = document.getElementById("btntabWin0");
            element.classList.remove("disabled");
            var element = document.getElementById("btntabWin1");
            element.classList.remove("disabled");
            var element = document.getElementById("btntabWin2");
            element.classList.remove("disabled");
            var element = document.getElementById("btntabWin3");
            element.classList.remove("disabled");
            var element = document.getElementById("btntabWin4");
            element.classList.remove("disabled");
            //--------------
            //-----put the active class -------add class--
            var element, name, arr;
            element = document.getElementById("btntabWin0");
            name = "active";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
            //---put the disabled class-----
            var element, name, arr;
            element = document.getElementById("btntabWin1");
            name = "disabled";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
            //---
            var element, name, arr;
            element = document.getElementById("btntabWin2");
            name = "disabled";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
            //-------
            var element, name, arr;
            element = document.getElementById("btntabWin3");
            name = "disabled";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
            //-------------
            var element, name, arr;
            element = document.getElementById("btntabWin4");
            name = "disabled";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }

        } else if (param.includes("tabWin1")) {
            document.getElementById("tabWin0").style.display = "none";
            document.getElementById("tabWin1").style.display = "block";
            document.getElementById("tabWin2").style.display = "none";
            document.getElementById("tabWin3").style.display = "none";
            document.getElementById("tabWin4").style.display = "none";
            //-------------------
            var element = document.getElementById("btntabWin0");
            element.classList.remove("active");
            var element = document.getElementById("btntabWin1");
            element.classList.remove("active");
            var element = document.getElementById("btntabWin2");
            element.classList.remove("active");
            var element = document.getElementById("btntabWin3");
            element.classList.remove("active");
            var element = document.getElementById("btntabWin4");
            element.classList.remove("active");
            //-------------
            var element = document.getElementById("btntabWin0");
            element.classList.remove("disabled");
            var element = document.getElementById("btntabWin1");
            element.classList.remove("disabled");
            var element = document.getElementById("btntabWin2");
            element.classList.remove("disabled");
            var element = document.getElementById("btntabWin3");
            element.classList.remove("disabled");
            var element = document.getElementById("btntabWin4");
            element.classList.remove("disabled");
            //--------------
            //-----put the active class -------add class--
            var element, name, arr;
            element = document.getElementById("btntabWin1");
            name = "active";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
            //---put the disabled class-----
            var element, name, arr;
            element = document.getElementById("btntabWin0");
            name = "disabled";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
            //---
            var element, name, arr;
            element = document.getElementById("btntabWin2");
            name = "disabled";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
            //-------
            var element, name, arr;
            element = document.getElementById("btntabWin3");
            name = "disabled";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
            //-------------
            var element, name, arr;
            element = document.getElementById("btntabWin4");
            name = "disabled";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
        } else if (param.includes("tabWin2")) {
            document.getElementById("tabWin0").style.display = "none";
            document.getElementById("tabWin1").style.display = "none";
            document.getElementById("tabWin2").style.display = "block";
            document.getElementById("tabWin3").style.display = "none";
            document.getElementById("tabWin4").style.display = "none";
            //-------------------
            var element = document.getElementById("btntabWin0");
            element.classList.remove("active");
            var element = document.getElementById("btntabWin1");
            element.classList.remove("active");
            var element = document.getElementById("btntabWin2");
            element.classList.remove("active");
            var element = document.getElementById("btntabWin3");
            element.classList.remove("active");
            var element = document.getElementById("btntabWin4");
            element.classList.remove("active");
            //-------------
            var element = document.getElementById("btntabWin0");
            element.classList.remove("disabled");
            var element = document.getElementById("btntabWin1");
            element.classList.remove("disabled");
            var element = document.getElementById("btntabWin2");
            element.classList.remove("disabled");
            var element = document.getElementById("btntabWin3");
            element.classList.remove("disabled");
            var element = document.getElementById("btntabWin4");
            element.classList.remove("disabled");
            //--------------
            //-----put the active class -------add class--
            var element, name, arr;
            element = document.getElementById("btntabWin2");
            name = "active";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
            //---put the disabled class-----
            var element, name, arr;
            element = document.getElementById("btntabWin1");
            name = "disabled";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
            //---
            var element, name, arr;
            element = document.getElementById("btntabWin0");
            name = "disabled";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
            //-------
            var element, name, arr;
            element = document.getElementById("btntabWin3");
            name = "disabled";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
            //-------------
            var element, name, arr;
            element = document.getElementById("btntabWin4");
            name = "disabled";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
        } else if (param.includes("tabWin3")) {
            document.getElementById("tabWin0").style.display = "none";
            document.getElementById("tabWin1").style.display = "none";
            document.getElementById("tabWin2").style.display = "none";
            document.getElementById("tabWin3").style.display = "block";
            document.getElementById("tabWin4").style.display = "none";
            //-------------------
            var element = document.getElementById("btntabWin0");
            element.classList.remove("active");
            var element = document.getElementById("btntabWin1");
            element.classList.remove("active");
            var element = document.getElementById("btntabWin2");
            element.classList.remove("active");
            var element = document.getElementById("btntabWin3");
            element.classList.remove("active");
            var element = document.getElementById("btntabWin4");
            element.classList.remove("active");
            //-------------
            var element = document.getElementById("btntabWin0");
            element.classList.remove("disabled");
            var element = document.getElementById("btntabWin1");
            element.classList.remove("disabled");
            var element = document.getElementById("btntabWin2");
            element.classList.remove("disabled");
            var element = document.getElementById("btntabWin3");
            element.classList.remove("disabled");
            var element = document.getElementById("btntabWin4");
            element.classList.remove("disabled");
            //--------------
            //-----put the active class -------add class--
            var element, name, arr;
            element = document.getElementById("btntabWin3");
            name = "active";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
            //---put the disabled class-----
            var element, name, arr;
            element = document.getElementById("btntabWin1");
            name = "disabled";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
            //---
            var element, name, arr;
            element = document.getElementById("btntabWin2");
            name = "disabled";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
            //-------
            var element, name, arr;
            element = document.getElementById("btntabWin0");
            name = "disabled";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
            //-------------
            var element, name, arr;
            element = document.getElementById("btntabWin4");
            name = "disabled";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
        } else if (param.includes("tabWin4")) {
            document.getElementById("tabWin0").style.display = "none";
            document.getElementById("tabWin1").style.display = "none";
            document.getElementById("tabWin2").style.display = "none";
            document.getElementById("tabWin3").style.display = "none";
            document.getElementById("tabWin4").style.display = "block";
            //-------------------
            var element = document.getElementById("btntabWin0");
            element.classList.remove("active");
            var element = document.getElementById("btntabWin1");
            element.classList.remove("active");
            var element = document.getElementById("btntabWin2");
            element.classList.remove("active");
            var element = document.getElementById("btntabWin3");
            element.classList.remove("active");
            var element = document.getElementById("btntabWin4");
            element.classList.remove("active");
            //-------------
            var element = document.getElementById("btntabWin0");
            element.classList.remove("disabled");
            var element = document.getElementById("btntabWin1");
            element.classList.remove("disabled");
            var element = document.getElementById("btntabWin2");
            element.classList.remove("disabled");
            var element = document.getElementById("btntabWin3");
            element.classList.remove("disabled");
            var element = document.getElementById("btntabWin4");
            element.classList.remove("disabled");
            //--------------
            //-----put the active class -------add class--
            var element, name, arr;
            element = document.getElementById("btntabWin4");
            name = "active";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
            //---put the disabled class-----
            var element, name, arr;
            element = document.getElementById("btntabWin1");
            name = "disabled";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
            //---
            var element, name, arr;
            element = document.getElementById("btntabWin2");
            name = "disabled";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
            //-------
            var element, name, arr;
            element = document.getElementById("btntabWin3");
            name = "disabled";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
            //-------------
            var element, name, arr;
            element = document.getElementById("btntabWin0");
            name = "disabled";
            arr = element.className.split(" ");
            if (arr.indexOf(name) == -1) {
                element.className += " " + name;
            }
        }
    }
  
    openNegotiationRoomWin0_hide(param, e) {
        document.getElementById("traderCarryCargoWin0ChatRoom").style.display = "none";
    }

  
    openNegotiationRoomWin1_hide(param, e) {
        document.getElementById("traderCarryCargoWin1ChatRoom").style.display = "none";
    }

    
    openNegotiationRoomWin2_hide(param, e) {
        document.getElementById("traderCarryCargoWin2ChatRoom").style.display = "none";
    }

    
    openNegotiationRoomWin3_hide(param, e) {
        document.getElementById("traderCarryCargoWin3ChatRoom").style.display = "none";
    }

    
    openNegotiationRoomWin4_hide(param, e) {
        document.getElementById("traderCarryCargoWin4ChatRoom").style.display = "none";
    }
    render() {

        return (<div className="container">
            <div className="logoHome_For_DRiver">
                <div>
                    <table>
                        <tbody>
                            <tr><td><a href="/" className="headerLinks">Homepage</a></td><td><a href="/" className="headerLinks">Logout</a></td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="container">
                    <div className="theTopMenus">
                        <div className="theConainer theRightSide">
                            <img src="images/ironji.png" />
                            <div className="TrademarkAndName">Ironji<sup>TM</sup></div>
                        </div>
                        <div className="theConainer theRightSide">

                        </div>
                        <div className="theConainer theRightSide">
                            <div className="row pull-right">
                                <table className="table table_ghh">
                                    <tbody>
                                        <tr><td><a href={'/fq_asked'}><img className="followLinks" src="images/question.png" /><br /><span>FAQs</span></a></td>
                                            <td><a href={'/tradermessages'}><img className="followLinks" src="images/message.png" /><br /><span>Messages</span></a></td>
                                            <td><a href={'/traderprofile'}>{this.renderThisAccountAvatar()}<br /><span>Hi, {sessionStorage.getItem('ironji_account_username')}</span></a></td>
                                            <td><a href={'/traderDashboard'}><img className="followLinks" src="images/dashboard.jpg" /><br /><span>Dashboard</span></a></td>
                                            <td><a href={'/traderMainPage'}><img className="followLinks" src="images/home.png" /><br /><span>Home</span></a></td>
                                            <td><a href={'/TraderSendCargo'}><img className="followLinks" src="images/user_send_cargo.jpg" /><br /><span>Send your cargo</span></a></td></tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ width: "90%", float: "left", padding: "6px", borderRadius: "5px" }}>
                    <div style={{ textAlign: "center", padding: "4px", background: "skyblue", borderRadius: "5px", fontSize: "16px" }}>
                        Your Chatties
                    </div>
                    <div>
                        <table><tbody>
                            <tr>
                                <td ><button id="btntabWin0" onClick={this.switchBetweenShipmentMenus.bind(this, "tabWin0")} style={{ minWidth: "70px" }} className="btn-success active">Send your cargo(Ironji shipping)<span className="badge" style={{ background: "black", borderRadius: "30px", width: "40px", color: "yellow" }}>2</span></button></td>
                                <td ><button id="btntabWin1" onClick={this.switchBetweenShipmentMenus.bind(this, "tabWin1")} style={{ minWidth: "70px" }} className="btn-success disabled">Your cargos on the move(Ironji shipping)<span className="badge" style={{ background: "black", borderRadius: "30px", width: "40px", color: "yellow" }}>2</span></button></td>
                                <td ><button id="btntabWin2" onClick={this.switchBetweenShipmentMenus.bind(this, "tabWin2")} style={{ minWidth: "70px" }} className="btn-success disabled">Your rejected cargo deals(Ironji shipping)<span className="badge" style={{ background: "black", borderRadius: "30px", width: "40px", color: "yellow" }}>2</span></button></td>
                                <td ><button id="btntabWin3" onClick={this.switchBetweenShipmentMenus.bind(this, "tabWin3")} style={{ minWidth: "70px" }} className="btn-success disabled">Your cancelled cargo deals(Ironji shipping)<span className="badge" style={{ background: "black", borderRadius: "30px", width: "40px", color: "yellow" }}>2</span></button></td>
                                <td ><button id="btntabWin4" onClick={this.switchBetweenShipmentMenus.bind(this, "tabWin4")} style={{ minWidth: "70px" }} className="btn-success disabled">Finalized cargo deals(Ironji shipping)<span className="badge" style={{ background: "black", borderRadius: "30px", width: "40px", color: "yellow" }}>2</span></button></td>
                            </tr></tbody>
                        </table>
                       
                        <div style={{ padding: "5px", height: "auto" }}>
                            <div id="tabWin0" className="modal-content" style={{ marginTop: "5px", padding: "6px" }}>
                                <div style={{ padding: "5px", margin: "5px", borderRadius: "5px", height: "300px", overflowY: "scroll" }}>
                                    <div id="traderCarryCargoWin0ChatRoom" style={{ display: "none", width: "60%", background: "white", position: "absolute", padding: "6px", borderRadius: "5px", marginTop: "-150px", zIndex: "1000", marginLeft: "50%", border: "1px solid black" }}>
                                        <div style={{ textAlign: "center", padding: "4px", background: "skyblue", borderRadius: "5px", fontSize: "16px" }}>
                                            Negotiation Room
                                                <button className="btn-danger" onClick={this.openNegotiationRoomWin0_hide.bind(this)} style={{ float: "right" }}>X</button>
                                            <div style={{ clear: "both" }}></div>
                                        </div>
                                        <div>
                                            <div style={{ padding: "5px", height: "320px", borderRadius: "5px", overflowY: "scroll" }}>
                                                <div style={{ width: "100%", marginTop: "10px" }}><div className="modal-content" style={{ float: "right" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                        </div>
                                                    <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div><div style={{ clear: "both" }}></div></div>
                                                <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "left" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                        </div>
                                                    <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div><div style={{ clear: "both" }}></div></div>
                                                <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "left" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                        </div>
                                                    <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div><div style={{ clear: "both" }}></div>
                                                    <div style={{ padding: "5px", margin: "5px", background: "skyblue", boxShadow: "3px 3px #333" }}> You accepted this deal above. </div>
                                                </div>
                                                <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "right" }} style={{ float: "right" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                         </div>
                                                    <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div><div style={{ clear: "both" }}></div></div>
                                                <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "right" }} style={{ float: "right" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                        </div>
                                                    <div style={{ float: "left", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div> <div style={{ clear: "both" }}></div></div>

                                            </div>
                                            <div>
                                                <table><tbody>
                                                    <tr>
                                                        <td><input type="number" className="btn-control" placeholder="The price you propose.." /></td>
                                                    </tr>
                                                    <tr>
                                                        <td><textarea className="form-control" placeholder="Your message here.." style={{ maxHeight: "70px", height: "70px", maxWidth: "350px", width: "350px" }}></textarea></td>
                                                        <td><button className="btn-primary">Send</button></td>
                                                    </tr><tr> <td><button className="btn-primary">Accept the last offer received</button></td>
                                                    </tr></tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                   
                                    <TradersSendCargoWin0 />
                                </div>
                                
                                <div style={{ padding: "6px", margin: "5px", borderRadius: "5px", boxShadow: "2px 2px #cdcdcd", border: "1px solid #cdcdcd" }}>
                                    <table>
                                        <tr>
                                            <td>Product weight:</td>
                                            <td><input type="text" className="form-control" style={{ maxWidth: "300px", width: "300px", margin: "5px" }} /></td>
                                        </tr>
                                        <tr>
                                            <td>Product volume:</td>
                                            <td><input type="text" className="form-control" style={{ maxWidth: "300px", width: "300px", margin: "5px" }} /></td>
                                        </tr>
                                        <tr>
                                            <td>Pick up location:</td>
                                            <td><input type="text" className="form-control" style={{ maxWidth: "300px", width: "300px", margin: "5px" }} /></td>
                                        </tr>
                                        <tr>
                                            <td>Cargo Additional Details</td>
                                            <td><textarea className="form-control" style={{ maxWidth: "300px", minWidth: "300px", maxHeight: "100px", minHeight: "100px", width: "300px", margin: "5px" }} ></textarea></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <button className="btn-primary">Publish this shipment job.</button>
                                            </td>
                                        </tr>

                                    </table>
                                </div>
                            </div>
                            <div id="tabWin1" className="modal-content" style={{ marginTop: "5px", padding: "6px" }}>
                                <div style={{ padding: "5px", margin: "5px", borderRadius: "5px", height: "300px", overflowY: "scroll" }}>
                                    <div id="traderCarryCargoWin1ChatRoom" style={{ display: "none", width: "60%", background: "white", position: "absolute", padding: "6px", borderRadius: "5px", marginTop: "-150px", zIndex: "1000", marginLeft: "50%", border: "1px solid black" }}>
                                        <div style={{ textAlign: "center", padding: "4px", background: "skyblue", borderRadius: "5px", fontSize: "16px" }}>
                                            Negotiation Room
                                                <button className="btn-danger" onClick={this.openNegotiationRoomWin1_hide.bind(this)} style={{ float: "right" }}>X</button>
                                            <div style={{ clear: "both" }}></div>
                                        </div>
                                        <div>
                                            <div style={{ padding: "5px", height: "320px", borderRadius: "5px", overflowY: "scroll" }}>
                                                <div style={{ width: "100%", marginTop: "10px" }}><div className="modal-content" style={{ float: "right" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                        </div>
                                                    <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div><div style={{ clear: "both" }}></div></div>
                                                <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "left" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                        </div>
                                                    <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div><div style={{ clear: "both" }}></div></div>
                                                <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "left" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                        </div>
                                                    <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div><div style={{ clear: "both" }}></div>
                                                    <div style={{ padding: "5px", margin: "5px", background: "skyblue", boxShadow: "3px 3px #333" }}> You accepted this deal above. </div>
                                                </div>
                                                <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "right" }} style={{ float: "right" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                         </div>
                                                    <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div><div style={{ clear: "both" }}></div></div>
                                                <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "right" }} style={{ float: "right" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                        </div>
                                                    <div style={{ float: "left", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div> <div style={{ clear: "both" }}></div></div>

                                            </div>
                                            <div>

                                            </div>

                                        </div>
                                    </div>
                                    <TradersSendCargoWin1 />
                                </div>
                            </div>
                            <div id="tabWin2" className="modal-content" style={{ marginTop: "5px", padding: "6px" }}>
                                <div style={{ padding: "5px", margin: "5px", borderRadius: "5px", height: "300px", overflowY: "scroll" }}>
                                    <div id="traderCarryCargoWin2ChatRoom" style={{ display: "none", width: "60%", background: "white", position: "absolute", padding: "6px", borderRadius: "5px", marginTop: "-150px", zIndex: "1000", marginLeft: "50%", border: "1px solid black" }}>
                                        <div style={{ textAlign: "center", padding: "4px", background: "skyblue", borderRadius: "5px", fontSize: "16px" }}>
                                            Negotiation Room
                                                <button className="btn-danger" onClick={this.openNegotiationRoomWin2_hide.bind(this)} style={{ float: "right" }}>X</button>
                                            <div style={{ clear: "both" }}></div>
                                        </div>
                                        <div>
                                            <div style={{ padding: "5px", height: "320px", borderRadius: "5px", overflowY: "scroll" }}>
                                                <div style={{ width: "100%", marginTop: "10px" }}><div className="modal-content" style={{ float: "right" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                        </div>
                                                    <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div><div style={{ clear: "both" }}></div></div>
                                                <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "left" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                        </div>
                                                    <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div><div style={{ clear: "both" }}></div></div>
                                                <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "left" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                        </div>
                                                    <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div><div style={{ clear: "both" }}></div>
                                                    <div style={{ padding: "5px", margin: "5px", background: "skyblue", boxShadow: "3px 3px #333" }}> You accepted this deal above. </div>
                                                </div>
                                                <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "right" }} style={{ float: "right" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                         </div>
                                                    <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div><div style={{ clear: "both" }}></div></div>
                                                <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "right" }} style={{ float: "right" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                        </div>
                                                    <div style={{ float: "left", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div> <div style={{ clear: "both" }}></div></div>

                                            </div>
                                            <div>

                                            </div>

                                        </div>
                                    </div>
                                    <TradersSendCargoWin2 />

                                </div>
                            </div>
                            <div id="tabWin3" className="modal-content" style={{ marginTop: "5px", padding: "6px" }}>
                                <div style={{ padding: "5px", margin: "5px", borderRadius: "5px", height: "300px", overflowY: "scroll" }}>
                                    <div id="traderCarryCargoWin3ChatRoom" style={{ display: "none", width: "60%", background: "white", position: "absolute", padding: "6px", borderRadius: "5px", marginTop: "-150px", zIndex: "1000", marginLeft: "50%", border: "1px solid black" }}>
                                        <div style={{ textAlign: "center", padding: "4px", background: "skyblue", borderRadius: "5px", fontSize: "16px" }}>
                                            Negotiation Room
                                                <button className="btn-danger" onClick={this.openNegotiationRoomWin3_hide.bind(this)} style={{ float: "right" }}>X</button>
                                            <div style={{ clear: "both" }}></div>
                                        </div>
                                        <div>
                                            <div style={{ padding: "5px", height: "320px", borderRadius: "5px", overflowY: "scroll" }}>
                                                <div style={{ width: "100%", marginTop: "10px" }}><div className="modal-content" style={{ float: "right" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                        </div>
                                                    <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div><div style={{ clear: "both" }}></div></div>
                                                <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "left" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                        </div>
                                                    <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div><div style={{ clear: "both" }}></div></div>
                                                <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "left" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                        </div>
                                                    <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div><div style={{ clear: "both" }}></div>
                                                    <div style={{ padding: "5px", margin: "5px", background: "skyblue", boxShadow: "3px 3px #333" }}> You accepted this deal above. </div>
                                                </div>
                                                <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "right" }} style={{ float: "right" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                         </div>
                                                    <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div><div style={{ clear: "both" }}></div></div>
                                                <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "right" }} style={{ float: "right" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                        </div>
                                                    <div style={{ float: "left", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div> <div style={{ clear: "both" }}></div></div>

                                            </div>
                                            <div>

                                            </div>

                                        </div>
                                    </div>
                                    <TradersSendCargoWin3 />

                                </div>
                            </div>
                            <div id="tabWin4" className="modal-content" style={{ marginTop: "5px", padding: "6px" }}>
                                <div style={{ padding: "5px", margin: "5px", borderRadius: "5px", height: "300px", overflowY: "scroll" }}>
                                    <div id="traderCarryCargoWin4ChatRoom" style={{ display: "none", width: "60%", background: "white", position: "absolute", padding: "6px", borderRadius: "5px", marginTop: "-150px", zIndex: "1000", marginLeft: "50%", border: "1px solid black" }}>
                                        <div style={{ textAlign: "center", padding: "4px", background: "skyblue", borderRadius: "5px", fontSize: "16px" }}>
                                            Negotiation Room
                                                <button className="btn-danger" onClick={this.openNegotiationRoomWin4_hide.bind(this)} style={{ float: "right" }}>X</button>
                                            <div style={{ clear: "both" }}></div>
                                        </div>
                                        <div>
                                            <div style={{ padding: "5px", height: "320px", borderRadius: "5px", overflowY: "scroll" }}>
                                                <div style={{ width: "100%", marginTop: "10px" }}><div className="modal-content" style={{ float: "right" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                        </div>
                                                    <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div><div style={{ clear: "both" }}></div></div>
                                                <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "left" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                        </div>
                                                    <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div><div style={{ clear: "both" }}></div></div>
                                                <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "left" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                        </div>
                                                    <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div><div style={{ clear: "both" }}></div>
                                                    <div style={{ padding: "5px", margin: "5px", background: "skyblue", boxShadow: "3px 3px #333" }}> You accepted this deal above. </div>
                                                </div>
                                                <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "right" }} style={{ float: "right" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                         </div>
                                                    <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div><div style={{ clear: "both" }}></div></div>
                                                <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "right" }} style={{ float: "right" }}>
                                                    <h4>Cedric</h4>
                                                    <div>
                                                        Proposed price:200
                                                        </div>
                                                    <div style={{ padding: "6px" }}>
                                                        digd gdgib gidnbg nig gdigb gni
                                                        </div>
                                                    <div style={{ float: "left", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                                                </div> <div style={{ clear: "both" }}></div></div>

                                            </div>
                                            <div>

                                            </div>

                                        </div>
                                    </div>
                                    
                                    <TradersSendCargoWin4 />

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>)
    }
}
export default withTracker(() => {
    return {
        tasks: Users.find({}).fetch(),
        users_i_am_in: Users.find({ username: sessionStorage.getItem('ironji_account_username') }, { sort: { text: 1 } }).fetch(),
        all_the_hot_deals: Client_hot_deals.find({}, { sort: { createdAt: - 1 } }).fetch(),
        MySchedules: Drivers_schedules.find({ client_id: global.the_id_op }, { sort: { createdAt: - 1 } }).fetch(),
    };
})(TraderSendCargo);