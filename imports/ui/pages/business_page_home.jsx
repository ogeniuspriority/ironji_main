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
import { Home_visit_links } from './Home_visit_links';

class business_page_home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideCompleted: false,
        };
        global.username = "xxx";
        global.password = "xxx";
    }
    componentDidMount() {




    }






    render() {
        return (<div className="container">

            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <img style={{ maxHeight: "100px", maxWidth: "100px" }} src="/images/ironji_logo.png" />
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse" >
                        <ul className="nav navbar-nav navbar-right" style={{ background: "skyblue",borderRadius:"6px" }}>
                            <li className="nav-item">
                                <a className="nav-link" href="/BusinessProfile">Business Page
              <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Team">About The Team</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="/">Use the web protype</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container">
                <h5>Ironji (Simple, Fast, Reliable)</h5>
                <div className="row align-items-center my-5">
                    <div className="col-lg-7">
                        <img className="img-fluid rounded" style={{width:"100%"}} src="images/farmer_0.jpg" alt="" />
                    </div>

                    <div className="col-lg-5">
                        <h1 className="font-weight-light">Ironji</h1>
                        <p>A transport logistics and trade assistant company.
                             Make Goods Available using
      Cheap and Reliable
         Transportation.
                            <h5>Now working on an app for both drivers and shipment services' seekers, comming soon...</h5>

</p>
                        
                    </div>

                </div>

                


                <div className="row">
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title">We are here to provide reliable logistics infrastructure to the trade ecosytem:</h2>
                                <p className="card-text">
                                    Farmers lack access to affordable transport
Leads to selling harvest locally at a very
cheap price
This causes farmers to get bankrupt
On the other side:<hr/>
Drivers spend a long time parking; waiting for traders/farmers needing transport
Traders and Customers buy fresh food at a high price due to expensive transport and lack of information about farmers with fresh food ready to sale

                                </p>
                            </div>
                           
                        </div>
                    </div>

                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title">Solutions:</h2>
                                <p className="card-text">
                                    Helping farmers to showcase their products to traders and customers
    Connecting farmers to a pool of drivers in order to compete and come up with a cheaper price
</p>
                            </div>
                          
                        </div>
                    </div>

                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title">Vision:</h2>
                                <p className="card-text">Helping farmers to showcase their products to traders and customers
Connecting farmers to a pool of drivers in order to compete and come up with a cheaper price.
                                </p><p>
                                    Non-local traders struggle to get trusted drivers in areas like when at the farms.<hr/>

We connect traders to trusted drivers in a platform to ease freight safety and digitise trucks ride hailing

Market information is still using word of mouth,
Which is not reliable in many cases.

                                </p>
                            </div>
                            
                        </div>
                    </div>


                </div>


            </div>
            <footer className="py-5 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright &copy; IronjiTrade Ltd. 2019</p>
                </div>

            </footer>
        </div>
        );
    }

}
export default withTracker(props => {

    return {
        users_data: Users.find({ text: 'Lucky John' }, { sort: { text: 1 } }).fetch(),
        users_data_all: Users.find({}, { sort: { text: 1 } }).fetch(),
        users_i_am_in: Users.find({ username: global.username, password: global.password }, { sort: { text: 1 } }).fetch()

    };
})(business_page_home);
