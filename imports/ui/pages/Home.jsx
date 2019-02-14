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
        document.getElementById("rememberME").style.display = "none";
       


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
        window.open("/clientRegister", "_self");
    }
    
    RegisterAsBuyer(){
        window.open("/buyerRegister", "_self");
    }
    RegisterAsFarmer() {
        window.open("/FarmerRegister", "_self");
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
            //------------Set--the cookies--
           
           
            //----------------
            for (var key in po) {
                if (po.hasOwnProperty(key)) {
                    console.log(key + " -> " + po[key]._id + "--" + po[key].username + "--" + po[key].account_type);
                    console.log("email--", po[key].email);
                    console.log("id--", po[key]._id);
                    if (po[key].account_type == "client") {
                        //alert("Client");
                        sessionStorage.setItem('ironji_id', po[key]._id);
                        sessionStorage.setItem('ironji_account_type', po[key].account_type);
                        sessionStorage.setItem('ironji_account_username', po[key].username);
                        window.open("/TraderDashboard", "_self");
                        break;
                    } else if (po[key].account_type == "driver") {
                        //alert("Driver");
                        sessionStorage.setItem('ironji_id', po[key]._id);
                        sessionStorage.setItem('ironji_account_type', po[key].account_type);
                        sessionStorage.setItem('ironji_account_username', po[key].username);
                        window.open("/DriverDashboard", "_self");
                        break;
                    }else if (po[key].account_type == "buyer") {
                        //alert("Driver");
                        sessionStorage.setItem('ironji_id', po[key]._id);
                        sessionStorage.setItem('ironji_account_type', po[key].account_type);
                        sessionStorage.setItem('ironji_account_username', po[key].username);
                        window.open("/BuyerDashboard", "_self");
                        break;
                    } else if (po[key].account_type == "farmer") {
                        //alert("Driver");
                        sessionStorage.setItem('ironji_id', po[key]._id);
                        sessionStorage.setItem('ironji_account_type', po[key].account_type);
                        sessionStorage.setItem('ironji_account_username', po[key].username);
                        window.open("/FarmerDashboard", "_self");
                        break;
                    }

                } else {
                    alert("Wrong Username  Or Password");
                    break;
                }

            }
        }

    }
    //------------getEmailOrTelephone_verify
    findRegistryCode() {
        global.the_id_opU = "";
        global.emailU = "";
        global.USername = "";
        var avail = "";
        var which="";
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(document.getElementById("getEmailOrTelephone").value).toLowerCase())) {
            which = "email";
        } else {
            avail = "email";
        }

        var phoneno = /^\d{12}$/;
        if (!(document.getElementById("getEmailOrTelephone").value.match(phoneno))){
            which = "phone";
        } else {
            avail = "phone";
        }

        if (avail == "") {
            toastr.error('Invalid Email or Phone Number!', 'Status!', { timeOut: 3000 });
            //toastr.success('Product Price Updated!', 'Status!', { timeOut: 5000 });
        } else {
            global.emailU = document.getElementById("getEmailOrTelephone").value;
            var po;
            if (avail.includes("phone")) {
                po = Users.find({ phone: global.emailU }, { sort: { text: 1 } }).fetch();
                for (var key in po) {
                    if (po.hasOwnProperty(key)) {
                        global.the_id_op = po[key]._id;
                    }
                }
            } else {
                po = Users.find({ email: global.emailU }, { sort: { text: 1 } }).fetch();
                for (var key in po) {
                    if (po.hasOwnProperty(key)) {
                        global.the_id_opU = po[key]._id;
                        console.log("email--", po[key].email);
                        console.log("id--", po[key]._id);
                        console.log("username--", po[key].username);
                        console.log("username--", po[key].username);
                        global.USername = po[key].username;
                    }
                }
            }

            

            if (po.length == 0) {                
                toastr.error("The email or phone doen't exist in our system!", 'Status!', { timeOut: 3000 });
            } else {
                //------------Set--the cookies--global.the_id_op
                
                var genRandomCode = "";
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                for (var i = 0; i < 5; i++) {
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                }
                genRandomCode = text;
                
            
                fetch('https://map.ogeniuspriority.com/map_scripts/send_mail_account_retreive.php?email=' + document.getElementById("getEmailOrTelephone").value + "&type=" + avail + "&genRandomCode=" + genRandomCode, {
                    
                })
                    .then(response => response.json())
                    .then(resData => {
                       setTimeout(function cb1() {
                            Users.update({ _id: global.the_id_opU }, {
                                $set: { password: genRandomCode }
                            }, { "multi": true }, function (err, result) {
                                if (err) {

                                } else {
                                    //alert(the_id_op + "oooo" + genRandomCode + "----" + result);
                                    console.log(result);
                                    toastr.success('Your new passcode have been sent!', 'Status!', { timeOut: 1000 });

                                }
                            });
                        }, 0);
                        
                    });
            }

            

        }

        
    }

    findRegistryCode_verify() {
        var passCode = document.getElementById("getEmailOrTelephone_verify").value;
        var po = Users.find({ username: global.USername, password: passCode }, { sort: { text: 1 } }).fetch();

        if (po.length == 0) {
            alert("Wrong Username  Or Password");

        } else {
            //------------Set--the cookies--


            //----------------
            for (var key in po) {
                if (po.hasOwnProperty(key)) {
                    console.log(key + " -> " + po[key]._id + "--" + po[key].username + "--" + po[key].account_type);
                    console.log("email--", po[key].email);
                    console.log("id--", po[key]._id);
                    if (po[key].account_type == "client") {
                        //alert("Client");
                        sessionStorage.setItem('ironji_id', po[key]._id);
                        sessionStorage.setItem('ironji_account_type', po[key].account_type);
                        sessionStorage.setItem('ironji_account_username', po[key].username);
                        window.open("/TraderDashboard", "_self");
                        break;
                    } else if (po[key].account_type == "driver") {
                        //alert("Driver");
                        sessionStorage.setItem('ironji_id', po[key]._id);
                        sessionStorage.setItem('ironji_account_type', po[key].account_type);
                        sessionStorage.setItem('ironji_account_username', po[key].username);
                        window.open("/DriverDashboard", "_self");
                        break;
                    } else if (po[key].account_type == "buyer") {
                        //alert("Driver");
                        sessionStorage.setItem('ironji_id', po[key]._id);
                        sessionStorage.setItem('ironji_account_type', po[key].account_type);
                        sessionStorage.setItem('ironji_account_username', po[key].username);
                        window.open("/BuyerDashboard", "_self");
                        break;
                    } else if (po[key].account_type == "farmer") {
                        //alert("Driver");
                        sessionStorage.setItem('ironji_id', po[key]._id);
                        sessionStorage.setItem('ironji_account_type', po[key].account_type);
                        sessionStorage.setItem('ironji_account_username', po[key].username);
                        window.open("/FarmerDashboard", "_self");
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
            <div className="ABoutOurProduct" style={{width:"500px",marginLeft:"300px"}}>Ironji is a service that allows you to see cheap goods available near you, people selling them, where they are and any available near mode of transporation that can pick those goods. "Your modern trade assistant"
        <br /><span className="minify">Ironji ni serivisi ije kugufasha kubona ibicuruzwa biboneka hafi y'aho uri, abantu bari kubigurisha ndetse n'uburyo bw' ubwikorezi bushobora kugufasha kubitwara. "Ukunganira mu bucuruzi bugezweho" </span>
            </div>
            <div className="MyButtonsHome" >
                <div className="padMe" style={{float:"left"}}>
                    <button className='btn  theHomeBtns' onClick={this.RegisterAsDriver.bind(this)} >I'm a driver<br /><span className='minify'>Ndi umushoferi</span></button>
                </div>
                <div className="padMe" style={{float:"left",marginLeft:"10%"}}>
                    <button className='btn  theHomeBtns' onClick={this.RegisterAsClient.bind(this)} >I am a trader<br /><span className='minify'>Ndi umucuruzi</span></button>
                </div>
                <div className="padMe" style={{float:"left",marginLeft:"10%"}}>
                    <button className='btn  theHomeBtns' onClick={this.RegisterAsBuyer.bind(this)} >I'm a buyer<br /><span className='minify'>Ndi umuguzi</span></button>
                </div>
                <div className="padMe" style={{ float: "left", marginLeft: "10%" }}>
                    <button className='btn  theHomeBtns' onClick={this.RegisterAsFarmer.bind(this)} >I'm a farmer<br /><span className='minify'>Ndi umuguzi</span></button>
                </div>
                <div style={{clear:"both"}}></div>
            </div>
            <div className="container">
                <div className="">                    
                    <div className="btn-primary d-flex justify-content-center" style={{width:"200px",padding:"15px",textALign:"center",borderRadius:"10px"}} data-toggle="modal" data-target="#exampleModal"><div >Already have an account?<br /><span className="minify">Usanzwe ufite konti</span></div><br/>Login<br /><span className="minify">Injira</span></div>

                </div>
            </div>


            <div className="ForumLink pull-right btn-primary" style={{padding:"5px"}}>
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
                                    <input className="widthLogInput" type="text" id="getEmailOrTelephone" placeholder="" name="uname" required />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success pull-center" onClick={this.findRegistryCode.bind(this)} type="button">Get Code<br /><span className='minify'>Aka Code</span></button>
                                </div>
                                <div className="form-group">
                                    <label ><b>Put Received Code</b><br /><span className='minify'>Shyiramo CodeWahawel</span></label>
                                    <input id="getEmailOrTelephone_verify"  className="widthLogInput" type="text" placeholder="" name="uname" required />
                                </div>
                                <div className="form-group">
                                    <button onClick={this.findRegistryCode_verify.bind(this)} className="btn btn-success pull-center" type="button">Verify<br /><span className='minify'>Emeza</span></button>
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
                                    <input className="widthLogInput" ref="username" id="username" type="text" placeholder="Enter Username" name="uname" required />
                                </div><div className="form-group">

                                    <label ><b>Password</b><br /><span className='minify'>Ijambo ry' ibanga</span></label>
                                    <input type="password" ref="password" id="password" className="widthLogInput" placeholder="Enter Password" name="psw" required />
                                </div>
                               
                                <label id="rememberME" className="thth">
                                    <input type="checkbox"  ref="rememberME" name="remember" /> Remember me
                            <br /><span className='minify'>Uzanyibuke Ningaruka</span>
                                </label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close<br /><span className='minify'>Funga</span></button>
                            <button type="button" onClick={this.loginIntoAccount.bind(this)} className="btn btn-primary">Login<br /><span className='minify'>Injira</span></button>
                        </div>
                         <div className="form-group">
                                    <button data-toggle="modal" data-dismiss="modal" data-target="#ForgotPasswordModal" className="btn  thetransparent" type="button">Forgot Password<br /><span className='minify'>Wibagiwe Ijambo ry'ibanga.</span></button>
                                </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <a href={"/Team"} style={{color:"blue",fontSize:"17px"}} >The Team behind Ironji.</a>
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
