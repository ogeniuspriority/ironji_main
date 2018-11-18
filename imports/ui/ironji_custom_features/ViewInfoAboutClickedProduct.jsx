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
import { Button, PopoverHeader } from 'react-bootstrap';
import Popup from "reactjs-popup";
import Popover from 'react-bootstrap/lib/Popover'
import Overlay from 'react-bootstrap/lib/Overlay';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';

//import {TrackerReact} from 'ultimatejs:tracker-react';



export class ViewInfoAboutClickedProduct extends Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {

    }

    render() {

        const popoverRight = (
            <Popover id="0" title={this.props.myData0}>
                <div>{this.props.myData1}</div>
            </Popover>
        );

        return (<div >
            <div >
                <div> <OverlayTrigger trigger="click" rootClose placement="right" overlay={popoverRight}><img tabIndex="12" className="theseImgsFood" src={this.props.myData2} />
                </OverlayTrigger>
                    <div className="foodNames">{this.props.myData3}<br /><span className="minify">{this.props.myData4}</span></div></div>
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
})(ViewInfoAboutClickedProduct);

