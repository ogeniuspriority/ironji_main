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


class Home extends Component {
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
    handleSubmit(event) {
        event.preventDefault();
        // Find the text field via the React ref
        const text = this.refs.textInput.value.trim();
        Tasks.insert({
            text,
            createdAt: new Date(), // current time
        });
        // Clear form
        this.refs.textInput.value = '';
    }

    RegisterAsDriver() {
        //Users.remove();
        window.open("/driverRegister", "_self");

    }

    RegisterAsClient() {
        window.open("/clientRegister", "_self")
    }

    frequentlyAskedQuestions() {
        window.open("/fq_asked", "_self")
    }

    loginIntoAccount() {
        global.username = this.refs.username.value;
        global.password = this.refs.password.value;
        //alert(this.refs.username.value+"--"+this.refs.password.value+"--"+global.username);
        //sessionStorage.setItem('ironji_id', 'value');
        //window.open("/driverMainPage","_self")
        //--------users_i_am_in
        //console.log(Users.find({username:global.username,password: global.password}, { sort: { text: 1 } }).fetch());
        //alert(this.props.users_i_am_in+"--"+ global.username);
        sessionStorage.clear();
        var po = Users.find({ username: global.username, password: global.password }, { sort: { text: 1 } }).fetch();

        if (po.length == 0) {
            alert("Wrong Username  Or Password");

        } else {
            for (var key in po) {
                if (po.hasOwnProperty(key)) {
                    console.log(key + " -> " + po[key]._id + "--" + po[key].username + "--" + po[key].account_type);

                    if (po[key].account_type == "client") {
                        //alert("Client");
                        sessionStorage.setItem('ironji_id', po[key]._id);
                        sessionStorage.setItem('ironji_account_type', po[key].account_type);
                        sessionStorage.setItem('ironji_account_username', po[key].username);
                        window.open("/clientMainPage", "_self");
                        break;
                    } else if (po[key].account_type == "driver") {
                        //alert("Driver");
                        sessionStorage.setItem('ironji_id', po[key]._id);
                        sessionStorage.setItem('ironji_account_type', po[key].account_type);
                        sessionStorage.setItem('ironji_account_username', po[key].username);
                        window.open("/driverMainPage", "_self");
                        break;
                    }

                } else {
                    alert("Wrong Username  Or Password");
                    break;
                }

            }
        }

    }

    render() {
        return (<div className="container">
            <div className="logoHome">
                <img src="images/ironji.png" />
                <div className="TrademarkAndName">Ironji<sup>TM</sup></div>
            </div>
            <div className="ABoutOurProduct">Ironji is a platform that acts as a bridge to connect drivers and people who need transportation of goods using existing routes, mostly traders.
                This app helps in linking these two parties and also help to regulate and even reduce scarcity and surplus of goods in different areas.
        <br /><span className="minify">Ironji ni urubuga ruje guhuza abashoferi hamwe n' abantu bakeneye gutwazwa ibintu cyane cyane ibiryo hakoreshejwe inzira zisanzwe zikoreshwa mu kujya mu duce tumwe na tumwe cg abashoferi basanzwe bajyayo, cyane mu gufasha abacuruzi.
            Mu guhuza izi mpande zombi bigafasha kuringanziza ukubura kw'ibintu mu gace kamwe no kuba byaba byinshi mu kandi gace.</span>
            </div>
            <div className="MyButtonsHome">
                <div className="padMe">
                    <button className='btn  theHomeBtns' onClick={this.RegisterAsDriver.bind(this)} >I'm a driver<br /><span className='minify'>Ndi umushoferi</span></button>
                </div>
                <div className="padMe">
                    <button className='btn  theHomeBtns' onClick={this.RegisterAsClient.bind(this)} >I need a driver<br /><span className='minify'>Nkeneye umushoferi</span></button>
                </div>
            </div>
            <div className="container">
                <div className="row theTgg">
                    <div className="col-sm alreadyAccount">Already have an account?<br /><span className="minify">Usanzwe ufite konti</span></div>
                    <div className="col-sm LoginPOP" data-toggle="modal" data-target="#exampleModal">Login<br /><span className="minify">Injira</span></div>

                </div>
            </div>


            <div className="ForumLink pull-right">
                <span className="FAQ_" onClick={this.frequentlyAskedQuestions.bind(this)} >Frequently Asked Questions</span><br />
                <span className="faqAbbrev" onClick={this.frequentlyAskedQuestions.bind(this)} >FAQ</span>
            </div>
            <div className="clearBoth"></div>
            <div className="modal fade" id="ForgotPasswordModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Log Onto Ironji Platform<br /><span className="minify">Injira ku rubuga rw' Ironji</span></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="form-group">
                                    <label ><b>Telephone Or Email</b><br /><span className='minify'>Telefoni cg Email</span></label>
                                    <input className="widthLogInput" type="text" placeholder="" name="uname" required />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success pull-center" type="button">Get Code<br /><span className='minify'>Aka Code</span></button>
                                </div>
                                <div className="form-group">
                                    <label ><b>Put Received Code</b><br /><span className='minify'>Shyiramo CodeWahawel</span></label>
                                    <input className="widthLogInput" type="text" placeholder="" name="uname" required />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success pull-center" type="button">Verify<br /><span className='minify'>Emeza</span></button>
                                </div>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close<br /><span className='minify'>Funga</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Log Onto Ironji Platform<br /><span className="minify">Injira ku rubuga rw' Ironji</span></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="form-group">
                                    <label ><b>Username</b><br /><span className='minify'>Izina ryo kwinjira</span></label>
                                    <input className="widthLogInput" ref="username" type="text" placeholder="Enter Username" name="uname" required />
                                </div><div className="form-group">

                                    <label ><b>Password</b><br /><span className='minify'>Ijambo ry' ibanga</span></label>
                                    <input type="password" ref="password" className="widthLogInput" placeholder="Enter Password" name="psw" required />
                                </div>
                                <div className="form-group">
                                    <button data-toggle="modal" data-dismiss="modal" data-target="#ForgotPasswordModal" className="btn  thetransparent" type="button">Forgot Password<br /><span className='minify'>Wibagiwe Ijambo ry'ibanga.</span></button>
                                </div>
                                <label className="thth">
                                    <input type="checkbox" name="remember" /> Remember me
                            <br /><span className='minify'>Uzanyibuke Ningaruka</span>
                                </label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close<br /><span className='minify'>Funga</span></button>
                            <button type="button" onClick={this.loginIntoAccount.bind(this)} className="btn btn-primary">Login<br /><span className='minify'>Injira</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pull-right">
                <div className="row pull-right theLinkdss">
                    <div className="col theTextDown">Follow us and like us on<br /><span className="minify">Dukurikire undadukunde kuri</span></div>
                    <div className="col"><a href="#"><img className="followLinks" src="images/facebook.png" /></a></div>
                    <div className="col"><a href="#"><img className="followLinks" src="images/instagram.png" /></a></div>
                    <div className="col"><a href="#"><img className="followLinks" src="images/linkedin.png" /></a></div>
                    <div className="col"><a href="#"><img className="followLinks" src="images/snapchat.png" /></a></div>
                    <div className="col"><a href="#"><img className="followLinks" src="images/twitter.png" /></a></div>
                </div>
            </div>


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
})(Home);
