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
import { IronjiAssistantProfile_advert_AboutYourBusinessForFarmers } from './IronjiAssistantProfile_advert_AboutYourBusinessForFarmers';
import { IronjiAssistantProfile_advert_map } from './IronjiAssistantProfile_advert_map';
import { IronjiAssistantProfile_advert_productListForFarmers } from './IronjiAssistantProfile_advert_productListForFarmers';
import { IronjiAssistantProfile_advert_map_auto } from './IronjiAssistantProfile_advert_map_auto';
import { Progress_loader } from './Progress_loader';


export class IronjiAssistantProfileForFarmers extends Component {
    constructor(props) {
        super(props);
     

    }

    componentDidMount() {
       
    }
    ConfirmThisLocation() {
        global.the_id_op = "";
        global.avatar_profile = "";
        var po = Users.find({ username: "" + sessionStorage.getItem('ironji_account_username') }, { sort: { text: 1 } }).fetch();
        for (var key in po) {
            if (po.hasOwnProperty(key)) {
                //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);

                //if (po[key].account_type == "farmer") {
                global.the_id_op = po[key]._id;
                global.avatar_profile = po[key].avatar_profile;
                //}
            }
        }
        if (document.getElementById("latitude").value != "" ||
            document.getElementById("longitude").value != "") {
            toastr.success('Saving coordinates...', 'Thank you!', { timeOut: 1000 });


            fetch('https://map.ogeniuspriority.com/map_scripts/confirm_the_location.php?id=' + global.the_id_op + "&lat=" + document.getElementById("latitude").value + "&long=" + document.getElementById("longitude").value)
                .then(response => response.json())
                .then(resData => {
                    TheTradersData = JSON.parse(JSON.stringify(resData));
                    if (TheTradersData['theMarkersOfTraders'].includes("JobDoneCyuma")) {
                        toastr.success('Coordinates Saved!', 'Thank you!', { timeOut: 5000 });
                    } else {
                        toastr.error('Error', " " + resData);
                        toastr.options.closeMethod = 'fadeOut';
                        toastr.options.closeDuration = 300;
                        toastr.options.closeEasing = 'swing';
                        toastr.options.progressBar = true;
                        toastr.options.preventDuplicates = true;
                        toastr.options.extendedTimeOut = 300;
                    }
                });
        } else {
            toastr.error('Error', "You didn't specify the gps location! Use either of the maps to adjust your position!");
            toastr.options.closeMethod = 'fadeOut';
            toastr.options.closeDuration = 300;
            toastr.options.closeEasing = 'swing';
            toastr.options.progressBar = true;
            toastr.options.preventDuplicates = true;
            toastr.options.extendedTimeOut = 300;

        }
        /*toastr.error('Error', 'Message!');
        toastr.options.closeMethod = 'fadeOut';
        toastr.options.closeDuration = 300;
        toastr.options.closeEasing = 'swing';
        toastr.options.progressBar = true;
        toastr.options.preventDuplicates = true;
        toastr.options.extendedTimeOut = 300;
        toastr.success('We have received you review!', 'Thank you!', { timeOut: 5000 });
        */

    }

    renderThisAccountAvatar() {
        //---------------
        global.latitude = "";
        global.longitude = "";
        //----------------     

        global.the_id_op = "";
        global.avatar_profile = "";
        var po = Users.find({ username: "" + sessionStorage.getItem('ironji_account_username') }, { sort: { text: 1 } }).fetch();
        for (var key in po) {
            if (po.hasOwnProperty(key)) {
                //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);

                if (po[key].account_type == "farmer") {
                    global.the_id_op = po[key]._id;
                    global.avatar_profile = po[key].avatar_profile;
                }
            }
        }
        fetch('https://map.ogeniuspriority.com/map_scripts/get_this_user_coordinates.php?id=' + global.the_id_op)
            .then(response => response.json())
            .then(resData => {
                TheTradersData = JSON.parse(JSON.stringify(resData));
                var theMarkersOfTraders = TheTradersData["theMarkersOfTraders"];
                global.latitude = theMarkersOfTraders.split("-cyuma-")[0];
                global.longitude = theMarkersOfTraders.split("-cyuma-")[1];
                //---------------
                //document.getElementById("latitude").value = global.latitude;
                //document.getElementById("longitude").value = global.longitude;
                //------------
                document.getElementById("savedLocation").innerHTML = global.latitude + " , " + global.longitude;
            });
        return (<div></div>);
    }
   
    render() {

        return (<div >
            <div style={{ background: "#EDBB99", borderRadius: "4px", padding: "5px", width: "60%", border: "1px solid #fff", marginLeft: "-15%" }}>
                <h4>Make your online presence using either the automatic locator on the right or by typing the location, adjust the location by dragging the marker on either map, confirm the location to save.</h4>
                <div>

                </div>
                <div style={{ position: "absolute", marginLeft: "30%", zIndex: 10000 }}><Progress_loader /></div>
                <div style={{ }}>
                    <div>{this.renderThisAccountAvatar()}</div>
                    <IronjiAssistantProfile_advert_map_auto />
                    <div style={{ padding: "10px" }}>
                        <label id="savedLocation"></label>
                    </div>
                    <div><label className="badge">Latitude:</label><input readOnly id="latitude" type="text" className="form-control" placeholder="Type location name here" /></div>
                    <div><label className="badge">Longitude:</label><input readOnly id="longitude" type="text" className="form-control" placeholder="Type location name here" /></div>
                    <div><button onClick={this.ConfirmThisLocation.bind(this)} className="btn-primary">Confirm this geolocation</button></div>

                </div>
             
                <div style={{ clear: "both" }}></div>
            </div>
               
        </div>
        );
    }

}
export default withTracker(() => {
    return {
        tasks: Users.find({}).fetch(),
        theSchedules: Drivers_schedules.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
})(IronjiAssistantProfileForFarmers);

