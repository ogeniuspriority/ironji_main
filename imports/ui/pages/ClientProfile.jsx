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
    //---------------

    updateMyProfileData(whichj, event) {
        var idnumber_new = this.refs.idnumber_new.value;
        var surname_name_new = this.refs.surname_name_new.value;
        var last_name_new = this.refs.last_name_new.value;
        var email_new = this.refs.email_new.value;
        var plate_nber_new = this.refs.plate_nber_new.value;
        var occupation_new = this.refs.occupation_new.value;
        var phone_nber_new = this.refs.phone_nber_new.value;
        var province_new = this.refs.province_new.value;
        var district_new = this.refs.district_new.value;
        var sector_new = this.refs.sector_new.value;
        var username_new = this.refs.username_new.value;
        global.password_new = this.refs.password_new.value;
        var password_confirmation_new = this.refs.password_confirmation_new.value;
        //-----------
        var district_new = this.refs.district_new.value;
        //alert(idnumber_new + "-" + surname_name_new + "-" + last_name_new + "-" + email_new + "-" + plate_nber_new + "-" + occupation_new + "-" + phone_nber_new + "-" + province_new + "-" + district_new + "-" + sector_new + "-" + global.password_new + "-" + password_confirmation_new);
        //---global.the_id_op-
        /*
         *  var theData = {
                    "text": "Lucky John",
                    "createdAt": new Date(),
                    "account_type": "driver",
                    "currentLatitude": "-1.9443547",
                    "currentLongitude": "30.089413699999998",
                    "accountConfirmed": "1",
                    "id_number": global.id_number,
                    "surname": global.surname,
                    "lastname": global.lastname,
                    "email": global.email,
                    "plate_number": global.plate_number,
                    "occupation": global.occupation,
                    "phonenumber": global.phonenumber,
                    "province": global.province,
                    "district": global.district,
                    "sector": global.sector,
                    "username": global.username,
                    "password": global.password,
                };window.open("/driverMainPage", "_self");waiting_loading */

        //document.getElementById("waiting_loading").style.display = "block";



        if (whichj.includes("id_nber")) {


            if (idnumber_new != "") {
                document.getElementById("waiting_loading").style.display = "block";

                Users.update({ _id: global.the_id_op }, {
                    $set: { id_number: idnumber_new }
                }, function (err, result) {
                    if (err) {
                        setTimeout(function () {
                            document.getElementById("waiting_loading").style.display = "none";
                        }, 500);

                    } else {
                        //console.log(result);
                        window.open("/Clientprofile", "_self");

                    }
                });
            } else {
                //------------
                document.getElementById("dom_messenger").style.display = "block";
                document.getElementById("dom_messenger_data").innerHTML = "Id number field empty!";
                setTimeout(function () {
                    document.getElementById("dom_messenger").style.display = "none";
                }, 3000);

            }

        } else if (whichj.includes("surname")) {

            if (surname_name_new != "") {
                document.getElementById("waiting_loading").style.display = "block";

                Users.update({ _id: global.the_id_op }, {
                    $set: { surname: surname_name_new }
                }, function (err, result) {
                    if (err) {
                        setTimeout(function () {
                            document.getElementById("waiting_loading").style.display = "none";
                        }, 500);

                    } else {
                        //console.log(result);
                        window.open("/Clientprofile", "_self");

                    }
                });

            } else {
                document.getElementById("dom_messenger").style.display = "block";
                document.getElementById("dom_messenger_data").innerHTML = "Surname field empty!";
                setTimeout(function () {
                    document.getElementById("dom_messenger").style.display = "none";
                }, 3000);
            }
        } else if (whichj.includes("plate_nber")) {

            if (plate_nber_new != "") {
                document.getElementById("waiting_loading").style.display = "block";


                Users.update({ _id: global.the_id_op }, {
                    $set: { plate_number: plate_nber_new }
                }, function (err, result) {
                    if (err) {
                        setTimeout(function () {
                            document.getElementById("waiting_loading").style.display = "none";
                        }, 500);

                    } else {
                        //console.log(result);
                        window.open("/Clientprofile", "_self");

                    }
                });

            } else {
                document.getElementById("dom_messenger").style.display = "block";
                document.getElementById("dom_messenger_data").innerHTML = "Plate number field empty!";
                setTimeout(function () {
                    document.getElementById("dom_messenger").style.display = "none";
                }, 3000);
            }
        } else if (whichj.includes("district")) {

            if (district_new != "") {
                document.getElementById("waiting_loading").style.display = "block";

                Users.update({ _id: global.the_id_op }, {
                    $set: { district: district_new }
                }, function (err, result) {
                    if (err) {
                        setTimeout(function () {
                            document.getElementById("waiting_loading").style.display = "none";
                        }, 500);

                    } else {
                        //console.log(result);
                        window.open("/Clientprofile", "_self");

                    }
                });
            } else {
                document.getElementById("dom_messenger").style.display = "block";
                document.getElementById("dom_messenger_data").innerHTML = "District field empty!";
                setTimeout(function () {
                    document.getElementById("dom_messenger").style.display = "none";
                }, 3000);
            }
        } else if (whichj.includes("username")) {

            if (username_new != "") {
                global.taken_op = "";
                var po = Users.find({ username: username_new }, { sort: { text: 1 } }).fetch();
                for (var key in po) {
                    if (po.hasOwnProperty(key)) {
                        //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);
                        global.taken_op = "Okay";
                    }
                }

                if (global.taken_op == "Okay") {

                    document.getElementById("dom_messenger").style.display = "block";
                    document.getElementById("dom_messenger_data").innerHTML = "Username not available, choose new one!";
                    setTimeout(function () {
                        document.getElementById("dom_messenger").style.display = "none";
                    }, 3000);

                } else {


                    document.getElementById("waiting_loading").style.display = "block";

                    Users.update({ _id: global.the_id_op }, {
                        $set: { username: username_new }
                    }, function (err, result) {
                        if (err) {
                            setTimeout(function () {
                                document.getElementById("waiting_loading").style.display = "none";
                            }, 500);

                        } else {
                            //console.log(result);
                            window.open("/Clientprofile", "_self");

                        }
                    });
                }
            } else {
                document.getElementById("dom_messenger").style.display = "block";
                document.getElementById("dom_messenger_data").innerHTML = "Username field empty!";
                setTimeout(function () {
                    document.getElementById("dom_messenger").style.display = "none";
                }, 3000);
            }
        } else if (whichj.includes("phone_nber")) {

            if (phone_nber_new != "") {
                document.getElementById("waiting_loading").style.display = "block";

                Users.update({ _id: global.the_id_op }, {
                    $set: { phonenumber: phone_nber_new }
                }, function (err, result) {
                    if (err) {
                        setTimeout(function () {
                            document.getElementById("waiting_loading").style.display = "none";
                        }, 500);

                    } else {
                        //console.log(result);
                        window.open("/Clientprofile", "_self");

                    }
                });
            } else {
                document.getElementById("dom_messenger").style.display = "block";
                document.getElementById("dom_messenger_data").innerHTML = "Phone number field empty!";
                setTimeout(function () {
                    document.getElementById("dom_messenger").style.display = "none";
                }, 3000);
            }
        } else if (whichj.includes("password_retype")) {

            if (password_confirmation_new != "") {

                if (global.password_new == password_confirmation_new) {

                    document.getElementById("waiting_loading").style.display = "block";

                    Users.update({ _id: global.the_id_op }, {
                        $set: { password: password_confirmation_new }
                    }, function (err, result) {
                        if (err) {
                            setTimeout(function () {
                                document.getElementById("waiting_loading").style.display = "none";
                            }, 500);

                        } else {
                            //console.log(result);
                            window.open("/Clientprofile", "_self");

                        }
                    });
                } else {
                    document.getElementById("dom_messenger").style.display = "block";
                    document.getElementById("dom_messenger_data").innerHTML = "Passwords do not match!";
                    setTimeout(function () {
                        document.getElementById("dom_messenger").style.display = "none";
                    }, 3000);
                }
            } else {
                document.getElementById("dom_messenger").style.display = "block";
                document.getElementById("dom_messenger_data").innerHTML = "Password confirmation field empty!";
                setTimeout(function () {
                    document.getElementById("dom_messenger").style.display = "none";
                }, 3000);
            }

        } else if (whichj.includes("lastname")) {

            if (last_name_new != "") {
                document.getElementById("waiting_loading").style.display = "block";

                Users.update({ _id: global.the_id_op }, {
                    $set: { lastname: last_name_new }
                }, function (err, result) {
                    if (err) {
                        setTimeout(function () {
                            document.getElementById("waiting_loading").style.display = "none";
                        }, 500);

                    } else {
                        //console.log(result);
                        window.open("/Clientprofile", "_self");

                    }
                });
            } else {
                document.getElementById("dom_messenger").style.display = "block";
                document.getElementById("dom_messenger_data").innerHTML = "Lastname field empty!";
                setTimeout(function () {
                    document.getElementById("dom_messenger").style.display = "none";
                }, 3000);
            }
        } else if (whichj.includes("email")) {
            if (email_new != "") {
                document.getElementById("waiting_loading").style.display = "block";

                Users.update({ _id: global.the_id_op }, {
                    $set: { email: email_new }
                }, function (err, result) {
                    if (err) {
                        setTimeout(function () {
                            document.getElementById("waiting_loading").style.display = "none";
                        }, 500);

                    } else {
                        //console.log(result);
                        window.open("/Clientprofile", "_self");

                    }
                });
            } else {
                document.getElementById("dom_messenger").style.display = "block";
                document.getElementById("dom_messenger_data").innerHTML = "Email field empty!";
                setTimeout(function () {
                    document.getElementById("dom_messenger").style.display = "none";
                }, 3000);
            }
        } else if (whichj.includes("occupation")) {
            if (occupation_new != "") {
                document.getElementById("waiting_loading").style.display = "block";

                Users.update({ _id: global.the_id_op }, {
                    $set: { occupation: occupation_new }
                }, function (err, result) {
                    if (err) {
                        setTimeout(function () {
                            document.getElementById("waiting_loading").style.display = "none";
                        }, 500);

                    } else {
                        //console.log(result);
                        window.open("/Clientprofile", "_self");

                    }
                });
            } else {
                document.getElementById("dom_messenger").style.display = "block";
                document.getElementById("dom_messenger_data").innerHTML = "Occupation field empty!";
                setTimeout(function () {
                    document.getElementById("dom_messenger").style.display = "none";
                }, 3000);
            }
        } else if (whichj.includes("province")) {

            if (province_new != "") {
                document.getElementById("waiting_loading").style.display = "block";

                Users.update({ _id: global.the_id_op }, {
                    $set: { province: province_new }
                }, function (err, result) {
                    if (err) {
                        setTimeout(function () {
                            document.getElementById("waiting_loading").style.display = "none";
                        }, 500);

                    } else {
                        //console.log(result);
                        window.open("/Clientprofile", "_self");

                    }
                });
            } else {
                document.getElementById("dom_messenger").style.display = "block";
                document.getElementById("dom_messenger_data").innerHTML = "Province field empty!";
                setTimeout(function () {
                    document.getElementById("dom_messenger").style.display = "none";
                }, 3000);
            }
        } else if (whichj.includes("sector")) {

            if (sector_new != "") {
                document.getElementById("waiting_loading").style.display = "block";
                Users.update({ _id: global.the_id_op }, {
                    $set: { sector: sector_new }
                }, function (err, result) {
                    if (err) {
                        setTimeout(function () {
                            document.getElementById("waiting_loading").style.display = "none";
                        }, 500);

                    } else {
                        //console.log(result);
                        window.open("/Clientprofile", "_self");

                    }
                });
            } else {

            }
        } else if (whichj.includes("password")) {
            //--global.password_new
            if (global.password_new != "") {
                setTimeout(function () {
                    var divsToHide = document.getElementsByClassName("theeditorsProfile"); //divsToHide is an array
                    //alert(divsToHide.length);
                    for (var i = 0; i < divsToHide.length; i++) {
                        //divsToHide[i].style.visibility = "hidden"; // or
                        divsToHide[i].style.display = "none"; // depending on what you're doing

                    }

                }, 300);
            } else {
                document.getElementById("dom_messenger").style.display = "block";
                document.getElementById("dom_messenger_data").innerHTML = "Password field empty!";
                setTimeout(function () {
                    document.getElementById("dom_messenger").style.display = "none";
                }, 3000);
            }
        }


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
    //--------------------

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

                if (po[key].account_type == "client") {
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
    }

    renderThisAccountAvatarEdit() {

        global.the_id_op = "";
        global.avatar_profile = "";
        var po = Users.find({ username: "" + sessionStorage.getItem('ironji_account_username') }, { sort: { text: 1 } }).fetch();
        for (var key in po) {
            if (po.hasOwnProperty(key)) {
                //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);

                if (po[key].account_type == "client") {
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
                                            <td><a href={'/Clientmessages'}><img className="followLinks" src="images/message.png" /><br /><span>Messages</span></a></td>
                                            <td><a href={'/Clientprofile'}>{this.renderThisAccountAvatar()}<br /><span>Hi, {sessionStorage.getItem('ironji_account_username')}</span></a></td>
                                            <td><a href={'/TraderDashboard'}><img className="followLinks" src="images/dashboard.jpg" /><br /><span>Dashboard</span></a></td>
                                            <td><a href={'/clientMainPage'}><img className="followLinks" src="images/home.png" /><br /><span>Home</span></a></td>
                                            <td><a href={'/SendCargo'}><img className="followLinks" src="images/user_send_cargo.jpg" /><br /><span>Send your cargo</span></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row" id="main" >
                <div id="waiting_loading" className="center-block" style={{ display: "none", position: "fixed", zIndex: 2000, background: "white", padding: "10px", borderRadius: "5px", marginLeft: "45%", border: "1px solid #333333" }}>
                    <div style={{ fontSize: "16px", fontWeight: "bolder" }}>Thinking ....</div>
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
                <div id="dom_messenger" className="center-block  domMessenger alert alert-info" style={{ display: "none", position: "fixed", zIndex: 2005, background: "white", padding: "10px", borderRadius: "5px", marginLeft: "45%", border: "1px solid #333333" }}>
                    <div id="dom_messenger_data" style={{ fontSize: "16px", fontWeight: "bolder" }}>Not send</div>

                </div>
                <div className="col-md-3" id="leftPanel">
                    <div className="row">
                        <div >
                            <div>
                                {this.renderThisAccountAvatarEdit()} <form id="imgForm">
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
                                                <div>Edit id number</div>
                                                <input type="number" name="idnumber_new" ref="idnumber_new" id="idnumber_new" style={{ width: "300px" }} className="form-control input-sm" placeholder="ID Number" tabIndex="4" />
                                                <input onClick={this.updateMyProfileData.bind(this, "id_nber")} className="btn-primary" type="button" value="Update" />
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
                                                    <div>Edit Surname</div>
                                                    <input type="text" name="surname_name_new" ref="surname_name_new" id="surname_name_new" style={{ width: "300px" }} className="form-control input-sm" placeholder="Surname Name" tabIndex="4" />
                                                    <input onClick={this.updateMyProfileData.bind(this, "surname")} type="button" className="btn-primary" value="Update" />
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
                                                    <div>Edit Lastname</div>
                                                    <input type="text" name="last_name_new" ref="last_name_new" id="last_name_new" style={{ width: "300px" }} className="form-control input-sm" placeholder="Last Name" tabIndex="4" />
                                                    <input onClick={this.updateMyProfileData.bind(this, "lastname")} type="button" className="btn-primary" value="Update" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={this.editThisProfileIntel.bind(this, "email_edit")} className="form-group">
                                        <input disabled={(this.state.email_enabled) ? "" : "disabled"} value={global.email} type="email" name="email" className="form-control input-sm" placeholder="Email Address" tabIndex="4" />
                                        <div className="theeditorsProfile" id="email_edit">
                                            <input type="button" value="x" onClick={this.hideThisEditWindow.bind(this, "email_edit")} className="btn-danger" style={{ float: "right" }} />

                                            <div>
                                                <div>Edit Email</div>
                                                <input type="email" ref="email_new" name="email_new" style={{ width: "300px" }} className="form-control input-sm" placeholder="Email Address" tabIndex="4" />
                                                <input onClick={this.updateMyProfileData.bind(this, "email")} type="button" className="btn-primary" value="Update" />
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display:"none" }} onClick={this.editThisProfileIntel.bind(this, "plate_number_edit")} className="form-group">
                                        <input disabled={(this.state.plate_number_enabled) ? "" : "disabled"} value={global.plate_number} type="text" name="email" id="email" className="form-control input-sm" placeholder="License Plate Number" tabIndex="4" />
                                        <div className="theeditorsProfile" id="plate_number_edit">
                                            <input type="button" value="x" onClick={this.hideThisEditWindow.bind(this, "plate_number_edit")} className="btn-danger" style={{ float: "right" }} />

                                            <div>
                                                <div>Edit Plate number</div>
                                                <input type="text" name="email_new" ref="plate_nber_new" style={{ width: "300px" }} className="form-control input-sm" placeholder="License Plate Number" tabIndex="4" />
                                                <input onClick={this.updateMyProfileData.bind(this, "plate_nber")} type="button" className="btn-primary" value="Update" />
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={this.editThisProfileIntel.bind(this, "occupation_edit")} className="form-group">
                                        <input disabled={(this.state.occupation_enabled) ? "" : "disabled"} value={global.occupation} type="text" name="where_y_wrk_the_most" id="where_y_wrk_the_most" className="form-control input-sm" placeholder="Where you work the most?" tabIndex="4" />
                                        <div className="theeditorsProfile" id="occupation_edit">
                                            <input type="button" value="x" onClick={this.hideThisEditWindow.bind(this, "occupation_edit")} className="btn-danger" style={{ float: "right" }} />

                                            <div>
                                                <div>Edit occupation</div>
                                                <input type="text" name="where_y_wrk_the_most_new" ref="occupation_new" id="where_y_wrk_the_most_new" style={{ width: "300px" }} className="form-control input-sm" placeholder="Where you work the most?" tabIndex="4" />
                                                <input onClick={this.updateMyProfileData.bind(this, "occupation")} type="button" className="btn-primary" value="Update" />
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={this.editThisProfileIntel.bind(this, "phonenumber_edit")} className="form-group">
                                        <input disabled={(this.state.phonenumber_enabled) ? "" : "disabled"} value={global.phonenumber} type="tel" name="phone_nber" id="phone_nber" className="form-control input-sm" placeholder="Phone number" tabIndex="4" />
                                        <div className="theeditorsProfile" id="phonenumber_edit">
                                            <input type="button" value="x" onClick={this.hideThisEditWindow.bind(this, "phonenumber_edit")} className="btn-danger" style={{ float: "right" }} />

                                            <div>
                                                <div>Edit phone number</div>
                                                <input type="tel" name="phone_nber_new" ref="phone_nber_new" id="phone_nber_new" style={{ width: "300px" }} className="form-control input-sm" placeholder="Phone number" tabIndex="4" />
                                                <input onClick={this.updateMyProfileData.bind(this, "phone_nber")} type="button" className="btn-primary" value="Update" />
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
                                                        <div>Edit province</div>
                                                        <input type="text" name="province_new" ref="province_new" id="province_new" style={{ width: "300px" }} className="form-control input-sm" placeholder="Province" tabIndex="1" />
                                                        <input onClick={this.updateMyProfileData.bind(this, "province")} type="button" className="btn-primary" value="Update" />
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
                                                        <div>Edit district</div>
                                                        <input type="text" ref="district_new" name="district_new" style={{ width: "300px" }} className="form-control input-sm" placeholder="District" tabIndex="2" />
                                                        <input onClick={this.updateMyProfileData.bind(this, "district")} type="button" className="btn-primary" value="Update" />
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
                                                        <div>Edit sector</div>
                                                        <input type="text" name="sector" ref="sector_new" style={{ width: "300px" }} className="form-control input-sm" placeholder="Sector" tabIndex="2" />
                                                        <input onClick={this.updateMyProfileData.bind(this, "sector")} type="button" className="btn-primary" value="Update" />
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
                                                <div>Edit username</div>
                                                <input type="text" name="username_new" ref="username_new" id="username_new" style={{ width: "300px" }} className="form-control input-sm" placeholder="Username" tabIndex="4" />
                                                <input onClick={this.updateMyProfileData.bind(this, "username")} type="button" className="btn-primary" value="Update" />
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
                                                        <div>Edit password</div>
                                                        <input type="password" name="password" ref="password_new" id="password_new" style={{ width: "300px" }} className="form-control input-sm" placeholder="New Password" tabIndex="5" />
                                                        <input onClick={this.updateMyProfileData.bind(this, "password")} type="button" className="btn-primary" value="Update" />
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
                                                        <div>Edit Retype password</div>
                                                        <input type="password" name="password_confirmation" ref="password_confirmation_new" id="password_confirmation_new" style={{ width: "300px" }} className="form-control input-sm" placeholder="Confirm New Password" tabIndex="6" />
                                                        <input onClick={this.updateMyProfileData.bind(this, "password_retype")} type="button" className="btn-primary" value="Update" />
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

