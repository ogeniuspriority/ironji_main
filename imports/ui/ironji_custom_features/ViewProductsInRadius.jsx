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



        return (<div >
            <ViewInfoAboutClickedProduct myData0="Orange Details" myData1="It's time for actual implementations."
                myData2="images/ironji.png"
                myData3="Orange"
                myData4="Ironji"
            />
            <ViewInfoAboutClickedProduct myData0="Pineapple Details" myData1="It's time for actual implementations."
                myData2="images/pineapple.jpg"
                myData3="Pineapple"
                myData4="Inanasi"
            />
            <ViewInfoAboutClickedProduct myData0="Banana Details" myData1="It's time for actual implementations."
                myData2="images/banana.jpg"
                myData3="Banana"
                myData4="Umuneke"
            />
            <ViewInfoAboutClickedProduct myData0="Meat Details" myData1="It's time for actual implementations."
                myData2="images/meat.jpg"
                myData3="Meat"
                myData4="Inyama"
            />
            <ViewInfoAboutClickedProduct myData0="Fish Details" myData1="It's time for actual implementations."
                myData2="images/fish.jpg"
                myData3="Fish"
                myData4="Ifi"
            />
            <ViewInfoAboutClickedProduct myData0="Capati Details" myData1="It's time for actual implementations."
                myData2="images/capati.jpg"
                myData3="Capati"
                myData4="Capati"
            />
            <ViewInfoAboutClickedProduct myData0="Chicken Details" myData1="It's time for actual implementations."
                myData2="images/chicken.jpg"
                myData3="Chicken"
                myData4="Inkoko"
            />         
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

