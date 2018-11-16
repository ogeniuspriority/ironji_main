﻿import React, { Component }
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
import Popup  from "reactjs-popup";
import { ViewInfoAboutClickedProduct } from './ViewInfoAboutClickedProduct';
import Popover from 'react-bootstrap/lib/Popover'
import Overlay from 'react-bootstrap/lib/Overlay';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
//import {TrackerReact} from 'ultimatejs:tracker-react';ViewProductsInRadiusOneByOne.jsx



export class ViewProductsInRadius extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    componentDidMount() {
       
    }
    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }
    render() {

        const popoverRight = (
            <Popover id="popover-positioned-right" title="About Orange">
                <ViewInfoAboutClickedProduct />
  </Popover>
        );

        return (<div >
            
            <div >

                <div> <OverlayTrigger trigger="focus" placement="right" overlay={popoverRight}><img tabIndex="12" className="theseImgsFood" src="images/ironji.png" />
                </OverlayTrigger>
                    <div className="foodNames">Orange<br /><span className="minify">Ironji</span></div></div>
            
           </div>

            <div><img className="theseImgsFood" src="images/pineapple.jpg" /><div className="foodNames">Pineapple<br /><span className="minify">Inanasi</span></div></div>
            <div><img className="theseImgsFood"  src="images/banana.jpg" /><div className="foodNames">Banana<br /><span className="minify">Umuneke</span></div></div>
            <div><img className="theseImgsFood"  src="images/meat.jpg" /><div className="foodNames">Meat<br /><span className="minify">Inyama</span></div></div>
            <div><img className="theseImgsFood"  src="images/fish.jpg" /><div className="foodNames">Fish<br /><span className="minify">Ifi</span></div></div>
            <div><img className="theseImgsFood"  src="images/capati.jpg" /><div className="foodNames">Capati<br /><span className="minify">Capati</span></div></div>
            <div><img className="theseImgsFood"  src="images/chicken.jpg" /><div className="foodNames">Chicken<br /><span className="minify">Inkoko</span></div></div>
              
        </div>
        );
    }

}
export default withTracker(() => {
    return {
        tasks: Users.find({}).fetch(),
        theSchedules: Drivers_schedules.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
})(ViewProductsInRadius);

