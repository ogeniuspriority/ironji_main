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
import { ProductsIsell } from './ProductsIsell';
import { ProductsInIronjiDatabase } from './ProductsInIronjiDatabase';




export class IronjiAssistantProfile_advert_productList extends Component {
    constructor(props) {
        super(props);


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
            }).then(response => response.json() )
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
        fetch('https://map.ogeniuspriority.com/map_scripts/get_my_business_info.php?id=' + global.the_id_op)
            .then(response => response.json())
            .then(resData => {
                TheTradersData = JSON.parse(JSON.stringify(resData));
                var theMarkersOfTraders = TheTradersData["theMarkersOfTraders"];
                //document.getElementById("MyBusinessData").innerHTML = theMarkersOfTraders;

            });

    }
    saveNewProductToList() {
        //console.log("Great!");productChoiceWhenAdding
        if (document.getElementById("theImageData").value=="") {
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
    addProductToMyList() {
        /*
        */
        if (global.product_to_add_to_my_list) {
            if (global.product_to_add_to_my_list != "") {
                fetch('https://map.ogeniuspriority.com/map_scripts/add_choosen_products_to_pool_for_business.php?id=' + global.the_id_op + "&chosenProductsToAdd=" + global.product_to_add_to_my_list)
                    .then(response => response.json())
                    .then(resData => {
                        TheTradersData = JSON.parse(JSON.stringify(resData));
                        if (TheTradersData['theMarkersOfTraders'].includes("Great")) {
                            toastr.success('Products added to your shop!', 'Thank you!', { timeOut: 5000 });
                            global.product_to_add_to_my_list = "";
                        } else {

                        }
                    });
            } else {
                toastr.error('Error', " You haven't chosen any products!!");
                toastr.options.closeMethod = 'fadeOut';
                toastr.options.closeDuration = 300;
                toastr.options.closeEasing = 'swing';
                toastr.options.progressBar = true;
                toastr.options.preventDuplicates = true;
                toastr.options.extendedTimeOut = 300;
            }
        }
    }
    render() {

        return (<div >
            <div style={{ background: "#ebedee", borderRadius: "4px", padding: "5px", width: "120%", border: "1px solid #fff", marginLeft: "1%" }}>
                <h4>The products i sell:</h4>
                <div style={{ borderRadius: "6px", border: "1px solid black", height: "600px", width: "600px", overflowY: "scroll", overflowX: "hidden" }}>
                    <div  style={{ width: "600px", border: "1px solid black", overflowX: "hidden" }}>
                        {this.renderThisAccountAvatar()}
                        <ProductsIsell />
                    </div>
                </div>
                <h4>Choose from ironji products to showcase in your account!</h4>
                <div style={{ borderRadius: "6px", border: "1px solid black", width: "600px", height: "660px", overflowY: "scroll", overflowX: "hidden" }}>
                    <ProductsInIronjiDatabase />          
                </div>
                <button type="button" onClick={this.addProductToMyList.bind(this)} className="btn-primary">Add selected products to your list</button>
                <h4>Add new custom product to the repertoire:</h4>
                <div style={{ borderRadius: "6px", border: "1px solid black", height: "auto",width:"600px", overflowY: "scroll" }}>
                    <form id="imgForm">
                        <label id="label">Get image from device...<input onChange={this.uploadImageToRemoteServer_.bind(this)} type="file" name="photo0" id="upload-photo0" /></label>

                    </form>
                        <div style={{ marginTop: "5px" }}>
                            <label id="theLinK" style={{ color: "#333333", fontSize: "13px" }}></label>

                        </div>
                        <div style={{ marginTop: "5px" }}>
                            <input type="hidden" id="theImageData" />
                            <img id="theproductImage" style={{width:"150px",height:"150px",borderRadius:"6px"}} />
                        </div>
                        <div className="form-group" style={{ marginTop: "5px" }}>
                            <label>Product Name:</label>
                            <input id="product_name_new" type="text" style={{width:"200px"}} className="form-control" />
                        </div>
                        <div className="form-group" style={{ marginTop: "5px" }}>
                            <label>Product Price:</label>
                        <input id="product_price_new" type="text" style={{ width: "200px" }} className="form-control" />
                    </div>
                    <ProductSearchType style={{width:"200px"}} />
                        <button onClick={this.saveNewProductToList.bind(this)} type="button" className="btn-primary">Save new  product to your list</button>

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
})(IronjiAssistantProfile_advert_productList);

