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
const ARC_DE_TRIOMPHE_POSITION = {
    lat: 48.873947,
    lng: 2.295038
};
const showSecond = true;
const str = showSecond ? 'HH:mm:ss' : 'HH:mm';

const EIFFEL_TOWER_POSITION = {
    lat: 48.858608,
    lng: 2.294471
};
const KLAB = {
    lat: -1.944676,
    lng: 30.089745
};
var marker;
var historicalOverlay;
const posTI = ["300px", "300px"];




class DriverMainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideCompleted: false, lat: - 1.944676,
            lng: 30.089745,
            productPop: false,
            productPopX: "0px",
            productPopY: "0px",
            conversationPop: false,
            conversationPopX: "0px",
            conversationPopY: "0px",
            switched: false, popoverOpen: false,
            value: 5,
        };


        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeFrom = this.handleChangeFrom.bind(this);
        this.handleChangeTo = this.handleChangeTo.bind(this);
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.handleLocationError = this.handleLocationError.bind(this);
    }
    showPolyLinePath() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: { lat: -1.935892, lng: 30.077986 },
            mapTypeId: 'terrain'
        });

        var locations = [
            ['Restaurent Cocobin', -1.950079, 30.091251, 4],
            ['Klab Rwanda', -1.944676, 30.089745, 5],
            ['Kigali Convention Center', -1.954588, 30.093912, 3],
            ['KBC Business Center', -1.952403, 30.091481, 2],
            ['People Club', -1.947762, 30.092957, 1]
        ];

        var flightPlanCoordinates = [
            { lat: -1.944676, lng: 30.089745 },
            { lat: -1.935892, lng: 30.077986 },
            { lat: -1.932632, lng: 30.063652 },
            { lat: -1.942583, lng: 30.043825 },
            { lat: -1.94084, lng: 30.044485 }
        ];
        var flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });

        flightPath.setMap(map);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    toggleSwitch() {
        this.setState({
            switched: !this.state.switched
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        // Find the text field via the React ref
        const text = this.refs.textInput.value.trim();
        Tasks.insert({
            text,
            createdAt: new Date(), // current time
        });
        // Clear form
        this.refs.textInput.value = '';
    }

    showThisProductInfo(e) {
        //$("#productModal").modal("show");
        var doc = document.documentElement;
        var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

        //var clientHeight = document.getElementById('myDiv').clientHeight;
        top = top + 50;

        var Hor = e.pageX + 20;



        var x__ = "" + Hor + "px";
        var Y__ = "" + top + "px";


        this.setState({ productPop: true, productPopX: x__, productPopY: Y__ });
    }
    hideThisProductInfo(e) {
        //$("#productModal").modal("show");

        var x__ = "" + e.pageX + "px";
        var Y__ = "" + e.pageY + "px";
        this.setState({ productPop: false, productPopX: x__, productPopY: Y__ });
    }
    showThisConversationPanel(e) {
        //$("#productModal").modal("show");
        var x__ = "" + e.pageX + "px";
        var Y__ = "" + e.pageY + "px";

        this.setState({ conversationPop: true, conversationPopX: posTI[0], conversationPopY: posTI[1] });
    }
    hideThisConversationPanel(e) {
        //$("#productModal").modal("show");

        var x__ = "" + e.pageX + "px";
        var Y__ = "" + e.pageY + "px";
        this.setState({ conversationPop: false, conversationPopX: x__, conversationPopY: Y__ });
    }

    RegisterAsDriver() {

        window.open("/driverRegister", "_self");
    }

    RegisterAsClient() {
        window.open("/clientRegister", "_self")
    }

    frequentlyAskedQuestions() {
        window.open("/fq_asked", "_self")
    }

    loginIntoAccount() {
        window.open("/driverMainPage", "_self")
    }
    updateThisUserLocation() {
        global.the_id = "";

        var po = Users.find({ username: sessionStorage.getItem('ironji_account_username') }, { sort: { text: 1 } }).fetch();
        for (var key in po) {
            if (po.hasOwnProperty(key)) {
                //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);

                if (po[key].account_type == "client") {
                    global.the_id = po[key]._id;
                }
            }
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var latitute = position.coords.latitude;
                var longitude = position.coords.longitude;
                //console.log("Runned "+latitute+"--"+longitude);
                Users.update({ _id: global.the_id }, {
                    $set: { currentLatitude: latitute, currentLongitude: longitude }
                }, function (err, result) {
                    if (err) {

                    } else {
                        console.log(result);
                    }
                });
            });
        } else {

        }
    }
    handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }

    CreateMySchedule(e) {
        e.preventDefault();
        //alert(this.state.startDate+"-"+this.state.startDateFrom+"--"+this.state.startDateTo);
        if (this.refs.time_to.value != "" && this.refs.time_from.value != "" && this.refs.date_of_schedule.value != "" && this.refs.destination.value != "" && this.refs.origin.value != "") {
            global.time_to = "" + this.state.startDateTo;
            global.time_from = "" + this.state.startDateFrom;
            global.date_of_schedule = "" + this.state.startDate;
            global.destination = this.refs.destination.value;
            global.origin = this.refs.origin.value;
            global.the_id = "";
            var po = Users.find({ username: sessionStorage.getItem('ironji_account_username') }, { sort: { text: 1 } }).fetch();
            for (var key in po) {
                if (po.hasOwnProperty(key)) {
                    //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);

                    if (po[key].account_type == "driver") {
                        global.the_id = po[key]._id;
                    }
                }
            }

            //alert(global.the_id);
            var theData = {
                "time_to": global.time_to,
                "createdAt": new Date(),
                "time_from": global.time_from,
                "date_of_schedule": global.date_of_schedule,
                "destination": global.destination,
                "origin": global.origin,
                "client_id": global.the_id,
            };
            Drivers_schedules.insert(theData, function (error, result) {
                if (error) {
                    alert("User Not Created");
                }
                if (result) {
                    alert("Driver Scheduled Saved!");
                    window.open("/driverMainPage", "_self");
                }
            });
        } else {
            alert("Empty fields!");
        }


    }



    componentDidMount() {

        this.interval = setInterval(() => this.updateThisUserLocation(), 1000);

        if (sessionStorage.length == 0) {
            window.open("/", "_self");
        }

        //----------Find User Location--
        var checkOnce = true;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var accuracy = position.coords.accuracy;
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };


                //console.log("latitude:" + pos.lat + "longitude:" + pos.lng);
                var that = this;
                // Call getCurrentPosition with success and failure callbacks
                // var myLatlng = new google.maps.LatLng(position.coords.longitude, position.coords.latitude);
                this.map = new google.maps.Map(document.getElementById("map"), {
                    center: new google.maps.LatLng(pos.lat, pos.lng),
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });
                var icon = {
                    url: 'images/pickMeUp.png', // url
                    scaledSize: new google.maps.Size(35, 35), // scaled size
                    origin: new google.maps.Point(0, 0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                };
                //--------------------------
                var TheTradersData = "";

                fetch('https://map.ogeniuspriority.com/get_all_traders_live_locations.php')
                    .then(response => response.json())
                    .then(resData => {
                        TheTradersData = JSON.parse(JSON.stringify(resData));
                        var theMarkersOfTraders = TheTradersData["theMarkersOfTraders"];
                        //---------------loop through location---
                        var i = 0;
                        var iterator = 0;
                        for (var key in theMarkersOfTraders) {
                            if (theMarkersOfTraders.hasOwnProperty(key)) {
                                //alert(json[key].id);
                                //alert(json[key].msg);
                                //-------
                                console.log("" + theMarkersOfTraders[key].markers_on_map_lat + "--" + theMarkersOfTraders[key].markers_on_map_lng);
                                //------------Display the markers--
                                setTimeout(function () {

                                    var infowindow = new google.maps.InfoWindow();

                                    var idEvent = theMarkersOfTraders[iterator].markers_on_map_id;

                                    marker = new google.maps.Marker({
                                        position: new google.maps.LatLng(theMarkersOfTraders[iterator].markers_on_map_lat, theMarkersOfTraders[iterator].markers_on_map_lng),
                                        icon: icon,
                                        draggable: false,
                                        animation: google.maps.Animation.DROP,
                                        title: "" + theMarkersOfTraders[iterator].place_name,
                                        map: this.map
                                    });

                                    //-------------Locate myself--
                                    if (checkOnce) {
                                        var icon_ = {
                                            url: "images/locate_me.png", // url
                                            scaledSize: new google.maps.Size(35, 70), // scaled size
                                            origin: new google.maps.Point(0, 0), // origin
                                            anchor: new google.maps.Point(0, 0) // anchor
                                        };
                                        markers = new google.maps.Marker({
                                            position: new google.maps.LatLng(pos.lat, pos.lng),
                                            icon: icon_,
                                            scaledSize: new google.maps.Size(35, 35),
                                            title: "Me! Accuracy is" + accuracy + " meters",
                                            map: this.map
                                        });
                                        //---------
                                        markers.setMap(that.map);
                                        checkOnce = false;
                                    }
                                    //-------
                                    var descr = theMarkersOfTraders[iterator].place_description;
                                    google.maps.event.addListener(marker, 'click', (function (marker, descr, infowindow) {
                                        return function () {
                                            infowindow.setContent(descr);
                                            infowindow.open(map, marker);
                                        };
                                    })(marker, descr, infowindow));



                                    marker.setMap(that.map);
                                    iterator++;
                                }, (i + 1) * 300);
                                i++;
                            }
                        }

                    });



                var locations = [
                    ['Restaurent Cocobin', - 1.950079, 30.091251, 4],
                    ['Klab Rwanda', - 1.944676, 30.089745, 5],
                    ['Kigali Convention Center', - 1.954588, 30.093912, 3],
                    ['KBC Business Center', - 1.952403, 30.091481, 2],
                    ['People Club', - 1.947762, 30.092957, 1]
                ];
                for (i = 0; i < locations.length; i++) {

                }
            }, function () {
                //handleLocationError(true, infoWindow, map.getCenter());
            }, { maximumAge: 600000, timeout: 5000, enableHighAccuracy: true });
        } else {
            // Browser doesn't support Geolocation
            //handleLocationError(false, infoWindow, map.getCenter());
        }




    }

    panToArcDeTriomphe() {
        var checkOnce = true;
        var that = this;
        //------------------
        if (navigator.geolocation) {
            // Call getCurrentPosition with success and failure callbacks
            navigator.geolocation.getCurrentPosition(function (position) {
                var myLatlngs = {
                    lat: -1.944676,
                    lng: 30.089745
                };
                var myLatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                this.map = new google.maps.Map(document.getElementById("map"), {
                    center: myLatlng,
                    zoom: 16
                });

                var icon = {
                    url: 'images/rideWithMe.png', // url
                    scaledSize: new google.maps.Size(35, 35), // scaled size
                    origin: new google.maps.Point(0, 0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                };
                //--------------------------

                //        marker = new google.maps.Marker({
                //            position: myLatlng,
                //            title: "Ironji Location On Map!",
                //            icon: icon
                //        });

                var locations = [
                    ['Restaurent Cocobin', -1.950079, 30.091251, 4],
                    ['Klab Rwanda', -1.944676, 30.089745, 5],
                    ['Kigali Convention Center', -1.954588, 30.093912, 3],
                    ['KBC Business Center', -1.952403, 30.091481, 2],
                    ['People Club', -1.947762, 30.092957, 1]
                ];

                for (i = 0; i < locations.length; i++) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        icon: icon,
                        title: "" + locations[i][0],
                        map: this.map
                    });

                    google.maps.event.addListener(marker, 'click', (function (marker, i) {
                        return function (e) {
                            var x__ = "" + e.pageX + "px";
                            var Y__ = "" + e.pageY + "px";

                            that.setState({ conversationPop: true, conversationPopX: posTI[0], conversationPopY: posTI[1] });
                        }
                    })(marker, i));

                    //===============Add myself on the map
                    if (checkOnce) {
                        var icon_ = {
                            url: "images/locate_me.png", // url
                            scaledSize: new google.maps.Size(35, 70), // scaled size
                            origin: new google.maps.Point(0, 0), // origin
                            anchor: new google.maps.Point(0, 0) // anchor
                        };
                        marker = new google.maps.Marker({
                            position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                            icon: icon_,
                            scaledSize: new google.maps.Size(35, 35),
                            title: "Me!",
                            map: this.map
                        });
                        //---------
                        checkOnce = false;
                    }

                    marker.setMap(this.map);
                    //alert(""+myLatlng);
                    //this.map.panTo(myLatlng);
                }

            }, function () {
                alert("Failed to Trinangulate Position.");
            });

        } else {
            alert("No Geolocation on your device");
        }
    }
    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    recordValue(e) {
        this.setState({ value: e.target.value });
        //console.log("Changed");
        document.getElementById("valBox").innerHTML = this.state.value + " km";
    }
    PublishRequest() {
        var that = this;

        //alert("ss"+this.refs.the_deal_text.value+"--id"+global.the_id);
        if (this.refs.the_deal_text.value == "") alert("Submitting Empty Request");

        var theText = this.refs.the_deal_text.value;
        Client_hot_deals.insert({
            client_id: global.the_id,
            the_hot_deal_info: theText,
            createdAt: new Date(),

        }, function (error, result) {


            if (error) {
                //alert("User Not Created");
            }
            if (result) {
                alert("Hot Deal Published to Community!");
                that.refs.the_deal_text.value = "";
                window.open("/clientMainPage", "_self");
            }
        });

    }
    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    handleChangeFrom(date) {
        this.setState({
            startDateFrom: date
        });
    }
    handleChangeTo(date) {
        this.setState({
            startDateTo: date
        });
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }
    renderMySchedules() {

        global.the_id_op = "";
        var po = Users.find({ username: "" + sessionStorage.getItem('ironji_account_username') }, { sort: { text: 1 } }).fetch();
        for (var key in po) {
            if (po.hasOwnProperty(key)) {
                //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);

                if (po[key].account_type == "driver") {
                    global.the_id_op = po[key]._id;
                }
            }
        }
        global.userna_me = "";
        return Drivers_schedules.find({}, { sort: { createdAt: - 1 } }).fetch().map((deal) => (
            <div style={{ borderBottom: "1px solid green", width: "300px" }}>
                <p style={{ color: "blue", textDecoration: "underline", display: "none" }}>{Users.find({ _id: deal.client_id }, { sort: { text: 1 } }).fetch().forEach(function (myDoc) { global.userna_me = myDoc.username; })}</p>
                <div style={{ color: "blue", textDecoration: "underline" }}>{global.userna_me}</div>
                <div style={{ marginTop: "5px" }}><span >Date of schedule:</span><span className='smallANdCool'>{new Date(parseInt(deal.date_of_schedule)).getFullYear().toString() + "/" + new Date(parseInt(deal.date_of_schedule)).getMonth().toString() + "/" + new Date(parseInt(deal.date_of_schedule)).getDay().toString()}</span></div>
                <div style={{ marginTop: "5px" }}><span>Origin:</span><span className='smallANdCool'>{deal.origin}</span></div>
                <div style={{ marginTop: "5px" }}><span>Destination:</span><span className='smallANdCool'>{deal.destination}</span></div>
                <div style={{ marginTop: "5px" }}><span >Time of departure:</span><span className='smallANdCool'>{new Date(parseInt(deal.time_from)).getHours().toString() + ":" + new Date(parseInt(deal.time_to)).getMinutes().toString()}</span></div>
                <div style={{ marginTop: "5px" }}><span>Time of arrival:</span><span className='smallANdCool'>{new Date(parseInt(deal.time_to)).getHours().toString() + ":" + new Date(parseInt(deal.time_from)).getMinutes().toString()}</span></div>
                <button className="btn btn-success">Delete This<br /><span className="minify">Siba Iyi ngiyi</span></button>
            </div>
        ));
    }

    renderTheHotDeals() {
        global.userna_me = "";
        return this.props.all_the_hot_deals.map((deal) => (
            <div style={{ borderBottom: "1px solid green", width: "300px" }}>
                <p style={{ color: "blue", textDecoration: "underline", display: "none" }}>{Users.find({ _id: deal.client_id }, { sort: { text: 1 } }).fetch().forEach(function (myDoc) { global.userna_me = myDoc.username; })}</p>
                <div style={{ color: "blue", textDecoration: "underline" }}>{global.userna_me}</div>
                <div>{deal.the_hot_deal_info}</div>
                <button className="btn btn-success">Talk to them<br /><span className="minify">Muvugishe</span></button>
            </div>
        ));
    }
    renderTheClientSchedules() {
        global.userna_me = "";

        return this.props.theSchedules.map((deal) => (



            <div style={{ borderBottom: "1px solid green", width: "300px" }}>
                <p style={{ color: "blue", textDecoration: "underline", display: "none" }}>{Users.find({ _id: deal.client_id }, { sort: { text: 1 } }).fetch().forEach(function (myDoc) { global.userna_me = myDoc.username; })}</p>
                <div style={{ color: "blue", textDecoration: "underline" }}>{global.userna_me}</div>
                <div style={{ marginTop: "5px" }}><span >Date of schedule:</span><span className='smallANdCool'>{new Date(parseInt(deal.date_of_schedule)).getFullYear().toString() + "/" + new Date(parseInt(deal.date_of_schedule)).getMonth().toString() + "/" + new Date(parseInt(deal.date_of_schedule)).getDay().toString()}</span></div>
                <div style={{ marginTop: "5px" }}><span>Origin:</span><span className='smallANdCool'>{deal.origin}</span></div>
                <div style={{ marginTop: "5px" }}><span>Destination:</span><span className='smallANdCool'>{deal.destination}</span></div>
                <div style={{ marginTop: "5px" }}><span >Time of departure:</span><span className='smallANdCool'>{new Date(parseInt(deal.time_from)).getHours().toString() + ":" + new Date(parseInt(deal.time_to)).getMinutes().toString()}</span></div>
                <div style={{ marginTop: "5px" }}><span>Time of arrival:</span><span className='smallANdCool'>{new Date(parseInt(deal.time_to)).getHours().toString() + ":" + new Date(parseInt(deal.time_from)).getMinutes().toString()}</span></div>
                <button className="btn btn-success">Talk to them<br /><span className="minify">Muvugishe</span></button>
            </div>
        ));
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
                                            <td><a href={'/DriverMessages'}><img className="followLinks" src="images/message.png" /><br /><span>Messages</span></a></td>
                                            <td><a href={'/Driverprofile'}><img className="followLinks" src="images/trader.jpg" /><br /><span>Hi, {sessionStorage.getItem('ironji_account_username')}</span></a></td>
                                            <td><a href={'/DriverDashboard'}><img className="followLinks" src="images/dashboard.jpg" /><br /><span>Dashboard</span></a></td>
                                            <td><a href={'/driverMainPage'}><img className="followLinks" src="images/home.png" /><br /><span>Home</span></a></td></tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container middleFeature">
                <div style={{ width: "40%" }}>
                    <div className="form-group">
                        <label >Adjust radius in  from where you are standing:</label>
                        <span id="valBox">6 km</span>
                        <input className="form-control" type="range" ref="myRange" onChange={this.recordValue.bind(this)} onInput={this.recordValue.bind(this)} min="1" max="41" step="1" id="myRange" value={this.state.value} />
                        <input className="btn-success" type="button" value="Apply changes" />
                    </div>
                    <div className="form-group">
                        <label >Product type:</label>
                        <select className="form-control" id="sel1">
                            <option>Food</option>
                            <option>Music instruments</option>
                            <option>Clothes</option>
                            <option>Artifacts</option>
                            <option>Dry Cleaners</option>
                            <option>Restaurents</option>
                            <option>Electronic devices</option>
                            <option>Movies</option>
                        </select>
                        <input className="btn-success" type="button" value="Apply changes" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search a product by name" />
                        <input className="btn-success" type="button" value="Apply changes" />
                    </div></div>
                <div className="middleFeature_left"><div className="middleFeature_left_in"><div ><img onClick={this.showThisProductInfo.bind(this)} className="theseImgsFood" src="images/ironji.png" /><div className="foodNames">Orange<br /><span className="minify">Ironji</span></div></div>
                    <div><img className="theseImgsFood" onClick={this.showThisProductInfo.bind(this)} src="images/pineapple.jpg" /><div className="foodNames">Pineapple<br /><span className="minify">Inanasi</span></div></div>
                    <div><img className="theseImgsFood" onClick={this.showThisProductInfo.bind(this)} src="images/banana.jpg" /><div className="foodNames">Banana<br /><span className="minify">Umuneke</span></div></div>
                    <div><img className="theseImgsFood" onClick={this.showThisProductInfo.bind(this)} src="images/meat.jpg" /><div className="foodNames">Meat<br /><span className="minify">Inyama</span></div></div>
                    <div><img className="theseImgsFood" onClick={this.showThisProductInfo.bind(this)} src="images/fish.jpg" /><div className="foodNames">Fish<br /><span className="minify">Ifi</span></div></div>
                    <div><img className="theseImgsFood" onClick={this.showThisProductInfo.bind(this)} src="images/capati.jpg" /><div className="foodNames">Capati<br /><span className="minify">Capati</span></div></div>
                    <div><img className="theseImgsFood" onClick={this.showThisProductInfo.bind(this)} src="images/chicken.jpg" /><div className="foodNames">Chicken<br /><span className="minify">Inkoko</span></div></div>
                </div>
                </div>
                <div className="middleFeature_middle">
                    <button data-toggle="modal" data-target="#mapInTextModal" data-dismiss="modal" className="btn mapInText" style={{ float: "right", color: "red", background: "transparent", border: "1px solid red", borderTopLeftRadius: "5px" }}>Map In Text</button>
                    <button style={{ display: "none" }} className="btn btn-info" onClick={this.panToArcDeTriomphe.bind(this)}>Locate Yourself<br /><span className="minify">Reba aho uri</span></button>
                    <div>
                        <form>
                            <div className="form-group" style={{ width: "60%" }}>
                                <input type="text" style={{ width: "80%" }} placeholder="Search a place.." className="form-control" id="origin" />
                            </div>
                            <input type="button" className="btn-success" value="Search a place" />
                        </form>
                    </div>
                    <div ref="map" className="TheMapGuru map" id="map" ref="map">I should be a map!</div>
                    <div>
                        <table className='thebuttons_Driver'>
                            <tbody>
                                <tr><td></td><td></td></tr>
                                <tr><td><button className='btn-primary mainPageButton'>I'm available<br /><span className='minify'>Ndahari</span></button><label className="checkbox-inline"><Switch onClick={this.toggleSwitch} on={this.state.switched} /></label></td><td></td></tr>
                                <tr><td><button data-toggle="modal" data-dismiss="modal" data-target="#createScheduleModal" className='btn-primary mainPageButton'>Create Schedule<br /><span className='minify'>Tanga gahunda uzakurikiza</span></button></td><td></td></tr>
                                <tr><td><button data-toggle="modal" data-dismiss="modal" data-target="#hotDealsModal" className='btn-primary mainPageButton'>Hot Deals<br /><span className='minify'>Abashaka gutwazwa ibintu byinshi</span></button></td><td></td></tr>
                                <tr><td><button className='btn-primary mainPageButton'>See Nearby Traders<br /><span className='minify'>Reba Abacuruzi bakwegereye</span></button></td><td></td></tr>
                            </tbody>
                        </table>

                    </div>

                </div>
                <div className="middleFeature_right">

                    <h2>Hot products</h2>
                    <div>
                        <div style={{ boxShadow: "2px 2px 4px 4px #333" }}>
                            <h5>Shadrack</h5>
                            <p>Come at Nyabugogo market, plot 52 and buy passion fruit at only 50 Rwf each</p>
                        </div>
                        <div style={{ boxShadow: "2px 2px 4px 4px #333" }}>
                            <h5>Cedrick</h5>
                            <p>Brand new Samsung S7 at iphone shop on only 120000Rwf</p>
                        </div>
                        <div style={{ boxShadow: "2px 2px 4px 4px #333" }}>
                            <h5>Emma</h5>
                            <p>New jeans at kabash house from Italy at only 30000Rwf a pair</p>
                        </div>


                    </div>
                </div>
            </div>


            <div className="clearBoth"></div>
            <div style={{ display: "none" }} >
                {this.props.tasks.map(function (resolution) {
                    return (<div>{resolution.text}</div>);
                })}
            </div>
            <div className="modal fade" id="ForgotPasswordModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Log Onto Ironji Platform<br /><span className="minify">Injira ku rubuga rw' Ironji</span></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="form-group">
                                    <label ><b>Telephone Or Email</b><br /><span className='minify'>Telefoni cg Email</span></label>
                                    <input className="widthLogInput" type="text" placeholder="" name="uname" required />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success pull-center" type="button">Get Code<br /><span className='minify'>Aka Code</span></button>
                                </div>
                                <div className="form-group">
                                    <label ><b>Put Received Code</b><br /><span className='minify'>Shyiramo CodeWahawel</span></label>
                                    <input className="widthLogInput" type="text" placeholder="" name="uname" required />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success pull-center" type="button">Verify<br /><span className='minify'>Emeza</span></button>
                                </div>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close<br /><span className='minify'>Funga</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="productModal" style={{ width: '300px', height: '150px', left: this.state.productPopX, top: this.state.productPopY, position: 'absolute' }} className={this.state.productPop ? "productModal" : "productModal_INVisible"}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" onClick={this.hideThisProductInfo.bind(this)} className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Orange<br /><span className="minify">Ironji</span></h4>
                        </div>
                        <div className="modal-body">

                            <h4>Places to find it:<br /><span className="minify">Aho wabikura</span></h4>
                            <h4>Places to find it:</h4>
                            <div className="theProds  testimonial-group">
                                <div className="row text-center myTraders_0">
                                    <div style={{ fontSize: "13px" }} className="theProds_content col-xs-4">
                                        <h4>Nshizirungu <br /> Shadrack </h4>
                                        <h4>Nyabugogo market <br />stand number 3<br />
                                            <span className="minify">Isoko rya Nyabugogo<br /> igitanda cya gatatu!</span> </h4>
                                        <h4>Tel: 0783890990</h4>
                                        <button className="btn-default">See on Map<br /><span className="minify">Murebe ku ikarita</span></button>
                                    </div> <div style={{ fontSize: "13px" }} className="theProds_content col-xs-4">
                                        <h4>Umurerwa Josepha: </h4>
                                        <h4>Nyabugogo market<br /> stand number 11<br />
                                            <span className="minify">Isoko rya Nyabugogo<br /> igitanda cya cumi na rimwe!</span> </h4>
                                        <h4>Tel:0787374567 </h4>
                                        <button className="btn-default">See on Map<br /><span className="minify">Murebe ku ikarita</span></button>
                                    </div>
                                    <div style={{ fontSize: "13px" }} className="theProds_content col-xs-4">
                                        <h4>Maman Bethi</h4>
                                        <h4>Nyabugogo market<br /> stand number 15 <br />
                                            <span className="minify">Isoko rya Nyabugogo<br /> igitanda cya cumi na gatanu!</span></h4>
                                        <h4>Tel:0787890855 </h4>
                                        <button className="btn-default">See on Map<br /><span className="minify">Murebe ku ikarita</span></button>
                                    </div>
                                    <div style={{ fontSize: "13px" }} className="theProds_content col-xs-4">
                                        <h4 style={{ fontSize: "13px" }}>Maman bebe: </h4>
                                        <h4 >Kimironko Market<br /> stand 2<br />
                                            <span className="minify">Isoko rya Kimironko<br /> igitanda cya kabiri!</span> </h4>
                                        <h4>Tel:073345678 </h4>
                                        <button className="btn-default">See on Map<br /><span className="minify">Murebe ku ikarita</span></button>
                                    </div>
                                </div></div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" onClick={this.hideThisProductInfo.bind(this)} data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
            <div id="ConversationModal" style={{ width: '150px', height: '150px', left: this.state.conversationPopX, top: this.state.conversationPopY, position: 'fixed' }} className={this.state.conversationPop ? "productModal" : "productModal_INVisible"}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" onClick={this.hideThisConversationPanel.bind(this)} className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Emmanuel</h4>
                        </div>
                        <div className="modal-body">

                            <p>Drives mainly in Kimironko<br /><span className="minify">Akunda gukorera kimironko</span></p>
                            <button className="btn-default btn-primary">Talk To Them</button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" onClick={this.hideThisConversationPanel.bind(this)} data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="modal fade" id="mapInTextModal" role="dialog" aria-labelledby="mapInTextModalModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">All pick up locations visible on the map.<br /><span className="minify">Abari kugaragara  ku ikarita bose ngo ubatware</span></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container" style={{ height: "300px", overflow: "scroll", width: "400px" }}>
                                <div style={{ border: "1px solid chocolate", margin: "5px" }}>
                                    <h4>Names : Bizimana Eric</h4>
                                    <p>Nyabugogo, near Modern office</p>
                                    <button className='btn-primary'>Talk To Them</button>
                                </div>
                                <div style={{ border: "1px solid chocolate", margin: "5px" }}>
                                    <h4>Names : Kanakuze Dative</h4>
                                    <p>Near Kimironko market </p>
                                    <button className='btn-primary'>Talk To Them</button>
                                </div>
                                <div style={{ border: "1px solid chocolate", margin: "5px" }}>
                                    <h4>Names : Maman Kelia</h4>
                                    <p>Nyamirambo, Cosmos </p>
                                    <button className='btn-primary'>Talk To Them</button>
                                </div>
                                <div style={{ border: "1px solid chocolate", margin: "5px" }}>
                                    <h4>Names : Muhirwa Emma</h4>
                                    <p> Kinyinya, Gasharu market </p>
                                    <button className='btn-primary'>Talk To Them</button>
                                </div>
                                <div style={{ border: "1px solid chocolate", margin: "5px" }}>
                                    <h4>Names : Jose</h4>
                                    <p>Kwa mutangana </p>
                                    <button className='btn-primary'>Talk To Them</button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close<br /><span className='minify'>Funga</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="createScheduleModal" role="dialog" aria-labelledby="ecreateScheduleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">My Schedule<br /><span className="minify">Gahunda zanjye</span></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm" style={{ width: "23%", float: "left" }}>
                                        <form>
                                            <div className="form-group">
                                                <label >Origin:</label>
                                                <input type="text" ref="origin" style={{ width: "80%", fontSize: "14px" }} className="form-control" aria-describedby="" placeholder="" />

                                            </div>
                                            <div className="form-group">
                                                <label >Destination:</label>
                                                <input ref="destination" type="text" style={{ width: "80%", fontSize: "14px" }} className="form-control" aria-describedby="" placeholder="" />

                                            </div>
                                            <div className="form-group">
                                                <label >Date</label>
                                                <span className="input-group-addon">
                                                    <table>
                                                        <tbody>
                                                            <tr><td>
                                                                <DatePicker ref="date_of_schedule" className="form-control" id="scheduleDateDay"
                                                                    selected={this.state.startDate}
                                                                    onChange={this.handleChange}
                                                                /></td><td>
                                                                    <span onClick={this.state.startDate} className="glyphicon glyphicon-calendar"></span></td></tr>
                                                        </tbody>
                                                    </table>
                                                </span>

                                            </div>
                                            <div className="form-group">
                                                <label >Local Time<br /><span className="minify">Isaha yo mu gihugu</span></label>
                                                <div className="form-group">
                                                    <label >From</label>
                                                    <table><tbody><tr><td>
                                                        <TimePicker id="aada" onChange={this.handleChangeFrom} ref="time_from" style={{ width: 100 }}
                                                            showSecond={showSecond}
                                                        />
                                                    </td><td> <span className="input-group-addon">
                                                        <span className="glyphicon glyphicon-time"></span>
                                                    </span></td></tr></tbody></table>

                                                </div>
                                                <div className="form-group">
                                                    <label >To</label>
                                                    <table><tbody><tr><td><TimePicker id="f88" onChange={this.handleChangeTo} ref="time_to" style={{ width: 100 }}
                                                        showSecond={showSecond}
                                                    /></td><td> <span className="input-group-addon">
                                                        <span className="glyphicon glyphicon-time"></span>
                                                    </span></td></tr></tbody></table>
                                                </div>
                                            </div>
                                            <button onClick={this.CreateMySchedule.bind(this)} type="submit" className="btn btn-primary">Add this schedule<br /><span className='minify'>Emeza iyi gahunda</span></button>
                                        </form>
                                    </div>
                                    <div className="col-sm" style={{ width: "23%", float: "left", borderLeft: "1px solid black" }}>
                                        <h4>My Schedules<br /><span className="minify">Gahunda zanjye</span></h4>
                                        <div style={{ overflowY: "scroll", height: "350px" }}>
                                            {this.renderMySchedules()}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close<br /><span className='minify'>Funga</span></button>
                            <button type="button" className="btn btn-primary">Save<br /><span className='minify'>Byemeze</span></button>
                        </div>
                    </div>
                </div>
                </div>
                <div className="modal fade" id="hotDealsModal" role="dialog" aria-labelledby="hotDealsModalModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Hot Deals<br /><span className="minify">Reba abakeneye ababatwara byihutirwa</span></h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container" style={{ overflow: "scroll", height: "350px", width: "350px" }}>
                                    <div>
                                        {this.renderTheHotDeals()}


                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close<br /><span className='minify'>Funga</span></button>
                                <button type="button" className="btn btn-primary">Save<br /><span className='minify'>Byemeze</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Log Onto Ironji Platform<br /><span className="minify">Injira ku rubuga rw' Ironji</span></h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="form-group">
                                        <label ><b>Username</b><br /><span className='minify'>Izina ryo kwinjira</span></label>
                                        <input className="widthLogInput" type="text" placeholder="Enter Username" name="uname" required />
                                    </div><div className="form-group">

                                        <label ><b>Password</b><br /><span className='minify'>Ijambo ry' ibanga</span></label>
                                        <input type="password" className="widthLogInput" placeholder="Enter Password" name="psw" required />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-success" type="button">Login<br /><span className='minify'>Injira</span></button>
                                        <button data-toggle="modal" data-dismiss="modal" data-target="#ForgotPasswordModal" className="btn  thetransparent" type="button">Forgot Password<br /><span className='minify'>Wibagiwe Ijambo ry'ibanga.</span></button>
                                    </div>
                                    <label className="thth">
                                        <input type="checkbox" name="remember" /> Remember me
                            <br /><span className='minify'>Uzanyibuke Ningaruka</span>
                                    </label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close<br /><span className='minify'>Funga</span></button>
                                <button type="button" onClick={this.loginIntoAccount.bind(this)} className="btn btn-primary">Login<br /><span className='minify'>Injira</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pull-right">
                    <div className="row pull-right theLinkdss">
                        <div className="col theTextDown">Follow us and like us on<br /><span className="minify">Dukurikire undadukunde kuri</span></div>
                        <div className="col"><a href="#"><img className="followLinks" src="images/facebook.png" /></a></div>
                        <div className="col"><a href="#"><img className="followLinks" src="images/instagram.png" /></a></div>
                        <div className="col"><a href="#"><img className="followLinks" src="images/linkedin.png" /></a></div>
                        <div className="col"><a href="#"><img className="followLinks" src="images/snapchat.png" /></a></div>
                        <div className="col"><a href="#"><img className="followLinks" src="images/twitter.png" /></a></div>
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

