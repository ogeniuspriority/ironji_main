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


export class DriverCarryCargoWin1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideCompleted: false
        };
    }
    componentDidMount() {

    }
   

    render() {
        return (<div>
            <div style={{ padding: "5px", borderRadius: "4px", margin: "5px", boxShadow: "2px 2px #333", border: "1px solid black" }}>
                <table className="table-striped">
                    <tbody>
                    <tr className="row">
                        <td>Ironji Shipment Id:</td><td>34567.ab.88</td>
                    </tr>
                    <tr className="row">
                        <td>From:</td><td>Mugabo</td>
                    </tr>
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
                    <tr className="row">
                            <td>Ongoing Deal Details:</td><td>Agreed on 500 Rwf</td>
                        </tr></tbody>
                </table>
                <table><tbody>
                    <tr className="row">
                        <td><button className="btn-danger">Cancel the deal</button></td>
                    </tr></tbody>
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
})(DriverCarryCargoWin1);
