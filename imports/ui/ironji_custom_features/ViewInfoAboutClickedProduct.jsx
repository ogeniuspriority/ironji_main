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



export class ViewMapInText extends Component {
    constructor(props) {
        super(props);
     

    }

    componentDidMount() {
       
    }
   
    render() {

        return (<div >

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
        );
    }

}
export default withTracker(() => {
    return {
        tasks: Users.find({}).fetch(),
        theSchedules: Drivers_schedules.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
})(ViewMapInText);

