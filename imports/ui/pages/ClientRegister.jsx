import React, { Component }
from 'react';
import classNames from 'classnames';
import Modal from 'react-bootstrap-modal';
import {Users} from '../../api/users';
import { withTracker } from 'meteor/react-meteor-data';
import DatePicker from 'react-datepicker';
import moment from 'react-moment';
import 'moment-timezone';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';


class ClientRegister extends Component {
constructor(props) {
super(props);
        this.state = {
        hideCompleted: false
        };
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

RegisterAsDriver(){

window.open("/driverRegister", "_self");
        }

RegisterAsClient(){
window.open("/clientRegister", "_self")
        }

frequentlyAskedQuestions(){
window.open("/fq_asked", "_self")
        }

loginIntoAccount(){
window.open("/driverMainPage", "_self")
        }
registerDriver(e){
             e.preventDefault();
             
             if(this.refs.id_number.value==""){
                 alert("Empty Id Number");
             }else if(this.refs.surname.value==""){
                 alert("Empty Surname");
             }else if(this.refs.lastname.value==""){
                 alert("Empty Last Name");
             }else if(this.refs.email.value==""){
                 alert("Empty Email");
             }else if(this.refs.occupation.value==""){
                 alert("Empty Occupation");
             }else if(this.refs.phonenumber.value==""){
                 alert("Empty Phone Nuber");
             }else if(this.refs.province.value==""){
                 alert("Empty Province");
             }else if(this.refs.district.value==""){
                 alert("Empty District");
             }else if(this.refs.sector.value==""){
                 alert("Empty Sector");
             }else if(this.refs.username.value==""){
                 alert("Empty Username");
             }else if(this.refs.password.value==""){
                 alert("Empty Password");
             }else if(this.refs.password_retype.value==""){
                 alert("Empty Password Confirm");
             }else if(this.refs.password_retype.value!=this.refs.password_retype.value){
                 alert("Passwords do not math!");
             }else if(!this.refs.checkInfo.checked){
                 alert("Accept that information provided are true !");
             }else{
                 
        global.id_number=this.refs.id_number.value;
                 global.surname=this.refs.surname.value;
                global.lastname=this.refs.lastname.value;
                 global.email=this.refs.email.value;
                 global.plate_number="90";
                 global.occupation=this.refs.occupation.value;
                 global.phonenumber=this.refs.phonenumber.value;
                  global.province=this.refs.province.value;
                   global.district=this.refs.district.value;
                     global.sector=this.refs.sector.value;
                     global.username=this.refs.username.value;
                     global.password=this.refs.password.value;
                 //alert(global.username.value);
                     var theData={
   "text":"Lucky John",
   "createdAt": new Date(),
   "account_type":"client",
   "currentLatitude":"-1.9443547",
   "currentLongitude":"30.089413699999998",
   "accountConfirmed":"1",
   "id_number":global.id_number,
   "surname":global.surname,
   "lastname":global.lastname,
   "email":global.email,
   "plate_number":global.plate_number,
   "occupation":global.occupation,
   "phonenumber":global.phonenumber,
   "province":global.province,
   "district":global.district,
   "sector":global.sector,
   "username":global.username,
   "password":global.password,
};
//var myJSON = JSON.stringify(theData);
               Users.insert(theData,function( error, result) { 
    if ( error ){
        alert("User Not Created");
    }
    if ( result ){
          sessionStorage.setItem('ironji_account_type', "client");
          sessionStorage.setItem('ironji_account_username', username);
           window.open("/clientMainPage","_self");
    }
  });


             }
        }
render() {
return (<div className="container">
<div>
    <table>
    <tbody>
    <tr><td><a href="/" className="headerLinks">Homepage</a></td><td></td></tr>
        </tbody>
        </table>
        </div>
    <div className="logoHome">
        <img src="images/ironji.png" />
        <div className="TrademarkAndName">Ironji<sup>TM</sup></div>
    </div>
    <div className="container">
        <h4 className="signUpTxt">Sign Up:</h4>
        <h4 className="signUpTxt_push">TRADER<br/><span className="minify">Umucuruzi</span></h4>
        <div>
            <form  method="post" onSubmit={this.registerDriver.bind(this)}>
             <div className="row">
                        <div className="col-sm">ID Number:</div>
                        <div className="col-sm"><input type="number" ref="id_number" className="form-control" placeholder="" required="required"/></div>
                    </div>  
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm"><div className="row">
                        <div className="col-sm">Surname:</div>
                        <div className="col-sm"><input type="text" ref="surname" className="form-control" placeholder="" required="required"/></div>
                    </div>   </div>
                        <div className="col-sm"><div className="row">
                        <div className="col-sm">Lastname</div>
                        <div className="col-sm"><input type="text" ref="lastname" className="form-control" placeholder="" required="required"/></div>
                    </div>   </div>
                    </div>        	
                </div>
                <div className="row">
                        <div className="col-sm">Email:</div>
                        <div className="col-sm"><input type="email" ref="email" className="form-control" placeholder="" required="required"/></div>
                    </div>  
                <div className="row" style={{display:"none"}}>
                        <div className="col-sm">Plate number:</div>
                        <div className="col-sm"><input type="text" ref="plate_number" className="form-control" placeholder="" required="required"/></div>
                    </div>  
                    <div className="row">
                        <div className="col-sm">Where do you work the most:</div>
                        <div className="col-sm"><input type="text" ref="occupation" className="form-control" placeholder="" required="required"/></div>
                    </div>  
                    <div className="row">
                        <div className="col-sm">Phone number:</div>
                        <div className="col-sm"><input type="text" ref="phonenumber" className="form-control" placeholder="" required="required"/></div>
                    </div>  
                    <div className="form-group">
                    <div className="row">
                        <div className="col-sm"><div className="row">
                        <div className="col-sm">Province:</div>
                        <div className="col-sm"><input ref="province" type="text" className="form-control" placeholder="Last Name" required="required"/></div>
                    </div>   </div>
                        <div className="col-sm"><div className="row">
                        <div className="col-sm">District:</div>
                        <div className="col-sm"><input ref="district" type="text" className="form-control" placeholder="Last Name" required="required"/></div>
                    </div>   </div>
                    <div className="col-sm"><div className="row">
                        <div className="col-sm">Sector:</div>
                        <div className="col-sm"><input type="text" ref="sector" className="form-control" placeholder="Last Name" required="required"/></div>
                    </div>   </div>
                    </div>        	
                </div>
             
                <div className="row">
                        <div className="col-sm">Username:</div>
                        <div className="col-sm"><input type="text" ref="username" className="form-control" placeholder="" required="required"/></div>
                    </div>  
                    <div className="row">
                        <div className="col-sm">Password:</div>
                        <div className="col-sm"><input type="passsword" ref="password" className="form-control" placeholder="" required="required"/></div>
                    </div>  
                     <div className="row">
                        <div className="col-sm">Confirm Password:</div>
                        <div className="col-sm"><input type="passsword" ref="password_retype" className="form-control" placeholder="" required="required"/></div>
                    </div>   
                    <div className="row">
                    <div className="col pull-right jkly"></div>
                        <div className="col"></div>
                        <div className="col jkly"><input type="checkbox" ref="checkInfo"  className="checkbox" placeholder="" required="required"/><span >I certify that the information provided are true</span></div>
                    </div>  
                <div className="form-group">
                    <button type="submit" className="btn btn-success pull-right">Sign Up</button>
                </div>
            </form>
        </div>

    </div>
    <div className="container">
        <div className="row theTgg" style={{display:"none"}}>
            <div className="col-sm alreadyAccount">Already have an account?<br/><span className="minify">Usanzwe ufite konti</span></div>
            <div className="col-sm LoginPOP" data-toggle="modal" data-target="#exampleModal">Login<br/><span className="minify">Injira</span></div>

        </div>
    </div>
    <div className="ForumLink pull-right">
        <span className="FAQ_" onClick={this.frequentlyAskedQuestions.bind(this)} >Frequently Asked Questions</span><br/>
        <span className="faqAbbrev" onClick={this.frequentlyAskedQuestions.bind(this)} >FAQ</span>
    </div>
    <div className="clearBoth"></div>
    <div className="modal fade" id="ForgotPasswordModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Log Onto Ironji Platform<br/><span className="minify">Injira ku rubuga rw' Ironji</span></h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="container">
                        <div className="form-group">
                            <label ><b>Telephone Or Email</b><br/><span className='minify'>Telefoni cg Email</span></label>
                            <input className="widthLogInput" type="text" placeholder=""  required/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success pull-center" type="button">Get Code<br/><span className='minify'>Aka Code</span></button>
                        </div>
                        <div className="form-group">
                            <label ><b>Put Received Code</b><br/><span className='minify'>Shyiramo CodeWahawel</span></label>
                            <input className="widthLogInput" type="text" placeholder=""  required/>
                        </div>     
                        <div className="form-group">
                            <button className="btn btn-success pull-center" type="button">Verify<br/><span className='minify'>Emeza</span></button>
                        </div>

                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close<br/><span className='minify'>Funga</span></button>
                </div>
            </div>
        </div>
    </div>
    <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Log Onto Ironji Platform<br/><span className="minify">Injira ku rubuga rw' Ironji</span></h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="container">
                        <div className="form-group">
                            <label ><b>Username</b><br/><span className='minify'>Izina ryo kwinjira</span></label>
                            <input className="widthLogInput" type="text" placeholder="Enter Username"  required/>
                        </div><div className="form-group">

                            <label ><b>Password</b><br/><span className='minify'>Ijambo ry' ibanga</span></label>
                            <input type="password" className="widthLogInput" placeholder="Enter Password" name="psw" required/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success" type="button">Login<br/><span className='minify'>Injira</span></button>
                            <button data-toggle="modal" data-dismiss="modal" data-target="#ForgotPasswordModal" className="btn  thetransparent" type="button">Forgot Password<br/><span className='minify'>Wibagiwe Ijambo ry'ibanga.</span></button>
                        </div>                
                        <label className="thth">
                            <input type="checkbox"   name="remember"/> Remember me
                            <br/><span className='minify'>Uzanyibuke Ningaruka</span>
                        </label>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close<br/><span className='minify'>Funga</span></button>
                    <button type="button" onClick={this.loginIntoAccount.bind(this)} className="btn btn-primary">Login<br/><span className='minify'>Injira</span></button>
                </div>
            </div>
        </div>
    </div>
    <div className="container pull-right"> 
        <div className="row pull-right theLinkdss">
            <div className="col theTextDown">Follow us and like us on<br/><span className="minify">Dukurikire undadukunde kuri</span></div>
            <div className="col"><a href="#"><img className="followLinks" src="images/facebook.png" /></a></div>
            <div className="col"><a href="#"><img className="followLinks" src="images/instagram.png" /></a></div>
            <div className="col"><a href="#"><img className="followLinks" src="images/linkedin.png" /></a></div>
            <div className="col"><a href="#"><img  className="followLinks" src="images/snapchat.png" /></a></div>
            <div className="col"><a href="#"><img className="followLinks" src="images/twitter.png" /></a></div>
        </div>
    </div>


</div>
);
}

}

export default withTracker(() => {
  return {
    tasks: Users.find({}).fetch(),
  };
})(ClientRegister);
