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
import { IronjiAssistantProfile_advert_AboutYourBusiness } from './IronjiAssistantProfile_advert_AboutYourBusiness';
import { IronjiAssistantProfile_advert_map } from './IronjiAssistantProfile_advert_map';
import { IronjiAssistantProfile_advert_productList } from './IronjiAssistantProfile_advert_productList';
import { IronjiAssistantProfile_advert_map_auto } from './IronjiAssistantProfile_advert_map_auto';


export class IronjiAssistantProfile extends Component {
    constructor(props) {
        super(props);
     

    }

    componentDidMount() {
       
    }
   
    render() {

        return (<div >
            <div style={{ background: "#EDBB99", borderRadius: "4px", padding: "5px", width: "100%", border: "1px solid #fff", marginLeft: "-15%" }}>
                <h4>Make your online presence.</h4>
                <div>

                </div>
                <div style={{ float:"left",width:"50%" }}>
                    <IronjiAssistantProfile_advert_map_auto />
                    <div><label className="badge">Latitude:</label><input id="latitude" type="text" className="form-control" placeholder="Type location name here" /></div>
                    <div><label className="badge">Longitude:</label><input id="longitude" type="text" className="form-control" placeholder="Type location name here" /></div>
                    <div><button className="btn-primary">Confirm this geolocation</button></div>

                </div>
                <div style={{ float: "left", width: "50%" }}>
                    <IronjiAssistantProfile_advert_map />
                </div>
                <div style={{ clear: "both" }}></div>
                <IronjiAssistantProfile_advert_AboutYourBusiness />
                <IronjiAssistantProfile_advert_productList />
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
})(IronjiAssistantProfile);

