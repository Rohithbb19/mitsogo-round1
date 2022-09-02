import React from "react";
import { useState, useRef } from "react";
import "./sidebar.css";
import useOnClickOutside from "./clickoutside";


function Notification(props){
  const ref = useRef();

  let[isnotificationopen,setnotopen]=useState(false);
  let[noteon,setnoteoff]=useState(true)

  function clicknote(){
    setnotopen(!isnotificationopen)
    setnoteoff(false)
  }


  useOnClickOutside(ref, clicknote);


    return(
        <div className="relative">
        <div  className="relative">
        <div onClick={clicknote} className="iconsvg" id="notification"></div>
        {noteon && <div  className="greendot absolute rounded-full top-0 right-0"></div>}
        </div>
        {isnotificationopen && <div ref={ref}  className={"absolute z-50 top-12 -right-10 rounded-lg p-4 bg-white notewid shadow " + props.className}>
        <div className="w-11/12 mt-5 flex">
                  <img className="otherUserPic rounded-full" src=" profile-pic-02.jpg"/>
                  <div className="flex flex-col w-11/12 ml-4">
                    <div className="flex justify-between">
                    <p className="font-semibold">Bavid Kames</p>
                      <p className="lighttext text-sm">2 min ago</p>
                    </div>
                      <p className="lighttext text-sm">Assigned you on the call with Sara</p>
                  </div>
                </div>
        <div className="w-11/12 mt-5 flex">
                  <img className="otherUserPic rounded-full" src=" profile-pic-06.jpg"/>
                  <div className="flex flex-col w-11/12 ml-4">
                    <div className="flex justify-between">
                    <p className="font-semibold">Alexa Marry</p>
                      <p className="lighttext text-sm">5 min ago</p>
                    </div>
                      <p className="lighttext text-sm">Marked the task <span className="linktext font-bold" >New UI</span> as done</p>
                  </div>
                </div>
        <div className="w-11/12 mt-5 flex pb-4 lborder">
                  <img className="otherUserPic rounded-full" src=" profile-pic-05.jpg"/>
                  <div className="flex flex-col w-11/12 ml-4">
                    <div className="flex justify-between">
                    <p className="font-semibold">Eva Maria</p>
                      <p className="lighttext text-sm">10 min ago</p>
                    </div>
                      <p className="lighttext text-sm">Added a new comment on Sales task</p>
                  </div>
                </div>
                <p className="text mt-2 text-center linktext text-sm">Show More</p>

        </div>}
        </div>
    )
}

export default Notification;