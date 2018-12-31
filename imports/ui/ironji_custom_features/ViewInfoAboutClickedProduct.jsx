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

    adjustAndShowInfoAboutProduct(e) {
        var rect = e.target.getBoundingClientRect();
        //console.log(rect.top, rect.right, rect.bottom, rect.left);
        //alert("Top: " + rect.top + "Left: " + rect.left);
        //document.getElementById("" + e.target.name).style.left = "" + rect.left+"px";
        //document.getElementById("" + e.target.name).style.top = "" + rect.top + "px";
        //document.getElementById("" + e.target.name).style.display="block";
        //----------------Load the remote Data--
        document.getElementById("thePopDataInfo").innerHTML = "";
        var theTitle = "Info about '<span style='color:orange;'>" + this.props.myData3 + "</span>' at " + document.getElementById("pac-input_for_main_page").value;
        document.getElementById("thePopDataInfo").innerHTML = '<div class="" id="productShow-~" ' + this.props.productId + ' style="border:1px solid #333;width:800px;box-shadow:2px 2px #333;z-index:7000;position:fixed;background:white;top:' + 50 + "px;left" + rect.left + "px;" + ';border-radius:6px;padding:10px;margin-top:80px;margin-left:80px">' + '<div class="modal-header"><h4 style="text-align:center;color:blue;">' + theTitle + '</h4><button style="float:right;background:transparent;border-radius:3px;border:1px solid black;" onclick="closeThisPop()"' + '>X</button></div><div class="modal-body" style="height:350px;overflow-y:scroll">' + "Wait, Loading data..." + '</div>' + '</div>';

        fetch('https://map.ogeniuspriority.com/map_scripts/search_the_traders_for_this_product.php?productId=' + this.props.productId)
            .then(response => response.json())
            .then(resData => {
                TheTradersData = JSON.parse(JSON.stringify(resData));
                console.log("---"  + "---" + JSON.stringify(resData));
                var theMarkersOfTraders = TheTradersData["theMarkersOfTraders"];
                document.getElementById("thePopDataInfo").innerHTML = "";
                var theTitle = "Info about '<span style='color:orange;'>" + this.props.myData3 + "</span>' at " + document.getElementById("pac-input_for_main_page").value;
                document.getElementById("thePopDataInfo").innerHTML = '<div class="" id="productShow-~" ' + this.props.productId + ' style="border:1px solid #333;width:800px;box-shadow:2px 2px #333;z-index:7000;position:fixed;background:white;top:' + 50 + "px;left" + rect.left + "px;" + ';border-radius:6px;padding:10px;margin-top:80px;margin-left:80px">' + '<div class="modal-header"><h4 style="text-align:center;color:blue;">' + theTitle + '</h4><button style="float:right;background:transparent;border-radius:3px;border:1px solid black;" onclick="closeThisPop()"' + '>X</button></div><div class="modal-body" style="height:350px;overflow-y:scroll">' + theMarkersOfTraders+'</div>' + '</div>';


            });
    
    }


    render() {

        const popoverRight = (
            <Popover id="0" title={"More about '" + this.props.myData3+"'"}>
                <div>{this.props.productId + "---" + this.props.myData3}</div>
            </Popover>
        );

        return (<div >
            <div>
                <div ><img name={"productShow-~" + this.props.productId} onClick={this.adjustAndShowInfoAboutProduct.bind(this)} tabIndex="12" className="theseImgsFood" src={this.props.myData2} /> 
                    <div id={"productShow-~" + this.props.productId} style={{ zIndex: "7000",display:"none", background: "white", position: "fixed",marginTop:"-70px",marginLeft:"50px",borderRadius:"6px",padding:"6px" }}>fsh sfi sfij</div>
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

