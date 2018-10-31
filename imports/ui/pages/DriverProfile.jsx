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



class DriverMainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_number_enabled: false,
            surname_enabled: false,
            lastname_enabled: false,
            email_enabled: false,
            plate_number_enabled: false,
            occupation_enabled: false,
            phonenumber_enabled: false,
            occupation_enabled: false,
            plate_number_enabled: false,
            province_enabled: false,
            district_enabled: false,
            sector_enabled: false,
            username_enabled: false,
            password_enabled: false,
            password_retype_enabled: false,

            id_number_enabled_edit_menu_status: false,
            surname_enabled_edit_menu_status: false,
            lastname_enabled_edit_menu_status: false,
            email_enabled_edit_menu_status: false,
            plate_number_enabled_edit_menu_status: false,
            occupation_enabled_edit_menu_status: false,
            phonenumber_enabled_edit_menu_status: false,
            occupation_enabled_edit_menu_status: false,
            plate_number_enabled_edit_menu_status: false,
            province_enabled_edit_menu_status: false,
            district_enabled_edit_menu_status: false,
            sector_enabled_edit_menu_status: false,
            username_enabled_edit_menu_status: false,
            password_enabled_edit_menu_status: false,
            password_retype_enabled_edit_menu_status: false,


        };
        this.ajaxObj = this.ajaxObj.bind(this);
        this.ajaxReturn = this.ajaxReturn.bind(this);
        this.renderThisAccountAvatar = this.renderThisAccountAvatar.bind(this);
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

    hideThisEditWindow(inputAffil, event) {        
        //--------
        setTimeout(function () {
            var divsToHide = document.getElementsByClassName("theeditorsProfile"); //divsToHide is an array
            //alert(divsToHide.length);
            for (var i = 0; i < divsToHide.length; i++) {
                //divsToHide[i].style.visibility = "hidden"; // or
                divsToHide[i].style.display = "none"; // depending on what you're doing

            }

        }, 300);


    }

    editThisProfileIntel(inputAffil, event) {        
        document.getElementById(inputAffil).style.display = "block";
        document.getElementById(inputAffil).style.width = "auto";
        document.getElementById(inputAffil).style.height = "auto";
       


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
                        //alert(theFinalData.toString().split("~~")[0]);
                        var theUpImage = theFinalData.toString().split("~~")[0];
                        //---------------
                        Users.update({ _id: global.the_id_op }, {
                            $set: { avatar_profile: "" + theUpImage }
                        }, function (err, result) {
                            if (err) {

                            } else {
                                console.log(result);
                            }
                        });
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
    renderThisAccountAvatar() {

        global.the_id_op = "";
        global.avatar_profile = "";

        global.text = "";
        global.createdAt = "";
        global.account_type = "";
        global.currentLatitude = "";
        global.currentLongitude = "";
        global.accountConfirmed = "";
        global.id_number = "";
        global.surname = "";
        global.lastname = "";
        global.email = "";
        global.plate_number = "";
        global.occupation = "";
        global.phonenumber = "";
        global.province = "";
        global.district = "";
        global.sector = "";
        global.username = "";
        var po = Users.find({ username: "" + sessionStorage.getItem('ironji_account_username') }, { sort: { text: 1 } }).fetch();
        for (var key in po) {
            if (po.hasOwnProperty(key)) {
                //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);

                if (po[key].account_type == "driver") {
                    global.the_id_op = po[key]._id;
                    global.avatar_profile = po[key].avatar_profile;
                    global.text = po[key].text;
                    global.createdAt = po[key].createdAt;
                    global.account_type = po[key].account_type;
                    global.currentLatitude = po[key].currentLatitude;
                    global.currentLongitude = po[key].currentLongitude;
                    global.accountConfirmed = po[key].accountConfirmed;
                    global.id_number = po[key].id_number;
                    global.surname = po[key].surname;
                    global.lastname = po[key].lastname;
                    global.email = po[key].email;
                    global.plate_number = po[key].plate_number;
                    global.occupation = po[key].occupation;
                    global.phonenumber = po[key].phonenumber;
                    global.province = po[key].province;
                    global.district = po[key].district;
                    global.sector = po[key].sector;
                    global.username = po[key].username;
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
    renderThisAccountAvatarEdit() {

        global.the_id_op = "";
        global.avatar_profile = "";
        var po = Users.find({ username: "" + sessionStorage.getItem('ironji_account_username') }, { sort: { text: 1 } }).fetch();
        for (var key in po) {
            if (po.hasOwnProperty(key)) {
                //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);

                if (po[key].account_type == "driver") {
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
        return (<img style={{ maxHeight: "250px" }} className="img-circle img-thumbnail" src={url} />);
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
                                            <td><a href={'/Driverprofile'}>{this.renderThisAccountAvatar()}<br /><span>Hi, {sessionStorage.getItem('ironji_account_username')}</span></a></td>
                                            <td><a href={'/DriverDashboard'}><img className="followLinks" src="images/dashboard.jpg" /><br /><span>Dashboard</span></a></td>
                                            <td><a href={'/driverMainPage'}><img className="followLinks" src="images/home.png" /><br /><span>Home</span></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="edit_profile_inputs_skin" id="edit_this_profile_input_data" style={{ display: "none", position: "absolute", zIndex: 1200, background: "white", borderRadius: "5px" }}>

                <div style={{ padding: "5px", marginTop: "20px" }}>
                    <h4>Info About Input</h4>
                    <div>
                        sfjih9fbs fmsofhbs fsj0hfbs fosjhbf
                    </div>

                </div>
            </div>

            <div className="row" id="main" >
                <div className="col-md-3" id="leftPanel">
                    <div className="row">
                        <div >
                            <div>
                                {this.renderThisAccountAvatarEdit()}
                                <form id="imgForm">
                                    <input onChange={this.uploadImageToRemoteServer.bind(this)} id="test-input" style={{ width: "auto" }} type="file" className="custom-file-input" />
                                </form>
                                <h3>{global.surname} {global.lastname}<br />{global.username}</h3>
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
                                    <div onClick={this.editThisProfileIntel.bind(this, "idnber_edit")} className="form-group">
                                        <input disabled={(this.state.id_number_enabled) ? "" : "disabled"} type="number" value={global.id_number} name="idnumber" id="idnumber" className="form-control input-sm" placeholder="ID Number" tabIndex="4" />
                                        <div className="theeditorsProfile" id="idnber_edit">
                                            <input type="button" value="x" onClick={this.hideThisEditWindow.bind(this, "idnber_edit")} className="btn-danger" style={{ float: "right" }} />
                                            
                                            <div>
                                                <h4>Edit id number</h4>
                                                <input type="number" value={global.id_number} name="idnumber_new" id="idnumber_new" className="form-control input-sm" placeholder="ID Number" tabIndex="4" />
                                                <input className="btn-primary" type="button" value="Update" />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6 col-md-6">
                                            <div onClick={this.editThisProfileIntel.bind(this, "surname_edit")} className="form-group">
                                                <input disabled={(this.state.surname_enabled) ? "" : "disabled"} value={global.surname} type="text" name="surname_name" id="surname_name" className="form-control input-sm" placeholder="Surname Name" tabIndex="1" />
                                            </div>
                                            <div className="theeditorsProfile" id="surname_edit">
                                                <input type="button" value="x" onClick={this.hideThisEditWindow.bind(this, "surname_edit")} className="btn-danger" style={{ float: "right" }} />
                                                
                                                <div>
                                                    <h4>Edit Surname</h4>
                                                    <input type="text" value={global.surname} name="surname_name_new" id="surname_name_new" className="form-control input-sm" placeholder="Surname Name" tabIndex="4" />
                                                    <input type="button" className="btn-primary" value="Update" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-6">
                                            <div onClick={this.editThisProfileIntel.bind(this, "lastname_edit")} className="form-group">
                                                <input disabled={(this.state.lastname_enabled) ? "" : "disabled"} type="text" value={global.lastname} name="last_name" id="last_name" className="form-control input-sm" placeholder="Last Name" tabIndex="2" />
                                            </div>
                                            <div className="theeditorsProfile" id="lastname_edit">
                                                <input type="button" value="x" onClick={this.hideThisEditWindow.bind(this, "lastname_edit")} className="btn-danger" style={{ float: "right" }} />
                                                
                                                <div>
                                                    <h4>Edit Lastname</h4>
                                                    <input type="text" value={global.lastname} name="last_name_new" id="last_name_new" className="form-control input-sm" placeholder="Last Name" tabIndex="4" />
                                                    <input type="button" className="btn-primary" value="Update" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={this.editThisProfileIntel.bind(this, "email_edit")} className="form-group">
                                        <input disabled={(this.state.email_enabled) ? "" : "disabled"} value={global.email} type="email" name="email" className="form-control input-sm" placeholder="Email Address" tabIndex="4" />
                                        <div className="theeditorsProfile" id="email_edit">
                                            <input type="button" value="x" onClick={this.hideThisEditWindow.bind(this, "email_edit")} className="btn-danger" style={{ float: "right" }} />
                                            
                                            <div>
                                                <h4>Edit Email</h4>
                                                <input  value={global.email} type="email" name="email_new" className="form-control input-sm" placeholder="Email Address" tabIndex="4" />
                                                <input type="button" className="btn-primary" value="Update" />
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={this.editThisProfileIntel.bind(this, "plate_number_edit")} className="form-group">
                                        <input disabled={(this.state.plate_number_enabled) ? "" : "disabled"} value={global.plate_number} type="text" name="email" id="email" className="form-control input-sm" placeholder="License Plate Number" tabIndex="4" />
                                        <div className="theeditorsProfile" id="plate_number_edit">
                                            <input type="button" value="x" onClick={this.hideThisEditWindow.bind(this, "plate_number_edit")} className="btn-danger" style={{ float: "right" }} />
                                            
                                            <div>
                                                <h4>Edit Plate number</h4>
                                                <input  value={global.plate_number} type="text" name="email_new" id="email_new" className="form-control input-sm" placeholder="License Plate Number" tabIndex="4" />
                                                <input type="button" className="btn-primary" value="Update" />
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={this.editThisProfileIntel.bind(this, "occupation_edit")} className="form-group">
                                        <input disabled={(this.state.occupation_enabled) ? "" : "disabled"} value={global.occupation} type="text" name="where_y_wrk_the_most" id="where_y_wrk_the_most" className="form-control input-sm" placeholder="Where you work the most?" tabIndex="4" />
                                        <div className="theeditorsProfile" id="occupation_edit">
                                            <input type="button" value="x" onClick={this.hideThisEditWindow.bind(this, "occupation_edit")} className="btn-danger" style={{ float: "right" }} />
                                            
                                            <div>
                                                <h4>Edit occupation</h4>
                                                <input  value={global.occupation} type="text" name="where_y_wrk_the_most_new" id="where_y_wrk_the_most_new" className="form-control input-sm" placeholder="Where you work the most?" tabIndex="4" />
                                                <input type="button" className="btn-primary" value="Update" />
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={this.editThisProfileIntel.bind(this, "phonenumber_edit")} className="form-group">
                                        <input disabled={(this.state.phonenumber_enabled) ? "" : "disabled"} value={global.phonenumber} type="tel" name="phone_nber" id="phone_nber" className="form-control input-sm" placeholder="Phone number" tabIndex="4" />
                                        <div className="theeditorsProfile" id="phonenumber_edit">
                                            <input type="button" value="x" onClick={this.hideThisEditWindow.bind(this, "phonenumber_edit")} className="btn-danger" style={{ float: "right" }} />
                                            
                                            <div>
                                                <h4>Edit phone number</h4>
                                                <input  value={global.phonenumber} type="tel" name="phone_nber_new" id="phone_nber_new" className="form-control input-sm" placeholder="Phone number" tabIndex="4" />
                                                <input type="button" className="btn-primary" value="Update" />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-9 col-sm-3 col-md-3">
                                            <div onClick={this.editThisProfileIntel.bind(this, "province_edit")} className="form-group">
                                                <input disabled={(this.state.province_enabled) ? "" : "disabled"} value={global.province} type="text" name="province" id="province" className="form-control input-sm" placeholder="Province" tabIndex="1" />
                                                <div className="theeditorsProfile" id="province_edit">
                                                    <input type="button" value="x" onClick={this.hideThisEditWindow.bind(this, "province_edit")} className="btn-danger" style={{ float: "right" }} />
                                                    
                                                    <div>
                                                        <h4>Edit province</h4>
                                                        <input  value={global.province} type="text" name="province_new" id="province_new" className="form-control input-sm" placeholder="Province" tabIndex="1" />
                                                        <input type="button" className="btn-primary" value="Update" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div onClick={this.editThisProfileIntel.bind(this, "district_edit")} className="col-xs-9 col-sm-3 col-md-3">
                                            <div className="form-group">
                                                <input disabled={(this.state.district_enabled) ? "" : "disabled"} value={global.district} type="text" name="district" className="form-control input-sm" placeholder="District" tabIndex="2" />
                                                <div className="theeditorsProfile" id="district_edit">
                                                    <input type="button" value="x" onClick={this.hideThisEditWindow.bind(this, "district_edit")} className="btn-danger" style={{ float: "right" }} />
                                                    
                                                    <div>
                                                        <h4>Edit district</h4>
                                                        <input  value={global.district} type="text" name="district_new" className="form-control input-sm" placeholder="District" tabIndex="2" />
                                                        <input type="button" className="btn-primary" value="Update" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div onClick={this.editThisProfileIntel.bind(this, "sector_edit")} className="col-xs-9 col-sm-3 col-md-3">
                                            <div className="form-group">
                                                <input disabled={(this.state.sector_enabled) ? "" : "disabled"} value={global.sector} type="text" name="sector" id="district" className="form-control input-sm" placeholder="Sector" tabIndex="2" />
                                                <div className="theeditorsProfile" id="sector_edit">
                                                    <input type="button" value="x" onClick={this.hideThisEditWindow.bind(this, "sector_edit")} className="btn-danger" style={{ float: "right" }} />
                                                  
                                                    <div>
                                                        <h4>Edit sector</h4>
                                                        <input  value={global.sector} type="text" name="sector" id="district_new" className="form-control input-sm" placeholder="Sector" tabIndex="2" />
                                                        <input type="button" className="btn-primary" value="Update" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={this.editThisProfileIntel.bind(this, "username_edit")} className="form-group">
                                        <input disabled={(this.state.username_enabled) ? "" : "disabled"} value={global.username} type="text" name="username" id="username" className="form-control input-sm" placeholder="Username" tabIndex="4" />
                                        <div className="theeditorsProfile" id="username_edit">
                                            <input type="button" value="x" onClick={this.hideThisEditWindow.bind(this, "username_edit")} className="btn-danger" style={{ float: "right" }} />
                                           
                                            <div>
                                                <h4>Edit username</h4>
                                                <input  value={global.username} type="text" name="username_new" id="username_new" className="form-control input-sm" placeholder="Username" tabIndex="4" />
                                                <input type="button" className="btn-primary" value="Update" />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6 col-md-6">
                                            <div onClick={this.editThisProfileIntel.bind(this, "password_edit")} className="form-group">
                                                <input disabled={(this.state.password_enabled) ? "" : "disabled"} type="password" name="password" id="password" className="form-control input-sm" placeholder="New Password" tabIndex="5" />
                                                <div className="theeditorsProfile" id="password_edit">
                                                    <input type="button" value="x" onClick={this.hideThisEditWindow.bind(this, "password_edit")} className="btn-danger" style={{ float: "right" }} />
                                                    
                                                    <div>
                                                        <h4>Edit password</h4>
                                                        <input  type="password" name="password" id="password_new" className="form-control input-sm" placeholder="New Password" tabIndex="5" />
                                                        <input type="button" className="btn-primary" value="Update" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-6">
                                            <div onClick={this.editThisProfileIntel.bind(this, "password_retype_edit")} className="form-group">
                                                <input disabled={(this.state.password_retype_enabled) ? "" : "disabled"} type="password" name="password_confirmation" id="password_confirmation" className="form-control input-sm" placeholder="Confirm New Password" tabIndex="6" />
                                                <div className="theeditorsProfile" id="password_retype_edit">
                                                    <input type="button" value="x" onClick={this.hideThisEditWindow.bind(this, "password_retype_edit")} className="btn-danger" style={{ float: "right" }} />
                                                    
                                                    <div>
                                                        <h4>Edit Retype password</h4>
                                                        <input  type="password" name="password_confirmation" id="password_confirmation_new" className="form-control input-sm" placeholder="Confirm New Password" tabIndex="6" />
                                                        <input type="button" className="btn-primary" value="Update" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="colorgraph">
                                        <div className="row">
                                            <div className="col-xs-12 col-md-6"></div>
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

