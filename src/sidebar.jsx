import React from "react";
import "./sidebar.css";


function Sidebar(props){
    return(
        <section className={"sec text-white " + props.className}>
            <p className="logo font font-bold p-4">A C M E</p>
            <div className="flex p-4 gap-3 items-center">
                <div className="iconsvg" id="home"></div>
                <p className="text-sm">Home</p>
            </div>
            <div className="selected flex p-4 gap-3 items-center">
                <div className="iconsvg" id="dashbord"></div>
                <p className="text-sm">Dashboard</p>
            </div>
            <div className="flex p-4 justify-between items-center">
                <div className="flex gap-3">
                <div className="iconsvg" id="inbox"></div>
                <p className="text-sm">Inbox</p>
                </div>
                <div>
                    <p className="text-xs new rounded-full px-2">New</p>
                </div>
            </div>
            <div className="flex p-4 gap-3 items-center">
                <div className="iconsvg" id="products"></div>
                <p className="text-sm">Products</p>
            </div>
            <div className="flex p-4 gap-3 items-center">
                <div className="iconsvg" id="admin"></div>
                <p className="text-sm">Admin</p>
            </div>
        </section>
    )
}

export default Sidebar;