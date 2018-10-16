import React from 'react';
import classNames from 'classnames';

function Home() {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="logoHome">
                        <img src="images/ironji.png" />
                        <div className="TrademarkAndName">Ironji<sup>TM</sup></div>
                    </div>
                    <div>
                        <table>
                            <tbody>
                                <tr><td><a href="/" className="headerLinks">Homepage</a></td><td></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="col-lg-12">
                                <h3 className="description">OUR TEAM</h3>
                                <div className="row pt-md">
                                    <div style={{ float: "left", margin: "8px", padding: "5px", borderRadius: "8px", background: "#ffffff", width: "40%" }} >
                                        <div className="img-box">
                                            <img src={"/images/clet.jpg"} style={{ maxWidth: "250px",minWidth:"200px" }} className="img-responsive" />

                                        </div>
                                        <h6 style={{ fontWeight: "bold" }}>Clet Mwunguzi</h6>
                                        <h5 style={{ fontWeight: "bold" }}>Co-founder/ CEO(Chief Executive Officer)</h5>
                                        <p style={{ fontWeight: "bold" }}>"People of accomplishments don't sit back and let things happen to them, they go and make things happen."</p>
                                        <div style={{ fontWeight: "bold" }}>Email:clet@ironji.com</div>
                                    </div>
                                    <div style={{ float: "left", margin: "8px", padding: "5px", borderRadius: "8px", background: "#ffffff", width: "40%" }}>
                                        <div >
                                            <div className="img-box">
                                                <img src={"/images/lucky.jpg"} style={{ maxWidth: "250px", minWidth: "200px"}} className="img-responsive" />

                                            </div>
                                            <h6 style={{ fontWeight: "bold" }}>Mbikeshimana Lucky John</h6>
                                            <h5 style={{ fontWeight: "bold" }}>Co-founder/ CDO(Chief Design Officer)</h5>
                                            <p style={{ fontWeight: "bold" }}>"Internet and Critical Thinking are key things to drive you through 21<sup>st</sup> century."</p>
                                            <div style={{ fontWeight: "bold" }}>Email:lucky@ironji.com</div>
                                        </div></div>
                                    

                                        <div style={{ clear:"both",margin: "8px", padding: "5px", borderRadius: "8px", background: "#ffffff", width: "40%" }}>
                                            <div className="img-box">
                                            <img src={"/images/cyuma12.jpg"} style={{ maxWidth: "250px", minWidth: "200px" }} className="img-responsive" />

                                        </div>
                                        <h6 style={{fontWeight:"bold"}}>Mugabo Shyaka Cedric</h6>
                                        <h5 style={{ fontWeight: "bold" }}>Co-founder/ CTO(Chief Technical Officer)</h5>
                                        <p style={{ fontWeight: "bold" }}>"Bringing the digital realm at the service of humanity. Boosting the human potential."</p>
                                        <div style={{ fontWeight: "bold" }}>Email:mugaboshyaka@ironji.com</div>
                                        </div>
                                        <div style={{ clear: "both" }}></div>



                            
                                </div>
                            </div>
                        </div>
                    </div></div>

            </section>

        </div>
    );
}

export default Home;
