import React from "react";
import { useState } from "react";
import Sidebar from "./sidebar";
import Notification from "./notification";
import Profileset2 from "./profileset2";
import Graph1 from "./graph1";
import Graph2 from "./graph2";
import "./App.css";

function IsMobilOrTab(){
  let [issidebaropen, setsidebaropen] = useState(false);

  function clickside(){
    setsidebaropen(!issidebaropen)
  }

    return(
      <React.Fragment>
      <div className="flex">
      {issidebaropen && <Sidebar className="MobileSideBar"></Sidebar>}
          <div className="w-full">
          <div className="topbar bg-white flex justify-between items-center shadow">
        <div className="flex flex-row ml-4 items-center">
          <div onClick={clickside} className="iconsvg" id="menu"></div>
        </div>
        <div className="flex flex-row mr-4 items-center gap-6">
          <div  className="iconsvg" id="search"></div>
          <Notification className="w10"></Notification>
          <Profileset2></Profileset2>
        </div>
      </div>
      <section className="m-4">
      {/* overview */}
      <div className="flex flex-row justify-between items-center mt-5">
          <p className=" text-2xl text font-semibold">Overview</p>
          <div className="topbutton flex flex-row justify-around items-center">
            <p className="text-white text-sm">Add Funds</p>
            <div className="iconsvg rounded-full" id="plus"></div>
          </div>
        </div>
        {/* profileinfo */}
        <div className=" bg-white flex flex-col items-center p-4 rounded-lg mt-5">
              <div className="relative">
                <img src=" profile-pic-01.jpg " className="profilePicInfo rounded-full mt-8"/>
                <div className="iconsvg rounded-full absolute right-2 bottom-0" id="edit"></div>
              </div>
              <p className="text font-semibold">Nick Herasimenka</p>
              <p className="lighttext text-sm">United States</p>
              <div className="flex gap-4 p-6 lborder w-full justify-center">
                  <div className="iconsvg" id="twitter"></div>
                  <div className="iconsvg" id="facebook"></div>
                  <div className="iconsvg" id="linkedin"></div>
                  <div className="iconsvg" id="whatsapp"></div>
              </div>
              <div className="w-11/12	flex justify-between mt-8">
                <p className="text">Our Users</p>
                <div className="iconsvg" id="options"></div>
              </div>
              {/* otheruser */}
              <div className="w-11/12 mt-5 flex">
                <img className="otherUserPic rounded-full" src=" profile-pic-03.jpg"/>
                <div className="flex flex-col w-11/12 ml-4">
                  <p className="font-semibold">Drew James</p>
                  <div className="flex justify-between">
                    <p className="lighttext text-sm">United States</p>
                    <p className="lighttext text-sm">Mobile : 8715674877</p>
                  </div>
                </div>
              </div>
              <div className="w-11/12 mt-5 flex">
                <img className="otherUserPic rounded-full" src=" profile-pic-02.jpg"/>
                <div className="flex flex-col w-11/12 ml-4">
                  <p className="font-semibold">Bavid Kames</p>
                  <div className="flex justify-between">
                    <p className="lighttext text-sm">United States</p>
                    <p className="lighttext text-sm">Mobile : 8715674877</p>
                  </div>
                </div>
              </div>
              <div className="w-11/12 mt-5 flex">
                <img className="otherUserPic rounded-full" src=" profile-pic-04.jpg"/>
                <div className="flex flex-col w-11/12 ml-4">
                  <p className="font-semibold">Lavid Emes</p>
                  <div className="flex justify-between">
                    <p className="lighttext text-sm">United States</p>
                    <p className="lighttext text-sm">Mobile : 8715674877</p>
                  </div>
                </div>
              </div>
            </div>
            {/* graph1 */}
            <div className="graph1 bg-white p-4 rounded-lg mt-5">
                  <div className="flex justify-between ">
                    <p className="text">Statistics</p>
                    <div className="flex">
                      <p className="text">Last 6 months</p>
                      <div className="iconsvg" id="openarrow"></div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-10">
                  <Graph1></Graph1>
                  </div>
                </div>
                 {/* graph2 */}
                 <div className="graph2 bg-white p-4 rounded-lg mt-5 flex flex-col items-center">
                  <p className="text w-11/12">Sales Distribution</p>
                  <div className="mt-6 w-3/5">
                      <Graph2></Graph2>
                    </div>
                </div>
                {/* referrer */}
              <div className="referrer mt-5 p-4 rounded-lg w95">
                <p className="text">Referrer</p>
                <div className="refscroll">
                  <ul className="refwidth tablehead text text-sm flex items-center p-4 mt-6">
                    <li className="w25">Location</li>
                    <li className="w25">Views</li>
                    <li className="w25">Sales</li>
                    <li className="w25">Conversion</li>
                    <li className="w7">Total</li>
                  </ul>
                  <ul className="refwidth text text-sm flex items-center p-4 lborder">
                    <li className="w25">google.com</li>
                    <li className="w25">3746</li>
                    <li className="w25">752</li>
                    <li className="w25">43%</li>
                    <li className="w7">$19,291</li>
                  </ul>
                  <ul className="refwidth text text-sm flex items-center p-4 lborder">
                    <li className="w25">facebook.com</li>
                    <li className="w25">8126</li>
                    <li className="w25">728</li>
                    <li className="w25">32%</li>
                    <li className="w7">$17,638</li>
                  </ul>
                  <ul className="refwidth text text-sm flex items-center p-4 lborder">
                    <li className="w25">twitter.com</li>
                    <li className="w25">8836</li>
                    <li className="w25">694</li>
                    <li className="w25">28%</li>
                    <li className="w7">$16,218</li>
                  </ul>
                  <ul className="refwidth text text-sm flex items-center p-4 lborder">
                    <li className="w25">Direct, email, IM</li>
                    <li className="w25">1173</li>
                    <li className="w25">645</li>
                    <li className="w25">24%</li>
                    <li className="w7">$14,421</li>
                  </ul>
                  <ul className="refwidth text text-sm flex items-center p-4 lborder">
                    <li className="w25">linkedin.com</li>
                    <li className="w25">2739</li>
                    <li className="w25">539</li>
                    <li className="w25">20%</li>
                    <li className="w7">$12,370</li>
                  </ul>
                  <ul className="refwidth text text-sm flex items-center p-4 lborder">
                    <li className="w25">instagram.com</li>
                    <li className="w25">2739</li>
                    <li className="w25">539</li>
                    <li className="w25">20%</li>
                    <li className="w7">$12,370</li>
                  </ul>
                  <p className="text mt-7 ml-2 linktext text-sm">Show More</p>
              </div>
              </div>
              {/* video */}
            <div className="bg-white rounded-lg mt-5 p-4">
              <div className="flex justify-between ">
              <p className="text font-semibold">Product Video</p>
              <div className="iconsvg" id="options"></div>
              </div>
              <iframe className="mt-9 w95 h16 rounded-lg" src="https://www.youtube.com/embed/Oy6hk6Y7VHQ?controls=0"></iframe>
            </div>
      </section>   
          </div>
      </div>
    </React.Fragment> 
    );
}

export default IsMobilOrTab;
