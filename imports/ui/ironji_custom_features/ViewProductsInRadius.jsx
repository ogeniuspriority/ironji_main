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
            popoverOpen: false,
            productsInRadiusWhereIam: [],
            productsInRadiusWhereIam_temp: []
        };
        //----------
        this.showProductsInRadius = this.showProductsInRadius.bind(this);
    }

    componentDidMount() {
        var thatUI = this;
        setInterval(function () {
            //---------------
            thatUI.showProductsInRadius();

        }, 2000);
    }
    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }
    //-------------------------------
    showProductsInRadius() {
        //-------------------
        var product_type_search = document.getElementById("sel1").value;
        var productInThisRadius = document.getElementById("valBox").innerHTML;
        var searchFieldProductName = document.getElementById("productSearchFieldData").value;
        //--------------
        fetch('https://map.ogeniuspriority.com/map_scripts/search_products_from_ironji_db_InRadius.php?id=' + global.the_id_op + "&latitude=" + this.props.mylatitude + "&longitude=" + this.props.mylongitude + "&Radius=" + productInThisRadius + "&productType=" + product_type_search + "&searchFieldProductName=" + searchFieldProductName)
            .then(response => response.json())
            .then(resData => {
                TheTradersData = JSON.parse(JSON.stringify(resData));
                //console.log("---"  + "---" + JSON.stringify(resData));
                var theMarkersOfTraders = TheTradersData["theMarkersOfTraders"];
                //document.getElementById("MyBusinessData").innerHTML = theMarkersOfTraders;
                var theResults = [];

                this.setState({ productsInRadiusWhereIam: theResults });

                var i_db = 0;
                for (var key in theMarkersOfTraders) {
                    if (theMarkersOfTraders.hasOwnProperty(key)) {
                        console.log("" + theMarkersOfTraders[key].ironji_traders_product_list_image + "~" + theMarkersOfTraders[key].ironji_traders_product_list_name + "~" + theMarkersOfTraders[key].ironji_traders_product_list_id);
                        theResults.push(theMarkersOfTraders[key].ironji_traders_product_list_image + "~" + theMarkersOfTraders[key].ironji_traders_product_list_name + "~" + theMarkersOfTraders[key].ironji_traders_product_list_id);
                        i_db++;
                    }
                }                
                   
                
                if (JSON.stringify(this.productsInRadiusWhereIam_temp) !== JSON.stringify(theResults)) {
                    this.setState({ productsInRadiusWhereIam_temp: theResults });
                    this.setState({ productsInRadiusWhereIam: theResults });
                } else {
                    
                }
                

            });
    }
    //---------------------
    showResultsr_forInRadiusProjects() {        

        if (this.state.productsInRadiusWhereIam) {

            return (this.state.productsInRadiusWhereIam.map((el) => (

                <ViewInfoAboutClickedProduct myData0="Orange Details" myData1="It's time for actual implementations."
                    myData2={"http://map.ogeniuspriority.com/upload_scripts/"+el.split("~")[0]}
                    myData3={el.split("~")[1]}
                    myData4=""
                    traderId=""
                    traderAbout=""
                    productId={el.split("~")[2]}
                />
            )));

        } else {
            return <div>No Data!</div>;

        }
    }

    render() {


        return (<div >
            <div id="thePopDataInfo">

            </div>
            <div style={{display:"none"}}>{this.props.mylatitude + "--" + this.props.mylongitude}</div>
            {this.showResultsr_forInRadiusProjects()}
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
