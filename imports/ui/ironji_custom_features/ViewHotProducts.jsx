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



export class ViewHotProducts extends Component {
    constructor(props) {
        super(props);
     

    }

    componentDidMount() {
       
    }
   
    render() {

        return (<div >
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
        );
    }

}
export default withTracker(() => {
    return {
        tasks: Users.find({}).fetch(),
        theSchedules: Drivers_schedules.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
})(ViewHotProducts);

