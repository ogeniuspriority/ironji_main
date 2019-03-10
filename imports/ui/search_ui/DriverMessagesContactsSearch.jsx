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


export class DriverMessagesContactsSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideCompleted: false,
            thisAvatar: "/images/profile.png",
        };
    }
    componentDidMount() {
        
        if (this.props.ironji_users_image.includes("undefined")) {
            global.avatar = "/images/profile.png";
            this.setState({  thisAvatar: global.avatar });

            
        } else {
            global.avatar = "https://map.ogeniuspriority.com/upload_scripts/" + this.props.ironji_users_image;
            this.setState({ thisAvatar: global.avatar });
        }

       // this.setState({ dataSetId: this.props.ironji_users_text });
        
    }
    openNegotiationRoomWin0(param, e) {
        document.getElementById("buyerCarryCargoWin0ChatRoom").style.display = "block";
    }

    profileShow()
    {
        return (<img className="img-circle" style={{ maxWidth: "70px", maxHeight: "70px" }} src={this.state.thisAvatar} />);
    }

    addThisUserToMyContacts(data,e) {
        //console.log("======" + data);
        global.the_id_op = "";
        global.avatar_profile = "";
        var po = Users.find({ username: "" + sessionStorage.getItem('ironji_account_username') }, { sort: { text: 1 } }).fetch();
        for (var key in po) {
            if (po.hasOwnProperty(key)) {
                //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);

                if (po[key].account_type == "driver") {
                    global.the_id_op = po[key]._id.valueOf() ;
                    global.avatar_profile = po[key].avatar_profile;
                }
            }
        }
        var elemId = e.target.id;
        var theData = {
            "user_id": data ,
            "regdate": new Date(),
            "my_id": global.the_id_op
        };
        //var myJSON = JSON.stringify(theData);
        Ironji_messages_my_chatties.insert(theData, function (error, result) {
            if (error) {
                console.log("user added"+error);
            }
            if (result) {
                
                console.log("user added");
                //e.target.style.display = "none";
                document.getElementById(elemId).style.display = "none";
                //this.click();
                
            }
        });
    }

   

    render() {
        return (<div>

            <div className="modal-content contactsListSd" style={{ width: "auto", marginTop: "5px", display: "" + this.props.data_display }}>
                <table>
                    <tbody>
                    <tr>
                            <td>{this.profileShow()}</td>
                        <td>
                                <h4>{this.props.ironji_users_username} </h4>
                                <h4>{this.props.ironji_users_account_type}</h4>
                                <h4>{this.props.ironji_users_id_gender}</h4>
                                
                        </td>
                            <td>
                                <button id={"id" + this.props.ironji_users_id} onClick={this.addThisUserToMyContacts.bind(this, this.props.ironji_users_id)} className="btn-info">Add to contact list</button>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
           
        </div>
        );
    }

}

export default withTracker(() => {
    return {
        tasks: Users.find({}).fetch(),
    };
})(DriverMessagesContactsSearch);
