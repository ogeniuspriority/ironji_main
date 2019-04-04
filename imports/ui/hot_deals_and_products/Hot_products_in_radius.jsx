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
import { Ironji_messages_conversations } from '../../api/ironji_messages_conversations';

export class Hot_products_in_radius extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideCompleted: false,
            thisAvatar: "/images/profile.png"
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
        
    }
   

   
    render() {
        return (<div>
            <div  className="modal-content" style={{ width: "120%",height:"auto", marginTop: "5px" }}>
                <table>
                    <tbody>
                        <tr>
                            <td><img src={this.props.prod_5} style={{width:"80px",maxWidth:"80px",padding:"2px"}} /></td>
                            <td><div style={{padding: "5px", borderBottom: "2px solid #cdcdcd", boxShadow: "2px 2px #000" }}>{this.props.prod_4}</div>
                            </td>
                        </tr>
                        <tr>
                            <td><button className="btn-success" style={{fontSize:"11px"}}>See On Map</button>
                            </td>
                            <td><button className="btn-success" style={{ fontSize: "11px" }}>Talk to them</button></td>
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
})(Hot_products_in_radius);
