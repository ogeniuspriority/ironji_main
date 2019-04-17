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
import { EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

//import {TrackerReact} from 'ultimatejs:tracker-react';

export class IronjiAssistantProfile_advert_AboutYourBusinessForFarmers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: 'Example text'
        };

    }

    componentDidMount() {
       
    }
    saveTheInfoAboutMyBusiness() {
        //--demo-editor rdw-editor-main
        //alert(document.getElementsByClassName('rdw-editor-main')[0].innerHTML);
        var theInfoBusiness = document.getElementsByClassName('rdw-editor-main')[0].innerHTML;
        toastr.success('Saving my business information...', 'Thank you!', { timeOut: 1000 });
        fetch('https://map.ogeniuspriority.com/map_scripts/save_business_information.php?id=' + global.the_id_op + "&theInfoBusiness=" + theInfoBusiness)
            .then(response => response.json())
            .then(resData => {
                TheTradersData = JSON.parse(JSON.stringify(resData));
                var theMarkersOfTraders = TheTradersData["theMarkersOfTraders"];
                if (TheTradersData['theMarkersOfTraders'].includes("JobDoneCyuma")) {
                    toastr.success('Coordinates Saved!', 'Thank you!', { timeOut: 5000 });
                    document.getElementById("MyBusinessData").innerHTML = document.getElementsByClassName('rdw-editor-main')[0].innerHTML;
                    location.reload();
                } else {
                    toastr.error('Error', " " + resData);
                    toastr.options.closeMethod = 'fadeOut';
                    toastr.options.closeDuration = 300;
                    toastr.options.closeEasing = 'swing';
                    toastr.options.progressBar = true;
                    toastr.options.preventDuplicates = true;
                    toastr.options.extendedTimeOut = 300;
                }
            });
    }
    uploadImageToRemoteServer() {
        var file = document.getElementById("upload-photo").files[0];
        if (!file) {

        } else {
            toastr.success('Link', 'Generating Image Link...', { timeOut: 5000 });
            var fd = new FormData();
            fd.append("imgForm", file);
            fetch("https://map.ogeniuspriority.com/upload_scripts/upload_images_avatar.php", {
                mode: 'cors',
                method: "POST",
                body: fd
            }).then(response => response.json())
                .then(resData => {
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
                        document.getElementById("theLinK").innerHTML = "Use this link to include the image in your text <br/>" + "https://map.ogeniuspriority.com/upload_scripts/" + theUpImage;
                        toastr.success('Link created!', 'Use the link provided!', { timeOut: 5000 });
                        
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

                if (po[key].account_type == "farmer") {
                    global.the_id_op = po[key]._id;
                    global.avatar_profile = po[key].avatar_profile;
                }
            }
        }
        //---------------
        fetch('https://map.ogeniuspriority.com/map_scripts/get_my_business_info.php?id=' + global.the_id_op)
            .then(response => response.json())
            .then(resData => {
                TheTradersData = JSON.parse(JSON.stringify(resData));
                var theMarkersOfTraders = TheTradersData["theMarkersOfTraders"];
                document.getElementById("MyBusinessData").innerHTML = theMarkersOfTraders;

            });
    }
    render() {
       
        

        return (<div >
            <div style={{ background: "#ebedee", borderRadius: "4px", padding: "5px", width: "100%", border: "1px solid #fff", marginLeft: "1%" }}>
                
                <h4>Produce image link to use in your description:</h4>
                <div style={{ borderRadius: "6px", border: "1px solid black", overflowY: "scroll" }}>
                    {this.renderThisAccountAvatar()}<form id="imgForm">
                        <label id="label">Get image from device...<input onChange={this.uploadImageToRemoteServer.bind(this)} type="file" name="photo" id="upload-photo" /></label>
                        <div style={{ marginTop: "5px" }}>
                            <label id="theLinK" style={{color:"#333333",fontSize:"13px"}}></label>

                        </div>
                    </form>
                </div>
                <h4>Business description:</h4>
                <div style={{ background:"#ffffff",padding:"10px",borderRadius: "6px", border: "1px solid black", height: "220px",width:"850px", overflowY: "scroll" }}>
                    <Editor
                        value={this.state.textValue}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        id="editor"
                        style={{padding:"10px",background:"#fff"}}
                    />
                </div>
                <button onClick={this.saveTheInfoAboutMyBusiness.bind(this)} className="btn-primary">Save Changes On Info About Your Business.</button>
                <div>
                    <h4>About my business:</h4>
                    <div id="MyBusinessData"></div>
                </div>
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
})(IronjiAssistantProfile_advert_AboutYourBusinessForFarmers);

