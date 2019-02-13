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


export class BuyersSendCargoWin4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideCompleted: false
        };
    }
    componentDidMount() {

    }
    openNegotiationRoomWin4(param, e) {
        document.getElementById("buyerCarryCargoWin4ChatRoom").style.display = "block";
    }

    render() {
        return (<div>

            <div style={{ padding: "5px", borderRadius: "4px", margin: "5px", boxShadow: "2px 2px #333", border: "1px solid black" }}>
                <table className="table-striped">
                    <tr className="row">
                        <td>Ironji Shipment Id:</td><td>34567.ab.88</td>
                    </tr>
                    <tr className="row">
                        <td>From:</td><td>Mugabo</td>
                    </tr >
                    <tr className="row">
                        <td>Transporter:</td><td>Mugabo</td>
                    </tr >
                    <tr className="row">
                        <td>Account type:</td><td>Trader</td>
                    </tr>
                    <tr className="row">
                        <td>Product weight:</td><td>10 kg</td>
                    </tr>
                    <tr className="row">
                        <td>Product volume:</td><td>3 meter cubes</td>
                    </tr>
                    <tr className="row">
                        <td>Date of initiation:</td><td>12/07/2019</td>
                    </tr>
                    <tr className="row">
                        <td>Pick up location:</td><td>Kanombe kk 57 St</td>
                    </tr>
                    <tr className="row">
                        <td>Cargo Destination:</td><td>Burera BN 57 St</td>
                    </tr>
                    <tr className="row">
                        <td>Cargo Additional Details:</td><td>It is in a yellow envelope!</td>
                    </tr>
                </table>
                <table>
                    <tr className="row">
                        <td></td><td><button onClick={this.openNegotiationRoomWin4.bind(this, "win4")} className="btn-primary">Open Deal Negotiation Window <i className="fa fa-info-circle" ></i></button></td>
                    </tr>
                    <tr className="row">
                        <td><button className="btn-primary">See digital contract</button></td>
                    </tr>
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
})(BuyersSendCargoWin4);
