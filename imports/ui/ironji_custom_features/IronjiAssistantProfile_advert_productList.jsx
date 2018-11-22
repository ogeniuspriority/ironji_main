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



export class IronjiAssistantProfile_advert_productList extends Component {
    constructor(props) {
        super(props);
     

    }

    componentDidMount() {
       
    }
   
    render() {

        return (<div >
            <div style={{ background: "#ebedee", borderRadius: "4px", padding: "5px", width: "100%", border: "1px solid #fff", marginLeft: "1%" }}>
                My Ironji Trader's online presense and advertisement! Toggle by clicking!
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
})(IronjiAssistantProfile_advert_productList);

