import React, { Component } from 'react';
import classNames from 'classnames';
import axios, { post } from 'axios';



class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null
        };
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    }

    fileSelectedHandler (event) {
        console.log(event.target.files[0]);
        this.setState({ file: event.target.files[0] });
       
        
    }
    fileUpload() {
        const fd = new FormData();
        fd.append("image", this.state.file, this.state.file.name);
        axios.post("url", fd).then(res => {
            console.log(res);
        });
    }

    fileUploadHandler() {

    }

    



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
            <div className="container">
                <h1 className="text-justify">Welcome to Ironji Admin Dashboard</h1>
                <ul className="nav nav-tabs">
                    <li className="active"><a data-toggle="tab" href="#home">Home</a></li>
                    <li><a data-toggle="tab" href="#menu1">Users of Ironji</a></li>
                    <li><a data-toggle="tab" href="#menu2">Pre populate map with foods and their traders </a></li>
                    <li><a data-toggle="tab" href="#menu3">Interact with forum</a></li>
                </ul>

                <div className="tab-content">
                    <div id="home" style={{ background: "white" }} className="tab-pane fade in active">
                        <h3>Dashboard</h3>
                        <p>Ironji data center</p>
                    </div>
                    <div id="menu1" style={{ background: "white" }} className="tab-pane fade">
                        <h3>Users of Ironji</h3>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div id="menu2" style={{ background: "white" }} className="tab-pane fade">
                        <h3>Foods and their locations and traders</h3>
                        <div style={{ width: "100%" }}>
                            <div style={{ width: "48%", float: "left" }}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><img src="images/ironji.png" style={{ width: "60px", height: "60px" }} /></td>
                                            <td>
                                                <h5>Orange</h5>
                                                <h5>Ironji</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <div style={{ height: "300px", width: "250px", overflow: "scroll" }}>
                                                    <div className="tradersDashboard" style={{ borderBottom: "1px solid black", borderRadius: "4px" }}>
                                                        <h6>Mani Eric</h6>
                                                        <p>Tel:0787374821, Kigali Gasabo Kinyinya</p>
                                                    </div>
                                                    <div className="tradersDashboard" style={{ borderBottom: "1px solid black", borderRadius: "4px" }}>
                                                        <h6>Mani Eric</h6>
                                                        <p>Tel:0787374821, Kigali Gasabo Kinyinya</p>
                                                    </div>
                                                    <div className="tradersDashboard" style={{ borderBottom: "1px solid black", borderRadius: "4px" }}>
                                                        <h6>Mani Eric</h6>
                                                        <p>Tel:0787374821, Kigali Gasabo Kinyinya</p>
                                                    </div>
                                                    <div className="tradersDashboard" style={{ borderBottom: "1px solid black", borderRadius: "4px" }}>
                                                        <h6>Mani Eric</h6>
                                                        <p>Tel:0787374821, Kigali Gasabo Kinyinya</p>
                                                    </div>
                                                    <div className="tradersDashboard" style={{ borderBottom: "1px solid black", borderRadius: "4px" }}>
                                                        <h6>Mani Eric</h6>
                                                        <p>Tel:0787374821, Kigali Gasabo Kinyinya</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <label>Trader Name</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Product name" />
                                                <label>Trader Info</label>
                                                <textarea type="text" className="form-control" id="exampleFormControlInput1" placeholder="Product name" ></textarea>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <label>Latitude:</label>
                                                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                                                            </td><td>
                                                                <label>Longitude</label>
                                                                <input type="text" className="form-control" id="exampleFormControlInput1" />

                                                            </td><td></td></tr>
                                                    </tbody>
                                                </table>
                                                <button className="btn-success">Add the trader</button>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><img src="images/chicken.jpg" style={{ width: "60px", height: "60px" }} /></td>
                                            <td>
                                                <h5>Orange</h5>
                                                <h5>Ironji</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <div style={{ height: "300px", width: "250px", overflow: "scroll" }}>
                                                    <div className="tradersDashboard" style={{ borderBottom: "1px solid black", borderRadius: "4px" }}>
                                                        <h6>Mani Eric</h6>
                                                        <p>Tel:0787374821, Kigali Gasabo Kinyinya</p>
                                                    </div>
                                                    <div className="tradersDashboard" style={{ borderBottom: "1px solid black", borderRadius: "4px" }}>
                                                        <h6>Mani Eric</h6>
                                                        <p>Tel:0787374821, Kigali Gasabo Kinyinya</p>
                                                    </div>
                                                    <div className="tradersDashboard" style={{ borderBottom: "1px solid black", borderRadius: "4px" }}>
                                                        <h6>Mani Eric</h6>
                                                        <p>Tel:0787374821, Kigali Gasabo Kinyinya</p>
                                                    </div>
                                                    <div className="tradersDashboard" style={{ borderBottom: "1px solid black", borderRadius: "4px" }}>
                                                        <h6>Mani Eric</h6>
                                                        <p>Tel:0787374821, Kigali Gasabo Kinyinya</p>
                                                    </div>
                                                    <div className="tradersDashboard" style={{ borderBottom: "1px solid black", borderRadius: "4px" }}>
                                                        <h6>Mani Eric</h6>
                                                        <p>Tel:0787374821, Kigali Gasabo Kinyinya</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <label>Trader Name</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Product name" />
                                                <label>Trader Info</label>
                                                <textarea type="text" className="form-control" id="exampleFormControlInput1" placeholder="Product name" ></textarea>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <label>Latitude:</label>
                                                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                                                            </td><td>
                                                                <label>Longitude</label>
                                                                <input type="text" className="form-control" id="exampleFormControlInput1" />

                                                            </td><td></td></tr>
                                                    </tbody>
                                                </table>
                                                <button className="btn-success">Add the trader</button>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><img src="images/capati.jpg" style={{ width: "60px", height: "60px" }} /></td>
                                            <td>
                                                <h5>Orange</h5>
                                                <h5>Ironji</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <div style={{ height: "300px", width: "250px", overflow: "scroll" }}>
                                                    <div className="tradersDashboard" style={{ borderBottom: "1px solid black", borderRadius: "4px" }}>
                                                        <h6>Mani Eric</h6>
                                                        <p>Tel:0787374821, Kigali Gasabo Kinyinya</p>
                                                    </div>
                                                    <div className="tradersDashboard" style={{ borderBottom: "1px solid black", borderRadius: "4px" }}>
                                                        <h6>Mani Eric</h6>
                                                        <p>Tel:0787374821, Kigali Gasabo Kinyinya</p>
                                                    </div>
                                                    <div className="tradersDashboard" style={{ borderBottom: "1px solid black", borderRadius: "4px" }}>
                                                        <h6>Mani Eric</h6>
                                                        <p>Tel:0787374821, Kigali Gasabo Kinyinya</p>
                                                    </div>
                                                    <div className="tradersDashboard" style={{ borderBottom: "1px solid black", borderRadius: "4px" }}>
                                                        <h6>Mani Eric</h6>
                                                        <p>Tel:0787374821, Kigali Gasabo Kinyinya</p>
                                                    </div>
                                                    <div className="tradersDashboard" style={{ borderBottom: "1px solid black", borderRadius: "4px" }}>
                                                        <h6>Mani Eric</h6>
                                                        <p>Tel:0787374821, Kigali Gasabo Kinyinya</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <label>Trader Name</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Product name" />
                                                <label>Trader Info</label>
                                                <textarea type="text" className="form-control" id="exampleFormControlInput1" placeholder="Product name" ></textarea>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <label>Latitude:</label>
                                                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                                                            </td><td>
                                                                <label>Longitude</label>
                                                                <input type="text" className="form-control" id="exampleFormControlInput1" />

                                                            </td><td></td></tr>
                                                    </tbody>
                                                </table>
                                                <button className="btn-success">Add the trader</button>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><img src="images/banana.jpg" style={{ width: "60px", height: "60px" }} /></td>
                                            <td>
                                                <h5>Orange</h5>
                                                <h5>Ironji</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <div style={{ height: "300px", width: "250px", overflow: "scroll" }}>
                                                    <div className="tradersDashboard" style={{ borderBottom: "1px solid black", borderRadius: "4px" }}>
                                                        <h6>Mani Eric</h6>
                                                        <p>Tel:0787374821, Kigali Gasabo Kinyinya</p>
                                                    </div>
                                                    <div className="tradersDashboard" style={{ borderBottom: "1px solid black", borderRadius: "4px" }}>
                                                        <h6>Mani Eric</h6>
                                                        <p>Tel:0787374821, Kigali Gasabo Kinyinya</p>
                                                    </div>
                                                    <div className="tradersDashboard" style={{ borderBottom: "1px solid black", borderRadius: "4px" }}>
                                                        <h6>Mani Eric</h6>
                                                        <p>Tel:0787374821, Kigali Gasabo Kinyinya</p>
                                                    </div>
                                                    <div className="tradersDashboard" style={{ borderBottom: "1px solid black", borderRadius: "4px" }}>
                                                        <h6>Mani Eric</h6>
                                                        <p>Tel:0787374821, Kigali Gasabo Kinyinya</p>
                                                    </div>
                                                    <div className="tradersDashboard" style={{ borderBottom: "1px solid black", borderRadius: "4px" }}>
                                                        <h6>Mani Eric</h6>
                                                        <p>Tel:0787374821, Kigali Gasabo Kinyinya</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <label>Trader Name</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Product name" />
                                                <label>Trader Info</label>
                                                <textarea type="text" className="form-control" id="exampleFormControlInput1" placeholder="Product name" ></textarea>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <label>Latitude:</label>
                                                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                                                            </td><td>
                                                                <label>Longitude</label>
                                                                <input type="text" className="form-control" id="exampleFormControlInput1" />

                                                            </td><td></td></tr>
                                                    </tbody>
                                                </table>
                                                <button className="btn-success">Add the trader</button>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div style={{ width: "48%", borderLeft: "1px solid black", height: "60%", overflow: "scroll", float: "left" }}>
                                <h4>Create Product</h4>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <label>Product name in English</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Product name" />
                                            </td><td>
                                                <label>Product name in Kinyarwanda</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Izina ry'igicuruzwa" />

                                            </td><td></td></tr>
                                        <tr><td><label>Product Avatar</label>
                                            <input type="file" onChange={this.fileSelectedHandler} className="form-control" id="exampleFormControlInput1" /></td><td><img src="" style={{ width: "100px", height: "100px" }} /></td><td></td></tr>
                                        <tr>
                                            <td>
                                                <label>Latitude:</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1"  />
                                            </td><td>
                                                <label>Longitude</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1"  />

                                            </td><td></td></tr>
                                    </tbody>
                                </table>
                                <button className="btn-success">Create Product</button>

                            </div>

                        </div>
                    </div>
                    <div id="menu3" style={{ background: "white" }} className="tab-pane fade">
                        <h3>Forum</h3>
                        <div>
                            <div style={{ borderLeft: "1px solid black" }} className="pull-left">
                                <h2>Frequently Asked Questions</h2>

                                <button className="accordion" style={{ width: "60%" }}>What do you offer?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <h3>RESPOND TO THIS</h3>
                                    <form >
                                        <div className="form-group" >
                                            <label >Respnse title:</label>
                                            <input type="text" style={{ width: "300px" }} className="form-control" id="email" />
                                        </div>
                                        <div className="form-group">
                                            <label>Your response:</label><br />
                                            <textarea style={{ height: "80px", width: "300px" }} className="form-control" ></textarea>

                                        </div>
                                        <button type="button" className="btn btn-default">Submit</button>
                                    </form>
                                </div>

                                <button className="accordion" style={{ width: "60%" }}>Where are your offices?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <h3>RESPOND TO THIS</h3>
                                    <form >
                                        <div className="form-group" >
                                            <label >Respnse title:</label>
                                            <input type="text" style={{ width: "300px" }} className="form-control" id="email" />
                                        </div>
                                        <div className="form-group">
                                            <label>Your response:</label><br />
                                            <textarea style={{ height: "80px", width: "300px" }} className="form-control" ></textarea>

                                        </div>
                                        <button type="button" className="btn btn-default">Submit</button>
                                    </form>
                                </div>

                                <button className="accordion" style={{ width: "60%" }}>Can i be featured on your platform as a trader?</button>
                                <div className="panel" style={{ width: "60%" }}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <h3>RESPOND TO THIS</h3>
                                    <form >
                                        <div className="form-group" >
                                            <label >Respnse title:</label>
                                            <input type="text" style={{ width: "300px" }} className="form-control" id="email" />
                                        </div>
                                        <div className="form-group">
                                            <label>Your response:</label><br />
                                            <textarea style={{ height: "80px", width: "300px" }} className="form-control" ></textarea>

                                        </div>
                                        <button type="button" className="btn btn-default">Submit</button>
                                    </form>
                                </div>
                            </div>
                            <div className="pull-left" style={{ width: "330px", paddingLeft: "10%" }}>
                                
                            </div>
                            <div style={{ clear: "both" }}></div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Home;
