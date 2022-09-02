import React from "react";
import { useState, useRef } from "react";
import useOnClickOutside from "./clickoutside";


function Profileset(){
    const ref = useRef();

    let [Isprooptionopen,setnooption]=useState(false)

    function clickpro(){
        setnooption(!Isprooptionopen)
    }

  useOnClickOutside(ref, clickpro);

  
  let arrow = Isprooptionopen ? "downarrow" : "openarrow";


    return(
        <div className="relative">
        <div onClick={clickpro} className="iconsvg" id={arrow}></div>
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

export default Profileset;