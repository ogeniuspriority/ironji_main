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





export class IronjiAssistantProfile_advert_map extends Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        //----------------Setup the typing place

        //----------Find User Location--
        var checkOnce = true;
        if (navigator.geolocation) {
            var watchID0 = navigator.geolocation.getCurrentPosition(function (position) {
                var accuracy = position.coords.accuracy;
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                if (accuracy < 50) {
                    navigator.geolocation.clearWatch(watchID);
                    watchID0 = null;
                }
                //console.log("latitude:" + pos.lat + "longitude:" + pos.lng);
                var that0 = this;
                // Call getCurrentPosition with success and failure callbacks
                // var myLatlng = new google.maps.LatLng(position.coords.longitude, position.coords.latitude);
                this.map0 = new google.maps.Map(document.getElementById("map_adjust"), {
                    center: new google.maps.LatLng(pos.lat, pos.lng),
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });
                if (checkOnce) {
                    var icon_ = {
                        url: "images/locate_me.png", // url
                        scaledSize: new google.maps.Size(35, 70), // scaled size
                        origin: new google.maps.Point(0, 0), // origin
                        anchor: new google.maps.Point(0, 0) // anchor
                    };
                    var markers = new google.maps.Marker({
                        position: new google.maps.LatLng(pos.lat, pos.lng),
                        icon: icon_,
                        clickable: true,
                        scaledSize: new google.maps.Size(35, 35),
                        title: "Me! Accuracy is " + accuracy + " meters",
                        map: this.map0,
                        draggable: true,
                        animation: google.maps.Animation.DROP
                    });
                    //---------
                    markers.setMap(that0.map0);
                    checkOnce = false;
                }
                //------geocoder
                var geocoder = new google.maps.Geocoder();
                google.maps.event.addListener(markers, "drag", function () {                    
                    var pos = markers.getPosition();
                    markers.setAnimation(google.maps.Animation.BOUNCE);
                    document.getElementById("latitude").value = pos.lat();
                    document.getElementById("longitude").value = pos.lng();
                });




            }, function () {
                //handleLocationError(true, infoWindow, map.getCenter());
            }, { maximumAge: 75000, timeout: 30000, enableHighAccuracy: true });
        } else {
            // Browser doesn't support Geolocation
            //handleLocationError(false, infoWindow, map.getCenter());
            //alert("Your device refused to allow geolocation!! Enable you location if u want to use the near tool! ");
        }
    }

  

    render() {

        return (<div >
            <div style={{ boxShadow:"2px 2px #cdcdcd", background: "#ebedee", borderRadius: "4px", padding: "5px", width: "99%", border: "1px solid #fff", marginLeft: "1%" }}>
                <div>Put your business location on the map. If the automatic location is not accurate fixing by dragging the marker.</div>
                <div ref="map_adjust" className="TheMapGuru map" id="map_adjust"  ></div>
                
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
})(IronjiAssistantProfile_advert_map);

