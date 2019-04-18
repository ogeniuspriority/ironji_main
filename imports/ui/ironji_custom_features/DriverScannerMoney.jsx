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



export class DriverScannerMoney extends Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        //----------------Setup the typing place
        var checkOnce = true;
        var geocoder0;
        var marker_CLICKED;
        var placeSearch = this.refs.placeSearch_tre.value;
        var map01 = new google.maps.Map(document.getElementById('map_adjust_auto_DriverScanner'), {
            center: { lat: 1.9433, lng: 30.0596 },
            zoom: 16,
            mapTypeId: 'roadmap'
        });
        var that_auto = this;
        //--------
        /*google.maps.event.addListener(map, 'click', function (event) {
            //placeMarker(event.latLng);
            //------------------
            
        });*/

        // Create the search box and link it to the UI element.
        var input0 = document.getElementById('pac-input-DriverScanner');
        var searchBox1 = new google.maps.places.SearchBox(input0);
        map01.controls[google.maps.ControlPosition.TOP_LEFT].push(input0);

        // Bias the SearchBox results towards current map's viewport.
        map01.addListener('bounds_changed', function () {
            searchBox1.setBounds(map01.getBounds());
        });
       
        map01.addListener('click', function (event) {
            if (marker_CLICKED == null) {
                var icon_ = {
                    url: "images/locate_me.png", // url
                    scaledSize: new google.maps.Size(35, 70), // scaled size
                    origin: new google.maps.Point(0, 0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                };

                marker_CLICKED = new google.maps.Marker({
                    position: event.latLng,
                    map: map01,
                    icon: icon_,
                    clickable: true,
                    draggable: true,
                    animation: google.maps.Animation.DROP
                });
                //marker_CLICKED.setMap(that0.map0);
            } else {
                marker_CLICKED.setPosition(event.latLng);

            }
                //-------------
            console.log("Map clicked!" + event.latLng);
            geocoder0 = new google.maps.Geocoder();
            google.maps.event.addListener(marker_CLICKED, "drag", function () {
                var pos = marker_CLICKED.getPosition();
                marker_CLICKED.setAnimation(google.maps.Animation.BOUNCE);
                //document.getElementById("latitude").value = pos.lat();
                //document.getElementById("longitude").value = pos.lng();
            });

                //marker_CLICKED.setMap(that_auto.map0);        
                
            });        
            //---------
        
        
        

        var markers0 = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox1.addListener('places_changed', function () {
            var places = searchBox1.getPlaces();

            if (places.length == 0) {
                return;
            }

            // Clear out the old markers.
            markers0.forEach(function (marker) {
                marker.setMap(null);
            });
            markers0 = [];

            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function (place) {
                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }
                var icon = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };

                // Create a marker for each place.
                markers0.push(new google.maps.Marker({
                    map: map01,
                    icon: icon,
                    title: place.name,
                    position: place.geometry.location
                }));
                //var pos = markers[0].getPosition();
                //markers[0].setAnimation(google.maps.Animation.BOUNCE);
                //document.getElementById("latitude").value = pos.lat();
                //document.getElementById("longitude").value = pos.lng();
                //---the_main_page_longitude: place_for_main_page.geometry.location.lng(),
               // the_main_page_latitude: place_for_main_page.geometry.location.lat()
                //document.getElementById("latitude").value = place.geometry.location.lat();
                //document.getElementById("longitude").value = place.geometry.location.lng();
                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            map01.fitBounds(bounds);
        });
        //----------Find User Location--
        
    }

  

    render() {

        return(
            <div style={{ boxShadow: "2px 2px #cdcdcd", background: "#ebedee", borderRadius: "4px", padding: "5px", width: "99%", border: "1px solid #fff", marginLeft: "1%", zIndex: 15000 }}>
                <h4 style={{ fontSize: "14px" }}>Search by location name.Click on map to place marker. If the automatic location is not accurate fix it by dragging the marker on the map <input type="text" style={{ width: "50%" }} ref="placeSearch_tre" id="pac-input-DriverScanner" className="form-control" placeholder="Type location name here" /></h4>
                <div></div>
                <div ref="map_adjust_auto_DriverScanner" style={{ maxWidth: "90%", padding: "10%", zIndex: 5000 }} className="TheMapGuru map" id="map_adjust_auto_DriverScanner"  ></div>
            

        </div>
        );
    }

}
export default withTracker(() => {
    return {
        
    };
})(DriverScannerMoney);

