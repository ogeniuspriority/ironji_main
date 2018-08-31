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
                                    <p>IRONJI is a platform that helps small traders and individual buyers to move goods from market through an easy and cheap transportation by connecting them with strategically positioned drivers and other transporters (including moto drivers, and abanyonzi)
This allows a smooth flow of goods hence balancing goods scarcity and surplus in different regions. This platform allows anyone to see goods in a given adjustable radius of where they are positioned on a map and traders selling it. IRONJI handles logistics management and shipping using existing routes and transportation means.
</p>
                                </div>

                                <button className="accordion" style={{ width: "60%" }}>Why Ironji?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>“IRONJI” is a kinyarwanda name which means Orange. This name came from one of the cofounders called Lucky John.
This is because orange is his favorite fruit and he barely gets it in his hometown. Even by the time he could get it, it was pretty much expensive. Thereafter the company was named IRONJI because it’s going to solve scarcity of goods like IRONJI is every region.
</p>
                                </div>

                                <button className="accordion" style={{ width: "60%" }}>How much is the price per transaction?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>Every transporter pays 5,000 Rwf for subscription to our platform and gets 10 transactions for free.  Then after he pays 5% fee on each transaction he makes using platform
</p>
                                </div>
                                <button className="accordion" style={{ width: "60%" }}>Is this business legal?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>Yes of course. It is registered under Rwanda Development Board as a legal company that works under its rules and regulations</p>
                                </div>
                                <button className="accordion" style={{ width: "60%" }}>How can i get onto this platform?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>The thing is easy. Register on our app today, pay subscription fees (using Mobile Money Transfers) and get activated tomorrow so that you can have a full access to our platform.</p>
                                </div>
                                <button className="accordion" style={{ width: "60%" }}>Does ironji rent someone's car?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>No. we haven’t started doing it because we don’t have our drivers and we use currently existing routes and transportation means</p>
                                </div>
                                <button className="accordion" style={{ width: "60%" }}>Can i trust someone i haven't seen before?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>Yes of course. This is because everyone who uses this platform has been cleared of any criminal or social threat that he/she can pose on other uses. Anyone who tried to break our laws and regulations is sued and punished by laws.</p>
                                </div>
                                <button className="accordion" style={{ width: "60%" }}>What's Ironji wallet?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>This is the user’s money account. It eases payment between transporter and people who need transportation. It can be recharged and cashed easily using Mobile Money services served by Telecom companies’ agents.</p>
                                </div>
                                <button className="accordion" style={{ width: "60%" }}>How does one find products on Ironji?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>You can simply select between different types of products on Dropdown available on top left of the main page. You can also use search to know a specific product that you want.
</p>
                                </div>
                                <button className="accordion" style={{ width: "60%" }}>What's hot deals and hot products?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>Hot deals are orders of things that are needed urgently and many of the times in a large quantity.
                                    Hot Products are goods that are available in large quantity and are perishable most of the time.</p>
                                </div>
                                 <button className="accordion" style={{ width: "60%" }}>How long does it take to get my shipments?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>It depends on the origin and destination of the products but it doesn’t take more than six hours to get a local shipment and three days to get regional shipment from EAC.
</p>
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
