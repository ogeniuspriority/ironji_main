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




export class Product_to_add_to_sell_item extends Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {

    }
    checkChooseThisProduct(obj, e) {         
        var if_checked = e.target.checked;
        //alert(document.getElementById(e.target.name.split("~~~~~")[1]).value + "----" + e.target.name.split("~~~~~")[0]);
        if (if_checked) {
            if (!global.product_to_add_to_my_list) {
                global.product_to_add_to_my_list = "" + ((document.getElementById(e.target.name.split("~~~~~")[1]).value == "") ? "0 Rwf" : document.getElementById(e.target.name.split("~~~~~")[1]).value) + "----" + e.target.name.split("~~~~~")[0];
            } else {
                global.product_to_add_to_my_list = global.product_to_add_to_my_list + "@cyuma@^" + ((document.getElementById(e.target.name.split("~~~~~")[1]).value == "") ? "0 Rwf" : document.getElementById(e.target.name.split("~~~~~")[1]).value) + "----" + e.target.name.split("~~~~~")[0];
            }
            //---------------            
        } else {
            var temPtreat = global.product_to_add_to_my_list;
            var res = temPtreat.replace("" + ((document.getElementById(e.target.name.split("~~~~~")[1]).value == "") ? "0 Rwf" : document.getElementById(e.target.name.split("~~~~~")[1]).value) + "----" + e.target.name.split("~~~~~")[0], "deletedd");
            global.product_to_add_to_my_list = ""+res;
        }
        //----------------
        //alert(global.product_to_add_to_my_list);
        //---------Save The chosen products--
        
    }
    render() {

        return (

            <div style={{ margin: "5px", background: "skyblue", borderRadius: "5px" }} className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <img src={"http://map.ogeniuspriority.com/upload_scripts/" + this.props.image_prod} className="img-responsive" />
                <div className="form-group">
                    <label>Product name:</label>
                    <input readOnly value={this.props.name_prod} type="text" className="form-control" />
                </div>
                <div className="form-group" style={{ marginTop: "5px" }}>
                    <label>Product Price:</label>
                    <input id={"yuii" + this.props.id_prod} type="text" value={this.props.price_prod} className="form-control" />
                </div>         
              
                <div>
                    <label className="container_check" style={{ border: "1px solid black", borderRadius: "4px" }}>
                        <input onClick={this.checkChooseThisProduct.bind(this, this.props.id_prod)} type="checkbox" name={"" + this.props.id_prod + "~~~~~yuii" + this.props.id_prod} />
                        <span style={{border:"2px solid #333",borderRadius:"4px"}} className="checkmark"></span>
                    </label>
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
})(Product_to_add_to_sell_item);

