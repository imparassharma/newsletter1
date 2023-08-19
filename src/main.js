import React, { useState } from "react";
import image1 from "./images/icon-list.svg";
import image2 from "./images/illustration-sign-up-desktop.svg";

function Main(){
    const [validation, setValidation] = useState(false);
    function Sub(){
        const left = document.getElementById("left");
        const right = document.getElementById("right");
        const sec = document.getElementById("sec");
        
        if(validation==true){
            left.classList.add("hide");
            right.classList.add("hide");
            sec.classList.add("show");
        }
    }

    function dismiss(){
        const left = document.getElementById("left");
        const right = document.getElementById("right");
        const sec = document.getElementById("sec");
        
        left.classList.remove("hide");
        right.classList.remove("hide");
        sec.classList.remove("show");
    }

    function validate(e){
        console.log(e.target.value);
        const email = e.target.value;
        const emailContainer = document.getElementById("email");
        const warn = document.getElementById("warning");
    
        if(IsEmail(email)==false){
            emailContainer.style.border = "1px solid hsl(4, 100%, 67%)";
            emailContainer.style.backgroundColor = "hsl(4, 100%, 87%)";
            emailContainer.style.color = "hsl(4, 100%, 67%)";
            warn.classList.add("show");
            setValidation(false);
        }
        else{
            emailContainer.style.border = "1px solid hsl(231, 7%, 60%)";
            emailContainer.style.backgroundColor = "white";
            emailContainer.style.color = "grey";
            warn.classList.remove("show");
            setValidation(true);
        }
        function IsEmail(email) 
        {
            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(!regex.test(email)) {
               return false;
            }else{
               return true;
            }
        }
    }
    return(
        <div className="mainContainer" id="main">
            <div className="leftContainer" id="left">
                <h1>Stay updated!</h1>
                <div className="textSection">
                        <p>Join 60,000+ product managers receiving monthly updates on:</p>
                        <div className="checkList">
                            <img src={image1}></img>
                            <p>Product discovery and dicovering what matters</p>
                        </div>
                        <div className="checkList" id="check2">
                            <img src={image1}></img>
                            <p>Measuring to ensure updates are a success</p>
                        </div>
                        <div className="checkList" id="check3">
                            <img src={image1}></img>
                            <p>And much more!</p>
                        </div>
                    </div>
                    <div className="emailSection">
                        <div className="validate">
                            <h2>Email address</h2>
                            <h2 id="warning">Valid email required</h2>
                        </div>
                        <div className="emailInput">
                            <input type={"email"} id="email" placeholder="email@company.com" onChange={validate}></input>
                            <button id="btn" onClick={Sub}>Subscribe to monthly newsletter</button>
                        </div>
                    </div>
            </div>
            <div className="rightContainer" id="right">
               <img src={image2}></img>
            </div>
            <div className="secondaryContainer" id="sec">
                <img src={image1}></img>
                <h1>Thanks for subscribing!</h1>
                <p>A conformation email has been sent to <span>ash@loremcompany.com</span>. Please open it and click the button inside it to confirm your subscription.</p>
                <button id="dismiss" onClick={dismiss}> Dismiss Message</button>
            </div>
        </div>
    )
}

export default Main;