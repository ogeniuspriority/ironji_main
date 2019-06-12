import React from 'react';
import classNames from 'classnames';

function Home() {
    return (
        <div>
            <section>
                <div >
                   
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
                                <ul className="nav navbar-nav navbar-right" style={{ background: "skyblue", borderRadius: "6px" }}>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/BusinessProfile">Business Page
              <span className="sr-only">(current)</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/Team">About The Team</a>
                                    </li>
                                    <li class="nav-item">
                                        <a className="nav-link" href="/">Use the web prototype</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="logoHome" style={{marginTop:"20px"}}>
                        <img src="images/ironji.png" />
                        <div className="TrademarkAndName">Ironji<sup>TM</sup></div>
                    </div>
                    
                    <h5>Ironji (Simple, Fast, Reliable)</h5>
                    <div className="row">
                        <div className="col">
                            <div className="col-lg-12">
                                <h3 className="description">OUR TEAM</h3>
                                <div className="row pt-md">
                                    <div className="teamMember"  >
                                        <div className="img-box">
                                            <img src={"/images/clet.jpg"} style={{ maxWidth: "40%", minWidth: "40%" }} className="img-responsive" />

                                        </div>
                                        <h6 style={{ fontWeight: "bold" }}>Clet Mwunguzi</h6>
                                        <h5 style={{ fontWeight: "bold" }}>Co-founder/ CEO(Chief Executive Officer)</h5>
                                        <p style={{ fontWeight: "bold" }}>"People of accomplishments don't sit back and let things happen to them, they go and make things happen."</p>
                                        <div style={{ fontWeight: "bold" }}>Email:clet@ironji.com</div>
                                    </div>
                                    <div className="teamMember">
                                        <div >
                                            <div className="img-box">
                                                <img src={"/images/lucky.jpg"} style={{ maxWidth: "40%", minWidth: "40%" }} className="img-responsive" />

                                            </div>
                                            <h6 style={{ fontWeight: "bold" }}>Mbikeshimana Lucky John</h6>
                                            <h5 style={{ fontWeight: "bold" }}>Co-founder/ CDO(Public Relations Manager)</h5>
                                            <p style={{ fontWeight: "bold" }}>"Internet and Critical Thinking are key things to drive you through 21<sup>st</sup> century."</p>
                                            <div style={{ fontWeight: "bold" }}>Email:lucky@ironji.com</div>
                                        </div></div>


                                    <div className="teamMember">
                                        <div className="img-box">
                                            <img src={"/images/cyuma12.jpg"} style={{ maxWidth: "40%", minWidth: "40%" }} className="img-responsive" />

                                        </div>
                                        <h6 style={{ fontWeight: "bold" }}>Mugabo Shyaka Cedric</h6>
                                        <h5 style={{ fontWeight: "bold" }}>Co-founder/ CTO(Chief Technical Officer)</h5>
                                        <p style={{ fontWeight: "bold" }}>"Bringing the digital realm at the service of humanity. Boosting the human potential."</p>
                                        <div style={{ fontWeight: "bold" }}>Email:mugaboshyaka@ironji.com</div>
                                    </div>
                                    <div className="teamMember">
                                        <div className="img-box">
                                            <img src={"/images/Pamella.jpg"} style={{ maxWidth: "40%", minWidth: "40%" }} className="img-responsive" />

                                        </div>
                                        <h6 style={{ fontWeight: "bold" }}>Musekeweya Biraboneye Pamela

</h6>
                                        <h5 style={{ fontWeight: "bold" }}>Public relations officer</h5>


                                    </div>
                                    <div className="teamMember">
                                        <div className="img-box">
                                            <img src={"/images/Patrick.jpg"} style={{ maxWidth: "40%", minWidth: "40%" }} className="img-responsive" />

                                        </div>
                                        <h6 style={{ fontWeight: "bold" }}>Patrick Kubwimana</h6>
                                        <h5 style={{ fontWeight: "bold" }}>UX/Designer</h5>


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
