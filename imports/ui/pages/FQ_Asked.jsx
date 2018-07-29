import React, { Component } from 'react';
        import classNames from 'classnames';
        
        class Home extends Component {
            
            
            
        componentDidMount(){
            var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
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
               
                <div style={{borderLeft:"1px solid black"}} className="pull-left">
                        <h2>Frequently Asked Questions</h2>

<button className="accordion" style={{width:"60%"}}>What do you offer?</button>
<div className="panel" style={{width:"60%"}}>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button className="accordion" style={{width:"60%"}}>Where are your offices?</button>
<div className="panel" style={{width:"60%"}}>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button className="accordion" style={{width:"60%"}}>Can i be featured on your platform as a trader?</button>
<div className="panel" style={{width:"60%"}}>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>    
                        </div>
                         <div className="pull-left" style={{width:"330px",paddingLeft:"10%"}}>
                    <h3>CONTACT US</h3>
                    <form >
                        <div className="form-group" >
                            <label >Email address:</label>
                            <input type="email" style={{width:"300px"}} className="form-control" id="email"/>
                        </div>
                        <div className="form-group">
                            <label>Yous Query To Ironji Team:</label><br/>
                            <textarea style={{height:"80px", width:"300px"}} class="form-control" ></textarea>

                        </div>
                        <button type="button" className="btn btn-default">Submit</button>
                    </form>
                </div>
                        <div style={{clear:"both"}}></div>
            </div>
            <div id="menu2" className="tab-pane fade">
                <h3>FORUM</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>

        </div>
    </div>

</div>
                );
        }}

        export default Home;
