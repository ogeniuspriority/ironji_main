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


export class Home_visit_links extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideCompleted: false,
        };
  
    }
    componentDidMount() {
    
       


    }
   

    

  
    render() {
        return (<div >
            <div className="col theTextDown">Follow us and like us on<br /><span className="minify">Dukurikire undadukunde kuri</span></div>
            <div className="col"><a target="_blank" href="https://m.facebook.com/Ironjiplatform/"><img className="followLinks" src="images/facebook.png" /></a></div>
            <div className="col"><a target="_blank" href="https://instagram.com/ironji_trade_ltd?utm_source=ig_profile_share&igshid=6l1eh8fvgjxp"><img className="followLinks" src="images/instagram.png" /></a></div>
            <div className="col"><a target="_blank" href="https://instagram.com/ironji_trade_ltd?utm_source=ig_profile_share&igshid=6l1eh8fvgjxp"><img className="followLinks" src="images/linkedin.png" /></a></div>
            <div className="col"><a target="_blank" href="https://twitter.com/Ironji1?s=09"><img className="followLinks" src="images/twitter.png" /></a></div>


        </div>
        );
    }

}
export default withTracker(props => {

    return {
        users_data: Users.find({ text: 'Lucky John' }, { sort: { text: 1 } }).fetch(),
       
    };
})(Home_visit_links);
