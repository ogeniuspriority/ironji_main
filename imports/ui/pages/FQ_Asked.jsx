import React, { Component } from 'react';
import classNames from 'classnames';

class Home extends Component {



    componentDidMount() {
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }
    }
    render() {
        return (
            <div className={classNames('Home', 'foo', 'bar')} >
                <div>
                    <h4 className="lead">Fequently Asked Question and Forum:</h4>

                    <ul className="nav nav-tabs">
                        <li className="active"><a data-toggle="tab" href="#home">Home</a></li>
                        <li><a data-toggle="tab" href="#menu1">Frequently Asked Questions</a></li>
                        <li><a data-toggle="tab" href="#menu2">Forum</a></li>
                    </ul>

                    <div className="tab-content">
                        <div id="home" className="tab-pane fade in active">
                            <p className="lead">Welcome to Ironji where information can change your life. Connecting everybody to the fresh foods pipeline.</p>
                        </div>
                        <div id="menu1" className="tab-pane fade">

                            <div style={{ borderLeft: "1px solid black" }} className="pull-left">
                                <h2>Frequently Asked Questions</h2>

                                <button className="accordion" style={{ width: "60%" }}>What does Ironji do?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>

                                <button className="accordion" style={{ width: "60%" }}>Why Ironji?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>

                                <button className="accordion" style={{ width: "60%" }}>How much is the price per transaction?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <button className="accordion" style={{ width: "60%" }}>Is this business legal?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <button className="accordion" style={{ width: "60%" }}>How can i get onto this platform?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <button className="accordion" style={{ width: "60%" }}>Does ironji rent someone's car?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <button className="accordion" style={{ width: "60%" }}>Can i trust someone i haven't seen before?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <button className="accordion" style={{ width: "60%" }}>What's Ironji wallet?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <button className="accordion" style={{ width: "60%" }}>How does one find products on Ironji?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <button className="accordion" style={{ width: "60%" }}>What's hot deals and hot products?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                 <button className="accordion" style={{ width: "60%" }}>How long does it take to get my shipments?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                            <div className="pull-left" style={{ width: "330px", paddingLeft: "10%" }}>
                                <h3>CONTACT US</h3>
                                <form >
                                    <div className="form-group" >
                                        <label >Email address:</label>
                                        <input type="email" style={{ width: "300px" }} className="form-control" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Yous Query To Ironji Team:</label><br />
                                        <textarea style={{ height: "80px", width: "300px" }} class="form-control" ></textarea>

                                    </div>
                                    <button type="button" className="btn btn-default">Submit</button>
                                </form>
                            </div>
                            <div style={{ clear: "both" }}></div>
                        </div>
                        <div id="menu2" className="tab-pane fade">
                            <h3>FORUM</h3>
                            <div style={{ height: "400px", overflow: "scroll" }}>
                                <div>
                                    <h4>Poster Name</h4>
                                    <div>sf9shs fsnofbvs fs bf s9hfsbs fs9hfgbs sh9f s9fhbs fsh9
                                        dovjbd vdnbd vdnovivd vu</div>
                                </div>
                                <div style={{ height: "300px", width: "70%", overflow: "scroll" }}>
                                    <div className="pull-left" style={{width:"60%",borderBottom:"1px solid black"}}>
                                        <h4>Poster Name</h4>
                                        <div>sf9shs fsnofbvs fs bf s9hfsbs fs9hfgbs sh9f s9fhbs fsh9
                                        dovjbd vdnbd vdnovivd vu</div>
                                    </div>
                                    <div className="pull-right" style={{ width: "60%", borderBottom: "1px solid black" }}>
                                        <h4>Poster Name</h4>
                                        <div>sf9shs fsnofbvs fs bf s9hfsbs fs9hfgbs sh9f s9fhbs fsh9
                                        dovjbd vdnbd vdnovivd vu</div>
                                    </div>
                                    

                                </div>

                            </div>
                         </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Home;
