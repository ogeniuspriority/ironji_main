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

class BuyerMessages extends Component {
    constructor(props) {
        super(props);
    }
    renderThisAccountAvatar() {

        global.the_id_op = "";
        global.avatar_profile = "";
        var po = Users.find({ username: "" + sessionStorage.getItem('ironji_account_username') }, { sort: { text: 1 } }).fetch();
        for (var key in po) {
            if (po.hasOwnProperty(key)) {
                //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);

                if (po[key].account_type == "buyer") {
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
                                            <td><a href={'/Buyermessages'}><img className="followLinks" src="images/message.png" /><br /><span>Messages</span></a></td>
                                            <td><a href={'/Buyerprofile'}>{this.renderThisAccountAvatar()}<br /><span>Hi, {sessionStorage.getItem('ironji_account_username')}</span></a></td>
                                            <td><a href={'/BuyerDashboard'}><img className="followLinks" src="images/dashboard.jpg" /><br /><span>Dashboard</span></a></td>
                                            <td><a href={'/buyerMainPage'}><img className="followLinks" src="images/home.png" /><br /><span>Home</span></a></td>
                                            <td><a href={'/BuyerSendCargo'}><img className="followLinks" src="images/user_send_cargo.jpg" /><br /><span>Send your cargo</span></a></td></tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ width: "40%", float: "left", padding: "6px", borderRadius: "5px" }}>
                    <div style={{ textAlign: "center", padding: "4px", background: "skyblue", borderRadius: "5px", fontSize: "16px" }}>
                        Your Chatties
                    </div>
                    <div>
                        <table>
                            <tr>
                                <td><button style={{ minWidth: "70px" }} className="btn-success active">All</button></td>
                                <td><button style={{ minWidth: "70px" }} className="btn-success disabled">Buyers</button></td>
                                <td><button style={{ minWidth: "70px" }} className="btn-success disabled">Traders</button></td>
                                <td><button style={{ minWidth: "70px" }} className="btn-success disabled">Farmers</button></td>
                                <td><button style={{ minWidth: "70px" }} className="btn-success disabled">Transporters</button></td>
                            </tr>
                        </table>
                        <div style={{ padding: "5px", borderRadius: "5px", border: "1px solid black" }}>
                            <input type="text" placeholder="Search in contact" />
                        </div>
                        <div style={{ padding: "5px", height: "340px" }}>

                            <div style={{ height: "220px", overflowY: "scroll" }}>
                                <div className="modal-content contactsListSd" style={{ width: "340px", marginTop: "5px" }}>
                                    <table>
                                        <tr>
                                            <td><img className="img-circle" style={{ maxWidth: "70px", maxHeight: "70px" }} src={"images/clet.jpg"} /></td>
                                            <td>
                                                <h4>Cedric </h4>
                                                <h4>Trader</h4>
                                                <h4>Male</h4>
                                            </td><td>
                                                <div>
                                                    <span className="badge" style={{ background: "green", borderRadius: "30px", width: "40px" }}>2</span>
                                                    <div style={{ padding: "5px", boxShadow: "2px 2px #333" }}>
                                                        fo9jfsfis sfibs fsnifb
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="modal-content contactsListSd" style={{ width: "340px", marginTop: "5px" }}>
                                    <table>
                                        <tr>
                                            <td><img className="img-circle" style={{ maxWidth: "70px", maxHeight: "70px" }} src={"images/clet.jpg"} /></td>
                                            <td>
                                                <h4>Cedric </h4>
                                                <h4>Trader</h4>
                                                <h4>Male</h4>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="badge" style={{ background: "green", borderRadius: "30px", width: "40px" }}>2</span>
                                                    <div style={{ padding: "5px", boxShadow: "2px 2px #333" }}>
                                                        fo9jfsfis sfibs fsnifb
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="modal-content contactsListSd" style={{ width: "340px", marginTop: "5px" }}>
                                    <table>
                                        <tr>
                                            <td><img className="img-circle" style={{ maxWidth: "70px", maxHeight: "70px" }} src={"images/clet.jpg"} /></td>
                                            <td>
                                                <h4>Cedric </h4>
                                                <h4>Trader</h4>
                                                <h4>Male</h4>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="badge" style={{ background: "green", borderRadius: "30px", width: "40px" }}>2</span>
                                                    <div style={{ padding: "5px", boxShadow: "2px 2px #333" }}>
                                                        fo9jfsfis sfibs fsnifb
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="modal-content contactsListSd" style={{ width: "340px", marginTop: "5px" }}>
                                    <table>
                                        <tr>
                                            <td><img className="img-circle" style={{ maxWidth: "70px", maxHeight: "70px" }} src={"images/clet.jpg"} /></td>
                                            <td>
                                                <h4>Cedric </h4>
                                                <h4>Trader</h4>
                                                <h4>Male</h4>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="badge" style={{ background: "green", borderRadius: "30px", width: "40px" }}>2</span>
                                                    <div style={{ padding: "5px", boxShadow: "2px 2px #333" }}>
                                                        fo9jfsfis sfibs fsnifb
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div style={{ width: "60%", float: "left", padding: "6px", borderRadius: "5px" }}>
                    <div style={{ textAlign: "center", padding: "4px", background: "skyblue", borderRadius: "5px", fontSize: "16px" }}>
                        Chat room
                    </div>
                    <div>
                        <div style={{ padding: "5px", height: "320px", borderRadius: "5px", overflowY: "scroll" }}>
                            <div style={{ width: "100%", marginTop: "10px" }}><div className="modal-content" style={{ float: "right" }}>
                                <h4>Cedric</h4>
                                <div style={{ padding: "6px" }}>
                                    digd gdgib gidnbg nig gdigb gni
                                </div>
                                <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                            </div><div style={{ clear: "both" }}></div></div>
                            <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "right" }} style={{ float: "left" }}>
                                <h4>Cedric</h4>
                                <div style={{ padding: "6px" }}>
                                    digd gdgib gidnbg nig gdigb gni
                                </div>
                                <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                            </div><div style={{ clear: "both" }}></div></div>
                            <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "right" }} style={{ float: "right" }}>
                                <h4>Cedric</h4>
                                <div style={{ padding: "6px" }}>
                                    digd gdgib gidnbg nig gdigb gni
                                </div>
                                <div style={{ float: "right", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                            </div><div style={{ clear: "both" }}></div></div>
                            <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: "right" }} style={{ float: "right" }}>
                                <h4>Cedric</h4>
                                <div style={{ padding: "6px" }}>
                                    digd gdgib gidnbg nig gdigb gni
                                </div>
                                <div style={{ float: "left", boxShadow: "2px 2px #cdcdcd" }}>11:12 pm</div>

                            </div> <div style={{ clear: "both" }}></div></div>

                        </div>
                        <div>
                            <table>
                                <tr>
                                    <td><textarea className="form-control" placeholder="Your message here.." style={{ maxHeight: "70px", height: "70px", maxWidth: "350px", width: "350px" }}></textarea></td>
                                    <td><button className="btn-primary">Send</button></td>
                                </tr>
                            </table>
                        </div>

                    </div>
                </div>
                <div style={{ clear: "both" }}></div>
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
})(BuyerMessages);