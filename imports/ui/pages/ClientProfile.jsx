import React, { Component }
    from 'react';
import classNames from 'classnames';
import Modal from 'react-bootstrap-modal';
import { Users }
    from '../../api/users';
import { Drivers_schedules }
    from '../../api/drivers_schedules';
import { Client_hot_deals }
    from '../../api/hot_deals';
import { withTracker }
    from 'meteor/react-meteor-data';
import DatePicker from 'react-datepicker';
import moment from 'react-moment';
import 'moment-timezone';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import { render }
    from 'react-dom';
import Switch from 'react-toggle-switch';
import "react-toggle-switch/dist/css/switch.min.css";
import { Button, Popover, PopoverHeader, PopoverBody }
    from 'reactstrap';
import { geolocated } from 'react-geolocated';
//import {TrackerReact} from 'ultimatejs:tracker-react';
import { progressBarFetch, setOriginalFetch } from 'react-fetch-progressbar';
import { ProgressBar } from 'react-fetch-progressbar';

// Let react-fetch-progressbar know what the original fetch is.
setOriginalFetch(window.fetch);

/* 
  Now override the fetch with progressBarFetch, so the ProgressBar
  knows how many requests are currently active.
*/
window.fetch = progressBarFetch;

class DriverMainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.ajaxObj = this.ajaxObj.bind(this);
        this.ajaxReturn = this.ajaxReturn.bind(this);
        //-----------upload image to php remote server---
    }

    componentDidMount() {
        //---     


        //---

        if (sessionStorage.length == 0) {
            window.open("/", "_self");
        }
        console.log(sessionStorage.getItem('ironji_account_username'));


    }

    uploadImageToRemoteServer() {
        var file = document.getElementById("test-input").files[0];
        if (!file) {

        } else {
            var fd = new FormData();
            fd.append("imgForm", file);
            fetch("https://map.ogeniuspriority.com/upload_scripts/upload_images_avatar.php", {
                mode: 'cors',
                method: "POST",
                body: fd
            }).then(response => response.json())
                .then(resData => {
                    var TheTradersData = JSON.parse(JSON.stringify(resData));
                    var theFinalData = TheTradersData['avtar'];
                    if (TheTradersData.avtar.includes("notokay")) {
                    } else {
                        alert(theFinalData.toString().split("~~")[0]);
                    }

                });
        }

    }

    ajaxObj(meth, url) {
        var x = new XMLHttpRequest();
        x.open(meth, url, true);
        x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        return x;
    }
    ajaxReturn(x) {
        if (x.readyState == 4 && x.status == 200) {
            return true;
        }
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
                                            <td><a href={'/Drivermessages'}><img className="followLinks" src="images/message.png" /><br /><span>Messages</span></a></td>
                                            <td><a href={'/Driverprofile'}><img className="followLinks" src="images/Mugabo Shyaka Cedric.jpg" /><br /><span>Hi, {sessionStorage.getItem('ironji_account_username')}</span></a></td>
                                            <td><a href={'/TraderDashboard'}><img className="followLinks" src="images/dashboard.jpg" /><br /><span>Dashboard</span></a></td>
                                            <td><a href={'/clientMainPage'}><img className="followLinks" src="images/home.png" /><br /><span>Home</span></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row" id="main" >
                <div className="col-md-3" id="leftPanel">
                    <div className="row">
                        <div >
                            <div>
                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLnic1bYmpSEVXQLoSe4no1QtmyLbECsG48M3fZSFTiEF-uE"} alt="Texto Alternativo" className="img-circle img-thumbnail" />
                                <form id="imgForm">
                                    <input onChange={this.uploadImageToRemoteServer.bind(this)} id="test-input" style={{ width: "0px" }} type="file" className="custom-file-input" />
                                    <ProgressBar style={{ backgroundColor: 'red', height: '10px' }} />

                                </form>
                                <h5>Gopinath Perumal</h5>
                                <div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 well" id="rightPanel">
                    <div className="row">
                        <div className="col-md-12">
                            <form role="form">

                                <div className="colorgraph">
                                    <div className="form-group">
                                        <input type="number" name="idnumber" id="idnumber" className="form-control input-sm" placeholder="ID Number" tabIndex="4" />
                                        <a href={"#"} className="btn btn-info btn-sm">
                                            <span className="glyphicon glyphicon-pencil"></span> Edit</a>
                                        <a href={"#"} className="btn btn-info btn-sm">
                                            <span className="glyphicon glyphicon-ok"></span> Ok</a>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="surname_name" id="surname_name" className="form-control input-sm" placeholder="Surname Name" tabIndex="1" />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="last_name" id="last_name" className="form-control input-sm" placeholder="Last Name" tabIndex="2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" id="email" className="form-control input-sm" placeholder="Email Address" tabIndex="4" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="where_y_wrk_the_most" id="where_y_wrk_the_most" className="form-control input-sm" placeholder="Where you work the most?" tabIndex="4" />
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" name="phone_nber" id="phone_nber" className="form-control input-sm" placeholder="Phone number" tabIndex="4" />
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-9 col-sm-3 col-md-3">
                                            <div className="form-group">
                                                <input type="text" name="province" id="province" className="form-control input-sm" placeholder="Province" tabIndex="1" />
                                            </div>
                                        </div>
                                        <div className="col-xs-9 col-sm-3 col-md-3">
                                            <div className="form-group">
                                                <input type="text" name="district" id="district" className="form-control input-sm" placeholder="District" tabIndex="2" />
                                            </div>
                                        </div>
                                        <div className="col-xs-9 col-sm-3 col-md-3">
                                            <div className="form-group">
                                                <input type="text" name="sector" id="district" className="form-control input-sm" placeholder="Sector" tabIndex="2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="username" id="username" className="form-control input-sm" placeholder="Username" tabIndex="4" />
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="password" name="password" id="password" className="form-control input-sm" placeholder="New Password" tabIndex="5" />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="password" name="password_confirmation" id="password_confirmation" className="form-control input-sm" placeholder="Confirm New Password" tabIndex="6" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="colorgraph">
                                        <div className="row">
                                            <div className="col-xs-12 col-md-6"></div>
                                            <div className="col-xs-12 col-md-6"><a href={"#"} className="btn btn-success btn-block btn-sm">Save</a></div>
                                        </div>

                                    </div>
                                </div>
                            </form>
                            <div className="modal fade" id="t_and_c_m" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                            <h4 className="modal-title" id="myModalLabel">Terms & Conditions</h4>
                                        </div>
                                        <div className="modal-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary" data-dismiss="modal">I Agree</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
        );
    }

}
export default withTracker(() => {
    return {
        tasks: Users.find({}).fetch(),
        users_i_am_in: Users.find({ username: sessionStorage.getItem('ironji_account_username') }, { sort: { text: 1 } }).fetch(),
        all_the_hot_deals: Client_hot_deals.find({}, { sort: { createdAt: - 1 } }).fetch(),
        MySchedules: Drivers_schedules.find({ client_id: global.the_id_op }, { sort: { createdAt: - 1 } }).fetch(),
    };
})(DriverMainPage);

