import React, { Component }
    from 'react';
import classNames from 'classnames';
import Modal from 'react-bootstrap-modal';
import { Users } from '../../api/users';
import { Client_hot_deals } from '../../api/hot_deals';
import { Drivers_schedules } from '../../api/drivers_schedules';
import { withTracker } from 'meteor/react-meteor-data';
import DatePicker from 'react-datepicker';
import moment from 'react-moment';
import 'moment-timezone';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import { render } from 'react-dom';
import Switch from 'react-toggle-switch';
import "react-toggle-switch/dist/css/switch.min.css";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { DriverMessagesContactsSearch } from '../search_ui/DriverMessagesContactsSearch';

import { Ironji_messages_my_chatties } from '../../api/ironji_messages_my_chatties';
import { Ironji_messages_conversations } from '../../api/ironji_messages_conversations';


import { DriverMessagesChatties } from '../search_ui/DriverMessagesChatties';
import { DriverMessagesChatties_ChatMessages } from '../search_ui/DriverMessagesChatties_ChatMessages';

class DriverMessages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ironjiPeopleSearch: [],
            ironjiMyChatties: [],
            allMyChatties: "",
            ironjiMyChatties_temporary: "",
            openedChatWinId: "0",
            lastIdLoaded: "0",
            chatMessages: [],
            openedUsername: "",
            accountType:""


        };
        this.highlightSelectedRow = this.highlightSelectedRow.bind(this);
    }
    componentDidMount() {
        global.search_param_key = "";
        global.search_query_orient = "All";
        //------------

        //-----------Assign the in ids-
        var that = this;
        setTimeout(function () {
            global.the_id_op = "";
            global.avatar_profile = "";
            var po = Users.find({ username: "" + sessionStorage.getItem('ironji_account_username') }, { sort: { text: 1 } }).fetch();
            for (var key in po) {
                if (po.hasOwnProperty(key)) {
                    //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);

                    if (po[key].account_type == "driver") {
                        global.the_id_op = po[key]._id;
                        global.avatar_profile = po[key].avatar_profile;
                    }
                }
            }

            var theDbRes = Ironji_messages_my_chatties.find({ "my_id": global.the_id_op }).fetch();
            console.log("length", theDbRes.length);

            var i_db = 0;
            for (var key in theDbRes) {
                if (theDbRes.hasOwnProperty(key)) {
                    //console.log("" + theMarkersOfTraders[key].markers_on_map_lat + "--" + theMarkersOfTraders[key].markers_on_map_lng);

                    if (i_db == 0) {
                        var currChatty = "";
                        currChatty = "" + theDbRes[key].user_id
                        that.setState({ allMyChatties: currChatty });
                        //-------------The Opened One--
                        that.setState({ openedChatWinId: theDbRes[key].user_id });
                        var that_0 = that;
                        setTimeout(function () {
                            global.username = "";
                            var po = Users.find({ _id: "" + that_0.state.openedChatWinId }, { sort: { text: 1 } }).fetch();
                            for (var key in po) {
                                if (po.hasOwnProperty(key)) {
                                    //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);


                                    global.username = po[key].username;
                                    that_0.setState({ openedUsername: po[key].username });
                                    that_0.setState({ accountType: po[key].account_type });


                                }
                            }
                        });
                        //----------------------
                        var that_1 = that;
                        setTimeout(function () {
                            var theDbRes = Ironji_messages_conversations.find({ $and: [{ $or: [{ "id_sender": { $eq: that.state.openedChatWinId } }, { "id_reciever": that_1.state.openedChatWinId }] }, { "_id": { $ne: "none" } }] }, { sort: { regdate: 1 } }).fetch();
                            //console.log("length", theDbRes.length);
                            var theResults = [];

                            that_1.setState({ chatMessages: theResults });

                            var i_db = 0;
                            for (var key in theDbRes) {
                                if (theDbRes.hasOwnProperty(key)) {
                                    //console.log("" + theMarkersOfTraders[key].markers_on_map_lat + "--" + theMarkersOfTraders[key].markers_on_map_lng);

                                    theResults.push(theDbRes[key]._id + "~" + theDbRes[key].id_sender + "~" + theDbRes[key].id_reciever + "~" + theDbRes[key].regdate + "~" + theDbRes[key].sent_time + "~" + theDbRes[key].receive_time + "~" + theDbRes[key].message_visibility + "~" + theDbRes[key].actual_message);

                                    i_db++;
                                }
                            }
                            //----------------
                            that_1.setState({ chatMessages: theResults });
                        }, 2000);

                    } else {
                        var currChatty = "";
                        currChatty = that.state.allMyChatties + "~" + theDbRes[key].user_id
                        that.setState({ allMyChatties: currChatty });
                    }
                    i_db++;
                }
            }
            //-----------
            that.prepareChattiesRender();
        }, 4000);
        //---------------Check for newly activated chatties--
        setInterval(function () {
            global.the_id_op = "";
            global.avatar_profile = "";
            var po = Users.find({ username: "" + sessionStorage.getItem('ironji_account_username') }, { sort: { text: 1 } }).fetch();
            for (var key in po) {
                if (po.hasOwnProperty(key)) {
                    //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);

                    if (po[key].account_type == "driver") {
                        global.the_id_op = po[key]._id;
                        global.avatar_profile = po[key].avatar_profile;
                    }
                }
            }

            var theDbRes = Ironji_messages_my_chatties.find({ "my_id": global.the_id_op }).fetch();
            console.log("length", theDbRes.length);

            var i_db = 0;
            for (var key in theDbRes) {
                if (theDbRes.hasOwnProperty(key)) {
                    //console.log("" + theMarkersOfTraders[key].markers_on_map_lat + "--" + theMarkersOfTraders[key].markers_on_map_lng);

                    if (i_db == 0) {
                        var currChatty = "";
                        currChatty = "" + theDbRes[key].user_id
                        that.setState({ allMyChatties: currChatty });

                    } else {
                        var currChatty = "";
                        currChatty = that.state.allMyChatties + "~" + theDbRes[key].user_id
                        that.setState({ allMyChatties: currChatty });
                    }
                    i_db++;
                }
            }
            //-----------
            if (that.ironjiMyChatties_temporary == "") {
                that.setState({ ironjiMyChatties_temporary: that.state.ironjiMyChatties });
            } else {
                if (that.ironjiMyChatties_temporary == that.state.ironjiMyChatties) {

                } else {
                    that.prepareChattiesRender();
                    that.setState({ ironjiMyChatties_temporary: that.state.ironjiMyChatties });
                }

            }

        }, 8000);
        //-------find current chat messages--
        var that = this;
        setTimeout(function () {
            var theDbRes = Ironji_messages_conversations.find({ $and: [{ $or: [{ "id_sender": { $eq: that.state.openedChatWinId } }, { "id_reciever": that.state.openedChatWinId }] }, { "_id": { $ne: "none" } }] }, { sort: { regdate:  1 } }).fetch();
            //console.log("length", theDbRes.length);
            var theResults = [];

            that.setState({ chatMessages: theResults });

            var i_db = 0;
            for (var key in theDbRes) {
                if (theDbRes.hasOwnProperty(key)) {
                    //console.log("" + theMarkersOfTraders[key].markers_on_map_lat + "--" + theMarkersOfTraders[key].markers_on_map_lng);

                    theResults.push(theDbRes[key]._id + "~" + theDbRes[key].id_sender + "~" + theDbRes[key].id_reciever + "~" + theDbRes[key].regdate + "~" + theDbRes[key].sent_time + "~" + theDbRes[key].receive_time + "~" + theDbRes[key].message_visibility + "~" + theDbRes[key].actual_message);

                    i_db++;
                }
            }
            //----------------
            that.setState({ chatMessages: theResults });
        }, 8100);
        //-----------
        var that = this;
        setTimeout(function () {
            global.username = "";
            var po = Users.find({ _id: "" + that.state.openedChatWinId }, { sort: { text: 1 } }).fetch();
            for (var key in po) {
                if (po.hasOwnProperty(key)) {
                    //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);

                    
                        global.username = po[key].username;
                    that.setState({ openedUsername: po[key].username });
                    that.setState({ accountType: po[key].account_type });
                    
                   
                }
            }
        });


    }
    renderThisAccountAvatar() {

        global.the_id_op = "";
        global.avatar_profile = "";
        var po = Users.find({ username: "" + sessionStorage.getItem('ironji_account_username') }, { sort: { text: 1 } }).fetch();
        for (var key in po) {
            if (po.hasOwnProperty(key)) {
                //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);

                if (po[key].account_type == "driver") {
                    global.the_id_op = po[key]._id;
                    global.avatar_profile = po[key].avatar_profile;
                }
            }
        }
        var url = "";
        if (typeof global.avatar_profile === 'undefined') {
            // variable is undefined
            url = "/images/profile.png";
        } else {
            url = "https://map.ogeniuspriority.com/upload_scripts/" + global.avatar_profile;
        }
        global.userna_me = "";
        return (<img className="followLinks" src={url} />);
    }

    showListOfUsers() {
        global.search_param_key = document.getElementById("searchContactsValueParam").value;
        global.the_id_op = "";
        var po = Users.find({ username: "" + sessionStorage.getItem('ironji_account_username') }, { sort: { text: 1 } }).fetch();
        for (var key in po) {
            if (po.hasOwnProperty(key)) {
                //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);

                if (po[key].account_type == "driver") {
                    global.the_id_op = po[key]._id;
                }
            }
        }
        //---------------Search Params--      
        //---
        global.search_param_key = "";
        var searchRegex = "";
        try {
            global.search_param_key = global.search_param_key.replace(/\W/g, "");
            searchRegex = new RegExp(global.search_param_key, "igm");
            //console.log("searchRegex", searchRegex);
        } catch (err) {
            //console.log("error", err);
        }

        if (global.search_query_orient.includes("All")) {
            //---------
            //console.log("cyuma", "All");

            var theDbRes = Users.find({ $and: [{ "_id": { $ne: global.the_id_op } }, { $or: [{ username: searchRegex }, { surname: searchRegex }, { lastname: searchRegex }] }] }, { sort: { createdAt: - 1 } }).fetch();
            //console.log("length", theDbRes.length);
            var theResults = [];

            this.setState({ ironjiPeopleSearch: theResults });

            var i_db = 0;
            for (var key in theDbRes) {
                if (theDbRes.hasOwnProperty(key)) {
                    //console.log("" + theMarkersOfTraders[key].markers_on_map_lat + "--" + theMarkersOfTraders[key].markers_on_map_lng);
                    theResults.push("" + theDbRes[key]._id + "~" + theDbRes[key].text + "~" + theDbRes[key].createdAt + "~" + theDbRes[key].account_type + "~" + theDbRes[key].currentLatitude + "~" + theDbRes[key].currentLongitude + "~" + theDbRes[key].accountConfirmed + "~" + theDbRes[key].id_number + "~" + theDbRes[key].surname + "~" + theDbRes[key].lastname + "~" + theDbRes[key].email + "~" + theDbRes[key].platenumber + "~" + theDbRes[key].province + "~" + theDbRes[key].district + "~" + theDbRes[key].sector + "~" + theDbRes[key].username + "~" + theDbRes[key].gender + "~" + theDbRes[key].avatar_profile);
                    i_db++;
                }
            }
            //----------------
            this.setState({ ironjiPeopleSearch: theResults });

        } else if (global.search_query_orient.includes("Buyers")) {
            //---------
            //console.log("cyuma", "Buyers");
            var theDbRes = Users.find({ $and: [{ "_id": { $ne: global.the_id_op } }, { account_type: "buyer" }, { $or: [{ username: searchRegex }, { surname: searchRegex }, { lastname: searchRegex }] }] }, { sort: { createdAt: - 1 } }).fetch();
            //console.log("length", theDbRes.length);
            var theResults = [];

            this.setState({ ironjiPeopleSearch: theResults });

            var i_db = 0;
            for (var key in theDbRes) {
                if (theDbRes.hasOwnProperty(key)) {
                    //console.log("" + theMarkersOfTraders[key].markers_on_map_lat + "--" + theMarkersOfTraders[key].markers_on_map_lng);
                    theResults.push("" + theDbRes[key]._id + "~" + theDbRes[key].text + "~" + theDbRes[key].createdAt + "~" + theDbRes[key].account_type + "~" + theDbRes[key].currentLatitude + "~" + theDbRes[key].currentLongitude + "~" + theDbRes[key].accountConfirmed + "~" + theDbRes[key].id_number + "~" + theDbRes[key].surname + "~" + theDbRes[key].lastname + "~" + theDbRes[key].email + "~" + theDbRes[key].platenumber + "~" + theDbRes[key].province + "~" + theDbRes[key].district + "~" + theDbRes[key].sector + "~" + theDbRes[key].username + "~" + theDbRes[key].gender + "~" + theDbRes[key].avatar_profile);
                    i_db++;
                }
            }
            //----------------
            this.setState({ ironjiPeopleSearch: theResults });

        } else if (global.search_query_orient.includes("Traders")) {
            //---------
            //console.log("cyuma", "Traders");
            var theDbRes = Users.find({ $and: [{ "_id": { $ne: global.the_id_op } }, { account_type: "client" }, { $or: [{ username: searchRegex }, { surname: searchRegex }, { lastname: searchRegex }] }] }, { sort: { createdAt: - 1 } }).fetch();
            //console.log("length", theDbRes.length);
            var theResults = [];

            this.setState({ ironjiPeopleSearch: theResults });

            var i_db = 0;
            for (var key in theDbRes) {
                if (theDbRes.hasOwnProperty(key)) {
                    //console.log("" + theMarkersOfTraders[key].markers_on_map_lat + "--" + theMarkersOfTraders[key].markers_on_map_lng);
                    theResults.push("" + theDbRes[key]._id + "~" + theDbRes[key].text + "~" + theDbRes[key].createdAt + "~" + theDbRes[key].account_type + "~" + theDbRes[key].currentLatitude + "~" + theDbRes[key].currentLongitude + "~" + theDbRes[key].accountConfirmed + "~" + theDbRes[key].id_number + "~" + theDbRes[key].surname + "~" + theDbRes[key].lastname + "~" + theDbRes[key].email + "~" + theDbRes[key].platenumber + "~" + theDbRes[key].province + "~" + theDbRes[key].district + "~" + theDbRes[key].sector + "~" + theDbRes[key].username + "~" + theDbRes[key].gender + "~" + theDbRes[key].avatar_profile);
                    i_db++;
                }
            }
            //----------------
            this.setState({ ironjiPeopleSearch: theResults });

        } else if (global.search_query_orient.includes("Farmers")) {
            //---------
            //console.log("cyuma", "Farmers");
            var theDbRes = Users.find({ $and: [{ "_id": { $ne: global.the_id_op } }, { account_type: "farmer" }, { $or: [{ username: searchRegex }, { surname: searchRegex }, { lastname: searchRegex }] }] }, { sort: { createdAt: - 1 } }).fetch();
            //console.log("length", theDbRes.length);
            var theResults = [];

            this.setState({ ironjiPeopleSearch: theResults });

            var i_db = 0;
            for (var key in theDbRes) {
                if (theDbRes.hasOwnProperty(key)) {
                    //console.log("" + theMarkersOfTraders[key].markers_on_map_lat + "--" + theMarkersOfTraders[key].markers_on_map_lng);
                    theResults.push("" + theDbRes[key]._id + "~" + theDbRes[key].text + "~" + theDbRes[key].createdAt + "~" + theDbRes[key].account_type + "~" + theDbRes[key].currentLatitude + "~" + theDbRes[key].currentLongitude + "~" + theDbRes[key].accountConfirmed + "~" + theDbRes[key].id_number + "~" + theDbRes[key].surname + "~" + theDbRes[key].lastname + "~" + theDbRes[key].email + "~" + theDbRes[key].platenumber + "~" + theDbRes[key].province + "~" + theDbRes[key].district + "~" + theDbRes[key].sector + "~" + theDbRes[key].username + "~" + theDbRes[key].gender + "~" + theDbRes[key].avatar_profile);
                    i_db++;
                }
            }
            //----------------
            this.setState({ ironjiPeopleSearch: theResults });

        } else if (global.search_query_orient.includes("Transporters")) {
            //console.log("cyuma", "Drivers");
            var theDbRes = Users.find({ $and: [{ "_id": { $ne: global.the_id_op } }, { account_type: "driver" }, { $or: [{ username: searchRegex }, { surname: searchRegex }, { lastname: searchRegex }] }] }, { sort: { createdAt: - 1 } }).fetch();
            //console.log("length", theDbRes.length);
            var theResults = [];

            this.setState({ ironjiPeopleSearch: theResults });

            var i_db = 0;
            for (var key in theDbRes) {
                if (theDbRes.hasOwnProperty(key)) {
                    //console.log("" + theMarkersOfTraders[key].markers_on_map_lat + "--" + theMarkersOfTraders[key].markers_on_map_lng);
                    theResults.push("" + theDbRes[key]._id + "~" + theDbRes[key].text + "~" + theDbRes[key].createdAt + "~" + theDbRes[key].account_type + "~" + theDbRes[key].currentLatitude + "~" + theDbRes[key].currentLongitude + "~" + theDbRes[key].accountConfirmed + "~" + theDbRes[key].id_number + "~" + theDbRes[key].surname + "~" + theDbRes[key].lastname + "~" + theDbRes[key].email + "~" + theDbRes[key].platenumber + "~" + theDbRes[key].province + "~" + theDbRes[key].district + "~" + theDbRes[key].sector + "~" + theDbRes[key].username + "~" + theDbRes[key].gender + "~" + theDbRes[key].avatar_profile);
                    i_db++;
                }
            }
            //----------------
            document.getElementById("contact_search_list_contacts").innerHTML = "";
            this.setState({ ironjiPeopleSearch: theResults });

        }
        document.getElementById("contact_search_list_contacts").style.display = "block";
    }

    searchInAllIronjiDb(e) {
        //console.log("--->" + e.target.value);
        global.search_param_key = e.target.value;
        global.the_id_op = "";
        var po = Users.find({ username: "" + sessionStorage.getItem('ironji_account_username') }, { sort: { text: 1 } }).fetch();
        for (var key in po) {
            if (po.hasOwnProperty(key)) {
                //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);

                if (po[key].account_type == "driver") {
                    global.the_id_op = po[key]._id;
                }
            }
        }
        //---------------Search Params--      
        //---
        var searchRegex = "";
        try {
            global.search_param_key = global.search_param_key.replace(/\W/g, "");
            searchRegex = new RegExp(global.search_param_key, "igm");
            //console.log("searchRegex", searchRegex);
        } catch (err) {
            //.log("error", err);
        }


        if (global.search_query_orient.includes("All")) {
            //---------
            //console.log("cyuma", "All");

            var theDbRes = Users.find({ $and: [{ "_id": { $ne: global.the_id_op } }, { $or: [{ username: searchRegex }, { surname: searchRegex }, { lastname: searchRegex }] }] }, { sort: { createdAt: - 1 } }).fetch();
            //console.log("length", theDbRes.length);
            var theResults = [];

            this.setState({ ironjiPeopleSearch: theResults });

            var i_db = 0;
            for (var key in theDbRes) {
                if (theDbRes.hasOwnProperty(key)) {
                    //console.log("" + theMarkersOfTraders[key].markers_on_map_lat + "--" + theMarkersOfTraders[key].markers_on_map_lng);
                    theResults.push("" + theDbRes[key]._id + "~" + theDbRes[key].text + "~" + theDbRes[key].createdAt + "~" + theDbRes[key].account_type + "~" + theDbRes[key].currentLatitude + "~" + theDbRes[key].currentLongitude + "~" + theDbRes[key].accountConfirmed + "~" + theDbRes[key].id_number + "~" + theDbRes[key].surname + "~" + theDbRes[key].lastname + "~" + theDbRes[key].email + "~" + theDbRes[key].platenumber + "~" + theDbRes[key].province + "~" + theDbRes[key].district + "~" + theDbRes[key].sector + "~" + theDbRes[key].username + "~" + theDbRes[key].gender + "~" + theDbRes[key].avatar_profile);
                    i_db++;
                }
            }
            //----------------
            this.setState({ ironjiPeopleSearch: theResults });

        } else if (global.search_query_orient.includes("Buyers")) {
            //---------
            //console.log("cyuma", "Buyers");
            var theDbRes = Users.find({ $and: [{ "_id": { $ne: global.the_id_op } }, { account_type: "buyer" }, { $or: [{ username: searchRegex }, { surname: searchRegex }, { lastname: searchRegex }] }] }, { sort: { createdAt: - 1 } }).fetch();
            //console.log("length", theDbRes.length);
            var theResults = [];

            this.setState({ ironjiPeopleSearch: theResults });

            var i_db = 0;
            for (var key in theDbRes) {
                if (theDbRes.hasOwnProperty(key)) {
                    //console.log("" + theMarkersOfTraders[key].markers_on_map_lat + "--" + theMarkersOfTraders[key].markers_on_map_lng);
                    theResults.push("" + theDbRes[key]._id + "~" + theDbRes[key].text + "~" + theDbRes[key].createdAt + "~" + theDbRes[key].account_type + "~" + theDbRes[key].currentLatitude + "~" + theDbRes[key].currentLongitude + "~" + theDbRes[key].accountConfirmed + "~" + theDbRes[key].id_number + "~" + theDbRes[key].surname + "~" + theDbRes[key].lastname + "~" + theDbRes[key].email + "~" + theDbRes[key].platenumber + "~" + theDbRes[key].province + "~" + theDbRes[key].district + "~" + theDbRes[key].sector + "~" + theDbRes[key].username + "~" + theDbRes[key].gender + "~" + theDbRes[key].avatar_profile);
                    i_db++;
                }
            }
            //----------------
            this.setState({ ironjiPeopleSearch: theResults });

        } else if (global.search_query_orient.includes("Traders")) {
            //---------
            //console.log("cyuma", "Traders");
            var theDbRes = Users.find({ $and: [{ "_id": { $ne: global.the_id_op } }, { account_type: "client" }, { $or: [{ username: searchRegex }, { surname: searchRegex }, { lastname: searchRegex }] }] }, { sort: { createdAt: - 1 } }).fetch();
            //console.log("length", theDbRes.length);
            var theResults = [];

            this.setState({ ironjiPeopleSearch: theResults });

            var i_db = 0;
            for (var key in theDbRes) {
                if (theDbRes.hasOwnProperty(key)) {
                    //console.log("" + theMarkersOfTraders[key].markers_on_map_lat + "--" + theMarkersOfTraders[key].markers_on_map_lng);
                    theResults.push("" + theDbRes[key]._id + "~" + theDbRes[key].text + "~" + theDbRes[key].createdAt + "~" + theDbRes[key].account_type + "~" + theDbRes[key].currentLatitude + "~" + theDbRes[key].currentLongitude + "~" + theDbRes[key].accountConfirmed + "~" + theDbRes[key].id_number + "~" + theDbRes[key].surname + "~" + theDbRes[key].lastname + "~" + theDbRes[key].email + "~" + theDbRes[key].platenumber + "~" + theDbRes[key].province + "~" + theDbRes[key].district + "~" + theDbRes[key].sector + "~" + theDbRes[key].username + "~" + theDbRes[key].gender + "~" + theDbRes[key].avatar_profile);
                    i_db++;
                }
            }
            //----------------
            this.setState({ ironjiPeopleSearch: theResults });

        } else if (global.search_query_orient.includes("Farmers")) {
            //---------
            //console.log("cyuma", "Farmers");
            var theDbRes = Users.find({ $and: [{ "_id": { $ne: global.the_id_op } }, { account_type: "farmer" }, { $or: [{ username: searchRegex }, { surname: searchRegex }, { lastname: searchRegex }] }] }, { sort: { createdAt: - 1 } }).fetch();
            //console.log("length", theDbRes.length);
            var theResults = [];

            this.setState({ ironjiPeopleSearch: theResults });

            var i_db = 0;
            for (var key in theDbRes) {
                if (theDbRes.hasOwnProperty(key)) {
                    //console.log("" + theMarkersOfTraders[key].markers_on_map_lat + "--" + theMarkersOfTraders[key].markers_on_map_lng);
                    theResults.push("" + theDbRes[key]._id + "~" + theDbRes[key].text + "~" + theDbRes[key].createdAt + "~" + theDbRes[key].account_type + "~" + theDbRes[key].currentLatitude + "~" + theDbRes[key].currentLongitude + "~" + theDbRes[key].accountConfirmed + "~" + theDbRes[key].id_number + "~" + theDbRes[key].surname + "~" + theDbRes[key].lastname + "~" + theDbRes[key].email + "~" + theDbRes[key].platenumber + "~" + theDbRes[key].province + "~" + theDbRes[key].district + "~" + theDbRes[key].sector + "~" + theDbRes[key].username + "~" + theDbRes[key].gender + "~" + theDbRes[key].avatar_profile);
                    i_db++;
                }
            }
            //----------------
            this.setState({ ironjiPeopleSearch: theResults });

        } else if (global.search_query_orient.includes("Transporters")) {
            //console.log("cyuma", "Drivers");
            var theDbRes = Users.find({ $and: [{ "_id": { $ne: global.the_id_op } }, { account_type: "driver" }, { $or: [{ username: searchRegex }, { surname: searchRegex }, { lastname: searchRegex }] }] }, { sort: { createdAt: - 1 } }).fetch();
            //console.log("length", theDbRes.length);
            var theResults = [];

            this.setState({ ironjiPeopleSearch: theResults });

            var i_db = 0;
            for (var key in theDbRes) {
                if (theDbRes.hasOwnProperty(key)) {
                    //console.log("" + theMarkersOfTraders[key].markers_on_map_lat + "--" + theMarkersOfTraders[key].markers_on_map_lng);
                    theResults.push("" + theDbRes[key]._id + "~" + theDbRes[key].text + "~" + theDbRes[key].createdAt + "~" + theDbRes[key].account_type + "~" + theDbRes[key].currentLatitude + "~" + theDbRes[key].currentLongitude + "~" + theDbRes[key].accountConfirmed + "~" + theDbRes[key].id_number + "~" + theDbRes[key].surname + "~" + theDbRes[key].lastname + "~" + theDbRes[key].email + "~" + theDbRes[key].platenumber + "~" + theDbRes[key].province + "~" + theDbRes[key].district + "~" + theDbRes[key].sector + "~" + theDbRes[key].username + "~" + theDbRes[key].gender + "~" + theDbRes[key].avatar_profile);
                    i_db++;
                }
            }
            //----------------
            document.getElementById("contact_search_list_contacts").innerHTML = "";
            this.setState({ ironjiPeopleSearch: theResults });

        }
        if (e.target.value.length >= 3) {

            //document.getElementById("contact_search_list_contacts").innerHTML = e.target.value;
            document.getElementById("contact_search_list_contacts").style.display = "block";
        } else {
            document.getElementById("contact_search_list_contacts").style.display = "none";
        }

    }
    //-----OpenedWinDriversMessages  
    markContactType(theWinInfo) {
        document.getElementById("OpenedWinDriversMessages").innerHTML = "" + theWinInfo;
        global.search_query_orient = theWinInfo;
    }
    renderMessagesContactListSearch() {

        if (this.state.ironjiPeopleSearch.length > 0) {

            return (this.state.ironjiPeopleSearch.map((el) => (

                <DriverMessagesContactsSearch ironji_users_id={el.split("~")[0]} data_display={(this.state.allMyChatties.includes(el.split("~")[0])) ? "none" : "block"} ironji_users_text={el.split("~")[1]} ironji_users_createdAt={el.split("~")[2]} ironji_users_account_type={el.split("~")[3]} ironji_users_currentLatitude={el.split("~")[4]} ironji_users_currentLongitude={el.split("~")[5]} ironji_users_accountConfirmed={el.split("~")[6]} ironji_users_id_number={el.split("~")[7]} ironji_users_surname={el.split("~")[8]} ironji_users_lastname={el.split("~")[9]} ironji_users_email={el.split("~")[10]} ironji_users_plate_number={el.split("~")[11]} ironji_users_occupation={el.split("~")[12]} ironji_users_phone_numbers={el.split("~")[13]} ironji_users_province={el.split("~")[14]} ironji_users_district={el.split("~")[15]} ironji_users_sector={el.split("~")[16]} ironji_users_username={el.split("~")[15]} ironji_users_id_gender={el.split("~")[16]} ironji_users_image={"" + el.split("~")[17]} />
            )));


        } else {
            return <div>No Data!</div>;
        }

    }

    prepareChattiesRender() {

        global.search_param_key = "";
        global.the_id_op = "";
        var po = Users.find({ username: "" + sessionStorage.getItem('ironji_account_username') }, { sort: { text: 1 } }).fetch();
        for (var key in po) {
            if (po.hasOwnProperty(key)) {
                //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);

                if (po[key].account_type == "driver") {
                    global.the_id_op = po[key]._id;
                }
            }
        }
        //---------------Search Params--      
        //---
        var searchRegex = "";
        try {
            global.search_param_key = global.search_param_key.replace(/\W/g, "");
            searchRegex = new RegExp(global.search_param_key, "igm");
            //console.log("searchRegex", searchRegex);
        } catch (err) {
            //console.log("error", err);
        }

        var theDbRes = Users.find({ $and: [{ "_id": { $ne: global.the_id_op } }, { $or: [{ username: searchRegex }, { surname: searchRegex }, { lastname: searchRegex }] }] }, { sort: { createdAt: - 1 } }).fetch();
        //console.log("length", theDbRes.length);
        var theResults = [];

        this.setState({ ironjiMyChatties: theResults });

        var i_db = 0;
        for (var key in theDbRes) {
            if (theDbRes.hasOwnProperty(key)) {
                //console.log("" + theMarkersOfTraders[key].markers_on_map_lat + "--" + theMarkersOfTraders[key].markers_on_map_lng);

                theResults.push(theDbRes[key]._id + "~" + theDbRes[key].text + "~" + theDbRes[key].createdAt + "~" + theDbRes[key].account_type + "~" + theDbRes[key].currentLatitude + "~" + theDbRes[key].currentLongitude + "~" + theDbRes[key].accountConfirmed + "~" + theDbRes[key].id_number + "~" + theDbRes[key].surname + "~" + theDbRes[key].lastname + "~" + theDbRes[key].email + "~" + theDbRes[key].platenumber + "~" + theDbRes[key].province + "~" + theDbRes[key].district + "~" + theDbRes[key].sector + "~" + theDbRes[key].username + "~" + theDbRes[key].gender + "~" + theDbRes[key].avatar_profile);

                i_db++;
            }
        }
        //----------------
        this.setState({ ironjiMyChatties: theResults });

    }

    highlightSelectedRow(theOtherChatty) {
        //console.log("How are you doin " + theOtherChatty);
        this.setState({ openedChatWinId: theOtherChatty });
        this.prepareChattiesRender();
        //------Load Messages--
        var that = this;
        setTimeout(function () {
            var theDbRes = Ironji_messages_conversations.find({ $and: [{ $or: [{ "id_sender": { $eq: that.state.openedChatWinId } }, { "id_reciever": that.state.openedChatWinId }] }, { "_id": { $ne: "none" } }] }, { sort: { regdate:  1 } }).fetch();
            //console.log("length", theDbRes.length);
            var theResults = [];

            that.setState({ chatMessages: theResults });

            var i_db = 0;
            for (var key in theDbRes) {
                if (theDbRes.hasOwnProperty(key)) {
                    //console.log("" + theMarkersOfTraders[key].markers_on_map_lat + "--" + theMarkersOfTraders[key].markers_on_map_lng);

                    theResults.push(theDbRes[key]._id + "~" + theDbRes[key].id_sender + "~" + theDbRes[key].id_reciever + "~" + theDbRes[key].regdate + "~" + theDbRes[key].sent_time + "~" + theDbRes[key].receive_time + "~" + theDbRes[key].message_visibility + "~" + theDbRes[key].actual_message);

                    i_db++;
                }
            }
            //----------------
            that.setState({ chatMessages: theResults });
            that.renderMessagesFromChats();
        }, 2000);
        //-----------
        var that = this;
        setTimeout(function () {
            global.username = "";
            var po = Users.find({ _id: "" + that.state.openedChatWinId }, { sort: { text: 1 } }).fetch();
            for (var key in po) {
                if (po.hasOwnProperty(key)) {
                    //console.log(key + " -> " + po[key]._id+"--"+ po[key].username+"--"+ po[key].account_type);


                    global.username = po[key].username;
                    that.setState({ openedUsername: po[key].username });
                    that.setState({ accountType: po[key].account_type });


                }
            }
        },2000);
    }

    renderMessagesMyChatties() {

        if (this.state.ironjiMyChatties.length > 0) {

            return (this.state.ironjiMyChatties.map((el) => (

                <DriverMessagesChatties onSelectChatty={this.highlightSelectedRow} style_display_checking_back_g={(this.state.openedChatWinId.includes(el.split("~")[0])) ? "skyblue" : "white"} style_display_checking={(this.state.openedChatWinId.includes(el.split("~")[0])) ? "modal-content ThisGuycontactsListSd" : "modal-content contactsListSd"} data_display={(this.state.allMyChatties.includes(el.split("~")[0])) ? "block" : "none"} ironji_users_id={el.split("~")[0]} ironji_users_text={el.split("~")[1]} ironji_users_createdAt={el.split("~")[2]} ironji_users_account_type={el.split("~")[3]} ironji_users_currentLatitude={el.split("~")[4]} ironji_users_currentLongitude={el.split("~")[5]} ironji_users_accountConfirmed={el.split("~")[6]} ironji_users_id_number={el.split("~")[7]} ironji_users_surname={el.split("~")[8]} ironji_users_lastname={el.split("~")[9]} ironji_users_email={el.split("~")[10]} ironji_users_plate_number={el.split("~")[11]} ironji_users_occupation={el.split("~")[12]} ironji_users_phone_numbers={el.split("~")[13]} ironji_users_province={el.split("~")[14]} ironji_users_district={el.split("~")[15]} ironji_users_sector={el.split("~")[16]} ironji_users_username={el.split("~")[15]} ironji_users_id_gender={el.split("~")[16]} ironji_users_image={"" + el.split("~")[17]} />
            )));


        } else {
            return <div>No Contacts!</div>;
        }

    }
    renderMessagesFromChats() {

        if (this.state.chatMessages.length > 0) {

            return (this.state.chatMessages.map((el) => (
                <DriverMessagesChatties_ChatMessages idUseOf={(global.the_id_op.includes(el.split("~")[1])) ? global.the_id_op : el.split("~")[1]} floating={(global.the_id_op.includes(el.split("~")[1]))?"right":"left"} me={global.the_id_op} messageId={el.split("~")[0]} IdSender={el.split("~")[1]} IdReceiver={el.split("~")[2]} regdate={el.split("~")[3]} sentTime={el.split("~")[4]} recieveTime={el.split("~")[5]} messageVisibility={el.split("~")[6]} actualMessage={el.split("~")[7]}/>

            )));


        } else {
            return <div>No Messages!</div>;
        }

    }
    sendMessageToChatRoom() {
        var theData = {
            "id_sender": global.the_id_op,
            "id_reciever": this.state.openedChatWinId,
            "regdate": new Date(),
            "sent_time": "",
            "receive_time": "",
            "actual_message": document.getElementById("thisDataTextMsg").value,
            "message_visibility": "1",
        };
        var that = this;
        Ironji_messages_conversations.insert(theData, function (error, result) {
            if (error) {
                //alert("error:"+error);
            }
            if (result) {
                //alert("Great!");
                document.getElementById("thisDataTextMsg").value = "";
                //------Load Messages--
                var that_0 = that;
               
                setTimeout(function () {
                    var theDbRes = Ironji_messages_conversations.find({ $and: [{ $or: [{ "id_sender": { $eq: that_0.state.openedChatWinId } }, { "id_reciever": that.state.openedChatWinId }] }, { "_id": { $ne: "none" } }] }, { sort: { regdate: 1 } }).fetch();
                    //console.log("length", theDbRes.length);
                    var theResults = [];

                    that_0.setState({ chatMessages: theResults });

                    var i_db = 0;
                    for (var key in theDbRes) {
                        if (theDbRes.hasOwnProperty(key)) {
                            //console.log("" + theMarkersOfTraders[key].markers_on_map_lat + "--" + theMarkersOfTraders[key].markers_on_map_lng);

                            theResults.push(theDbRes[key]._id + "~" + theDbRes[key].id_sender + "~" + theDbRes[key].id_reciever + "~" + theDbRes[key].regdate + "~" + theDbRes[key].sent_time + "~" + theDbRes[key].receive_time + "~" + theDbRes[key].message_visibility + "~" + theDbRes[key].actual_message);

                            i_db++;
                        }
                    }
                    //----------------
                    that_0.setState({ chatMessages: theResults });
                    that_0.renderMessagesFromChats();
                }, 2000);
            }
        });

    }
    render() {

        return (<div className="container">
            <div className="logoHome_For_DRiver">
                <div>
                    <table>
                        <tbody>
                            <tr><td><a href="/" className="headerLinks">Homepage</a></td><td><a href="/" className="headerLinks">Logout</a></td></tr>
                        </tbody>
                    </table>
                </div>


                <div className="container">
                    <div className="theTopMenus">
                        <div className="theConainer theRightSide">
                            <img src="images/ironji.png" />
                            <div className="TrademarkAndName">Ironji<sup>TM</sup></div>
                        </div>
                        <div className="theConainer theRightSide">

                        </div>
                        <div className="theConainer theRightSide">
                            <div className="row pull-right">
                                <table className="table table_ghh">
                                    <tbody>
                                        <tr><td><a href={'/fq_asked'}><img className="followLinks" src="images/question.png" /><br /><span>FAQs</span></a></td>
                                            <td><a href={'/DriverMessages'}><img className="followLinks" src="images/message.png" /><br /><span>Messages</span></a></td>
                                            <td><a href={'/Driverprofile'}>{this.renderThisAccountAvatar()}<br /><span>Hi, {sessionStorage.getItem('ironji_account_username')}</span></a></td>
                                            <td><a href={'/DriverDashboard'}><img className="followLinks" src="images/dashboard.jpg" /><br /><span>Dashboard</span></a></td>
                                            <td><a href={'/driverMainPage'}><img className="followLinks" src="images/home.png" /><br /><span>Home</span></a></td>
                                            <td><a href={'/DriverCarryCargo'}><img className="followLinks" src="images/take_shipment_job.jpg" /><br /><span>Carry Out Shipments</span></a></td></tr>

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ width: "40%", float: "left", padding: "6px", borderRadius: "5px" }}>
                    <div style={{ textAlign: "center", padding: "4px", background: "skyblue", borderRadius: "5px", fontSize: "16px" }}>
                        Your Chatties
                    </div>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td><button onClick={this.markContactType.bind(this, "All")} style={{ minWidth: "70px" }} className="btn-success active">All</button></td>
                                    <td><button onClick={this.markContactType.bind(this, "Buyers")} style={{ minWidth: "70px" }} className="btn-success active">Buyers</button></td>
                                    <td><button onClick={this.markContactType.bind(this, "Traders")} style={{ minWidth: "70px" }} style={{ minWidth: "70px" }} className="btn-success active">Traders</button></td>
                                    <td><button onClick={this.markContactType.bind(this, "Farmers")} style={{ minWidth: "70px" }} className="btn-success active">Farmers</button></td>
                                    <td><button onClick={this.markContactType.bind(this, "Transporters")} style={{ minWidth: "70px" }} className="btn-success active">Transporters</button></td>
                                </tr>
                            </tbody>
                        </table>
                        <div style={{ padding: "5px", borderRadius: "5px", border: "1px solid black" }}>
                            <input type="text" onKeyUp={this.searchInAllIronjiDb.bind(this)} ref="searchContactsValueParam" id="searchContactsValueParam" className="form-control" placeholder="Search in contact" /><button onClick={this.showListOfUsers.bind(this)} className="btn-info">See Random list</button>
                            <div id="contact_search_list_contacts" style={{ overflowY: "scroll", display: "none", position: "absolute", borderRadius: "6px", padding: "5px", width: "300px", maxWidth: "300px", height: "350px", maxHeight: "350px", zIndex: "5000", wordWrap: "break-word", background: "white" }} className="modal-content">
                                {this.renderMessagesContactListSearch()}
                            </div>
                            <div style={{ padding: "5px", boxShadow: "2px 2px #333" }} id="OpenedWinDriversMessages">All</div>
                            <input type="hidden" id="OpenedWinDriversMessages_Data" value="All" />
                        </div>
                        <div style={{ padding: "5px", height: "340px" }}>
                            <h4>My Contact List:</h4>
                            <div style={{ height: "220px", overflowY: "scroll" }}>
                                {this.renderMessagesMyChatties()}
                            </div>
                        </div>

                    </div>
                </div>
                <div style={{ width: "60%", float: "left", padding: "6px", borderRadius: "5px" }}>
                    <div style={{ textAlign: "center", padding: "4px", background: "skyblue", borderRadius: "5px", fontSize: "16px" }}>
                        Chat room
                    </div>
                    <div><h4>Talking to "<span id="chatWindowMessages_person">{this.state.openedUsername}</span>", "{this.state.accountType}"</h4>
                        <div style={{ padding: "5px", height: "320px", borderRadius: "5px", overflowY: "scroll" }}>

                            {this.renderMessagesFromChats()}



                        </div>
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><textarea id="thisDataTextMsg" className="form-control" placeholder="Your message here.." style={{ maxHeight: "70px", height: "70px", maxWidth: "350px", width: "350px" }}></textarea></td>
                                        <td><button onClick={this.sendMessageToChatRoom.bind(this)} className="btn-primary">Send</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
                <div style={{ clear: "both" }}></div>
            </div>
        </div>)
    }
}
export default withTracker(() => {
    return {
        tasks: Users.find({}).fetch(),
        users_i_am_in: Users.find({ username: sessionStorage.getItem('ironji_account_username') }, { sort: { text: 1 } }).fetch(),
        all_the_hot_deals: Client_hot_deals.find({}, { sort: { createdAt: - 1 } }).fetch(),
        MySchedules: Drivers_schedules.find({ client_id: global.the_id_op }, { sort: { createdAt: - 1 } }).fetch(),
    };
})(DriverMessages);