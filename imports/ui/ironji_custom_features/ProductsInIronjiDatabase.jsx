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
import { Product_to_add_to_sell_item } from './Product_to_add_to_sell_item';




export class ProductsInIronjiDatabase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsFromIronjiDatabase: [],
        };


    }

    componentDidMount() {

    }
    uploadImageToRemoteServer_() {
        var file = document.getElementById("upload-photo0").files[0];
        if (!file) {

        } else {
            toastr.success('Product image', 'Image loaded...', { timeOut: 5000 });
            var fd = new FormData();
            fd.append("imgForm", file);
            fetch("https://map.ogeniuspriority.com/upload_scripts/upload_images_avatar.php", {
                mode: 'cors',
                method: "POST",
                body: fd
            }).then(response => response.json())
                .then(resData => {
                    //console.log("--" + resData);
                    var TheTradersData = JSON.parse(JSON.stringify(resData));
                    var theFinalData = TheTradersData['avtar'];
                    if (TheTradersData.avtar.includes("notokay")) {
                        toastr.error('Error', " ");
                        toastr.options.closeMethod = 'fadeOut';
                        toastr.options.closeDuration = 300;
                        toastr.options.closeEasing = 'swing';
                        toastr.options.progressBar = true;
                        toastr.options.preventDuplicates = true;
                        toastr.options.extendedTimeOut = 300;
                    } else {
                        //alert(theFinalData.toString().split("~~")[0]);
                        var theUpImage = theFinalData.toString().split("~~")[0];
                        //---------------
                        //document.getElementById("theLinK").innerHTML = "Use this link to include the image in your text <br/>" + "https://map.ogeniuspriority.com/upload_scripts/" + theUpImage;
                        toastr.success('Link created!', 'Use the link provided!', { timeOut: 5000 });
                        //-----------
                        document.getElementById("theImageData").value = theUpImage;
                        document.getElementById("theproductImage").src = "https://map.ogeniuspriority.com/upload_scripts/" + theUpImage;

                    }

                });
        }

    }

    renderThisAccountAvatar() {
        //---------------
        global.latitude = "";
        global.longitude = "";
        //----------------     

        global.the_id_op = "";
        global.avatar_profile = "";
        var po = Users.find({ username: "" + sessionStorage.getItem('ironji_account_username') }, { sort: { text: 1 } }).fetch();
        for (var key in po) {
            if (po.hasOwnProperty(key)) {
                //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);

                if (po[key].account_type == "client") {
                    global.the_id_op = po[key]._id;
                    global.avatar_profile = po[key].avatar_profile;
                    //------------
                }
            }
        }
        //---------------
        

    }
    saveNewProductToList() {
        //console.log("Great!");productChoiceWhenAdding
        if (document.getElementById("theImageData").value == "") {
            toastr.error('Error', "No Product Image Uploaded!");
            toastr.options.closeMethod = 'fadeOut';
            toastr.options.closeDuration = 300;
            toastr.options.closeEasing = 'swing';
            toastr.options.progressBar = true;
            toastr.options.preventDuplicates = true;
            toastr.options.extendedTimeOut = 300;

        }
        else if (document.getElementById("product_name_new").value == "") {
            toastr.error('Error', "No Product Name Provided!");
            toastr.options.closeMethod = 'fadeOut';
            toastr.options.closeDuration = 300;
            toastr.options.closeEasing = 'swing';
            toastr.options.progressBar = true;
            toastr.options.preventDuplicates = true;
            toastr.options.extendedTimeOut = 300;

        }
        else if (document.getElementById("product_price_new").value == "") {
            toastr.error('Error', "No Product Price Provided! ");
            toastr.options.closeMethod = 'fadeOut';
            toastr.options.closeDuration = 300;
            toastr.options.closeEasing = 'swing';
            toastr.options.progressBar = true;
            toastr.options.preventDuplicates = true;
            toastr.options.extendedTimeOut = 300;

        }
        else {
            fetch('https://map.ogeniuspriority.com/map_scripts/add_new_product_to_pool.php?id=' + global.the_id_op + "&loadedImage=" + document.getElementById("theImageData").value + "&product_name_new=" + document.getElementById("product_name_new").value + "&product_price_new=" + document.getElementById("product_price_new").value + "&productChoiceWhenAdding=" + document.getElementsByClassName("productChoiceWhenAdding")[0].value)
                .then(response => response.json())
                .then(resData => {
                    TheTradersData = JSON.parse(JSON.stringify(resData));
                    var theMarkersOfTraders = TheTradersData["theMarkersOfTraders"];
                    //document.getElementById("MyBusinessData").innerHTML = theMarkersOfTraders;
                    console.log("" + theMarkersOfTraders);
                    location.reload();

                });
        }
    }
    searchInProductsInIronji() {
        //alert("From Ironji");
        //toastr.success('Loading...', '', { timeOut: 5000 });
        document.getElementById("fromDatabase").innerHTML = "Loading...";

        fetch('https://map.ogeniuspriority.com/map_scripts/search_products_from_ironji_db.php?id=' + global.the_id_op + "&productName=" + document.getElementById("InDatabaseSearch").value)
            .then(response => response.json())
            .then(resData => {
                TheTradersData = JSON.parse(JSON.stringify(resData));
                var theMarkersOfTraders = TheTradersData["theMarkersOfTraders"];
                //document.getElementById("MyBusinessData").innerHTML = theMarkersOfTraders;
                var theResults = [];
           
                    this.setState({ productsFromIronjiDatabase: theResults });
              
                var i_db = 0;
                for (var key in theMarkersOfTraders) {
                    if (theMarkersOfTraders.hasOwnProperty(key)) {
                        //console.log("" + theMarkersOfTraders[key].markers_on_map_lat + "--" + theMarkersOfTraders[key].markers_on_map_lng);
                        theResults.push(theMarkersOfTraders[key].ironji_traders_product_list_id + "~" + theMarkersOfTraders[key].ironji_traders_product_list_regdate + "~" + theMarkersOfTraders[key].ironji_traders_product_list_name + "~" + theMarkersOfTraders[key].ironji_traders_product_list_creator + "~" + theMarkersOfTraders[key].ironji_traders_product_list_type_kind + "~" + theMarkersOfTraders[key].ironji_traders_product_list_image);
                        i_db++;
                    }
                }
                //----------------
                document.getElementById("fromDatabase").innerHTML = "";
                
                    this.setState({ productsFromIronjiDatabase: theResults });
                
            });

    }

    showResultsr() { 
      
        if (this.state.productsFromIronjiDatabase) {

            return (this.state.productsFromIronjiDatabase.map((el) => (
                
                <Product_to_add_to_sell_item id_prod={el.split("~")[0]} regdate_prod={el.split("~")[1]} name_prod={el.split("~")[2]} creator_prod={el.split("~")[3]} type_kind={el.split("~")[4]} image_prod={el.split("~")[5]}> <span>{}</span></Product_to_add_to_sell_item >

            )));

        } else {
            return <div>No Data!</div>;
        }
        
    }
    render() {

        return (<div >
            <div style={{ background: "#ebedee", borderRadius: "4px", padding: "5px", width: "120%", border: "1px solid #fff", marginLeft: "1%" }}>
                <h4></h4>
                <div className="md-form mt-0">
                    {this.renderThisAccountAvatar()}
                    <input onKeyUp={this.searchInProductsInIronji.bind(this)} id="InDatabaseSearch" className="form-control" style={{ width: "300px" }} type="text" placeholder="When empty all the products are shown" aria-label="Search" />
                    <input onClick={this.searchInProductsInIronji.bind(this)} type="button" className="btn-primary" value="Search" />
                    <div id="fromDatabase"></div>
                    <div className="row imagetiles" style={{ overflowX: "hidden", padding: "10px" }}>
                        
                        {
                            this.showResultsr() 

                        }
                      

                    </div>
                </div>

            </div>

        </div >
        );
    }

}
export default withTracker(() => {
    return {
        tasks: Users.find({}).fetch(),
        theSchedules: Drivers_schedules.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
})(ProductsInIronjiDatabase);

