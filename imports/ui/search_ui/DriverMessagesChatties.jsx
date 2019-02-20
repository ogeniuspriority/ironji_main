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

import { ironji_messages_my_chatties } from '../../api/ironji_messages_my_chatties';


export class DriverMessagesChatties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideCompleted: false,
            thisAvatar: "/images/profile.png"
        };
    }
    componentDidMount() {
        
        if (this.props.ironji_users_image.includes("undefined")) {
            global.avatar = "/images/profile.png";
            this.setState({ thisAvatar: global.avatar });

            
        } else {
            global.avatar = "https://map.ogeniuspriority.com/upload_scripts/" + this.props.ironji_users_image;
            this.setState({ thisAvatar: global.avatar });
        }
        
    }
    openNegotiationRoomWin0(param, e) {
        document.getElementById("buyerCarryCargoWin0ChatRoom").style.display = "block";
    }

    profileShow()
    {
        return (<img className="img-circle" style={{ maxWidth: "70px", maxHeight: "70px" }} src={this.state.thisAvatar} />);
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
                            <button className="btn-info">Add to contact list</button>
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
})(DriverMessagesChatties);
