import React, { Component }
    from 'react';
import classNames from 'classnames';
import Modal from 'react-bootstrap-modal';
import { Users }
    from '../../api/users';
import { Drivers_schedules }
    from '../../api/drivers_schedules';
import { Client_hot_deals }
    from '../../api/hot_deals';
import { withTracker }
    from 'meteor/react-meteor-data';
import DatePicker from 'react-datepicker';
import moment from 'react-moment';
import 'moment-timezone';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import { render }
    from 'react-dom';
import Switch from 'react-toggle-switch';
import "react-toggle-switch/dist/css/switch.min.css";
import { Button, Popover, PopoverHeader, PopoverBody }
    from 'reactstrap';
import { geolocated } from 'react-geolocated';
//import {TrackerReact} from 'ultimatejs:tracker-react';

class DriverMainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.ajaxObj = this.ajaxObj.bind(this);
        this.ajaxReturn = this.ajaxReturn.bind(this);
        //-----------upload image to php remote server---
    }

    componentDidMount() {
        //---     


        //---

        if (sessionStorage.length == 0) {
            window.open("/", "_self");
        }


    }

    uploadImageToRemoteServer() {
        var file = document.getElementById("test-input").files[0];
        if (!file) {

        } else {
            var fd = new FormData();
            fd.append("imgForm", file);
            fetch("https://map.ogeniuspriority.com/upload_scripts/upload_images_avatar.php", {
                mode: 'cors',
                method: "POST",
                body: fd
            }).then(response => response.json())
                .then(resData => {
                    var TheTradersData = JSON.parse(JSON.stringify(resData));
                    if (TheTradersData.avtar.includes("notokay")) {
                    } else {
                        console.log(TheTradersData);
                        alert("Good job!");
                    }
                    
                });
        }

    }

    ajaxObj(meth, url) {
        var x = new XMLHttpRequest();
        x.open(meth, url, true);
        x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        return x;
    }
    ajaxReturn(x) {
        if (x.readyState == 4 && x.status == 200) {
            return true;
        }
    }




    render() {

        return (<div className="container">
            <div><h4>Upload image to remote server</h4></div>
            <form id="imgForm">
                <input type="file" onChange={this.uploadImageToRemoteServer.bind(this)} id="test-input" />
            </form>

        </div>
        );
    }

}
export default withTracker(() => {
    return {
        tasks: Users.find({}).fetch(),
        users_i_am_in: Users.find({ username: sessionStorage.getItem('ironji_account_username') }, { sort: { text: 1 } }).fetch(),
        all_the_hot_deals: Client_hot_deals.find({}, { sort: { createdAt: - 1 } }).fetch(),
        MySchedules: Drivers_schedules.find({ client_id: global.the_id_op }, { sort: { createdAt: - 1 } }).fetch(),
    };
})(DriverMainPage);

