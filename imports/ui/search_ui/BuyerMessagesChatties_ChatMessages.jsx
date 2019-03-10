import React, { Component }
    from 'react';
import classNames from 'classnames';
import Modal from 'react-bootstrap-modal';
import { Users } from '../../api/users';
import { withTracker } from 'meteor/react-meteor-data';
import DatePicker from 'react-datepicker';
import moment from 'react-moment';
import 'moment-timezone';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

import { Ironji_messages_my_chatties } from '../../api/ironji_messages_my_chatties';


export class BuyerMessagesChatties_ChatMessages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideCompleted: false,
            thisAvatar: "/images/profile.png",
            username:""
        };
    }
    componentDidMount() {
        
        /*if (this.props.ironji_users_image.includes("undefined")) {
            global.avatar = "/images/profile.png";
            this.setState({ thisAvatar: global.avatar });

            
        } else {
            global.avatar = "https://map.ogeniuspriority.com/upload_scripts/" + this.props.ironji_users_image;
            this.setState({ thisAvatar: global.avatar });
        }*/
        //console.log("cyuma_test", this.props.style_display_checking)
        var that = this;
        setTimeout(function () {
            global.username = "";
            var po = Users.find({ _id: ""+that.props.idUseOf}, { sort: { text: 1 } }).fetch();
            for (var key in po) {
                if (po.hasOwnProperty(key)) {
                    //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);

                        global.username = po[key].username;
                        that.setState({ username: po[key].username });
                    
                }
            }
        });
    }
    /*openNegotiationRoomWin0(param, e) {
        document.getElementById("buyerCarryCargoWin0ChatRoom").style.display = "block";
    }*/

    /*profileShow()
    {
        return (<img className="img-circle" style={{ maxWidth: "70px", maxHeight: "70px" }} src={this.state.thisAvatar} />);
    }*/
    getDateDiff(time1) {

        var t1 = new Date(time1);
        var t2 = new Date();

        var diffMS = t2 - t1;
        //console.log(diffMS + ' ms');

        var diffS = diffMS / 1000;
        var secs = parseInt(diffS % 60);
        //console.log(diffS + ' ');

        var diffM = diffS / 60;
        var minutes = parseInt(diffM);
        //console.log(diffM + ' minutes');

        var diffH = diffM / 60;
        var hours = parseInt(diffH);
        //console.log(diffH + ' hours');

        var diffD = diffH / 24;
        var days = parseInt(diffD);
        //console.log(diffD + ' days');
        if (days > 0) {
            days = days + " days ";
        } if (hours > 0 && hours < 24) {
            days = days + hours + " hours ";
        } if (minutes > 0 && minutes < 60) {
            days = days + minutes + " mins ";
        } if (secs > 0 && secs < 60) {
            days = days + secs + " secs ";
        }
        days = days + " ago";
        return (<div>
            {days}
        </div>);


    }

    render() {
        return (<div>
            <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: this.props.floating,width:"65%" }} >
                <h4>{this.state.username}</h4>
                <div style={{ padding: "6px" }}>
                    {this.props.actualMessage}
                                </div>
                <div style={{ float: "left", boxShadow: "2px 2px #cdcdcd" }}>{this.getDateDiff(this.props.regdate)}</div>

            </div> <div style={{ clear: "both" }}></div></div>
           
        </div>
        );
    }

}

export default withTracker(() => {
    return {
        tasks: Users.find({}).fetch(),
    };
})(BuyerMessagesChatties_ChatMessages);
