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
import { ProductSearchType } from './ProductSearchType';




export class Product_i_sell_item extends Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {

    } 
  
    render() {

        return (
            <div style={{ margin: "5px", background: "skyblue", borderRadius: "5px",overflowX:"hidden" }} className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <img src={"http://map.ogeniuspriority.com/upload_scripts/" + this.props.image_prod} className="img-responsive" />
                <div className="form-group">
                    <label>Product name:</label>
                    <input type="text" value={this.props.name_prod} className="form-control" />
                </div>
                <div className="form-group" style={{ marginTop: "5px" }}>
                    <label>Product Price:</label>
                    <input type="text" value={this.props.price_prod}  className="form-control" />
                </div>
                <div className="form-group" style={{ marginTop: "5px" }}>
                    <button type="button" name={"--" + this.props.id_prod} className="btn btn-primary">Update price</button>
                </div>
                <div className="form-group" style={{ marginTop: "5px" }}>
                    <button type="button" name={"---" + this.props.id_prod} className="btn btn-danger">Remove</button>
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
})(Product_i_sell_item);

