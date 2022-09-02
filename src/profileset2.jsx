import React from "react";
import { useState, useRef } from "react";
import useOnClickOutside from "./clickoutside";

function Profileset2(){
    const ref = useRef();

    let [Isprooptionopen,setnooption]=useState(false)

    function clickpro(){
        setnooption(!Isprooptionopen)
    }


     useOnClickOutside(ref, clickpro);

    return(
        <div className="relative">
        <img onClick={clickpro} src="public\profile-pic-01.jpg" className="profilepic rounded-full ml-2"/>
        {Isprooptionopen && <div ref={ref} className="bg-white absolute proWidth right-0 top-12 rounded-lg p-3 shadow">
            <div className="flex ml-2 gap-4">
            <div className="iconsvg" id="myProfile"></div>
            <p>My Profile</p>
            </div>
            <div className="flex ml-2 mt-3 gap-4">
            <div className="iconsvg" id="billing"></div>
            <p>Billing</p>
            </div>
            <div className="flex ml-2 mt-3 gap-4">
            <div className="iconsvg" id="logout"></div>
            <p>Logout</p>
            </div>
        </div>}
        </div>
    )
}

export default Profileset2;