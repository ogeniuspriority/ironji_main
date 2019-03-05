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


export class DriverMessagesChatties_ChatMessages extends Component {
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
    

    render() {
        return (<div>
            <div style={{ width: "100%", marginTop: "10px" }} ><div className="modal-content" style={{ float: this.props.floating,width:"65%" }} >
                <h4>{this.state.username}</h4>
                <div style={{ padding: "6px" }}>
                    {this.props.actualMessage}
                                </div>
                <div style={{ float: "left", boxShadow: "2px 2px #cdcdcd" }}>{this.props.regdate}</div>

            </div> <div style={{ clear: "both" }}></div></div>
           
        </div>
        );
    }

}

export default withTracker(() => {
    return {
        tasks: Users.find({}).fetch(),
    };
})(DriverMessagesChatties_ChatMessages);
