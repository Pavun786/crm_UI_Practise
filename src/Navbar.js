import logo from "./assets/logo.png"; 
import { useState } from "react";
import { FiHome } from "react-icons/fi";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { FaList } from "react-icons/fa";
import { MdSettingsInputComponent } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io"
import { CgProfile } from "react-icons/cg";
import { PiListLight } from "react-icons/pi";
import "./App.css";


function Navbar(){

    const icons = [
        {
            "icon" : FiHome,
             "name" : "Home" 
        },
        {
            "icon" : RiDashboardHorizontalLine,
             "name" : "Dashboard" 
        },
        {
            "icon" : FaList,
             "name" : "List" 
        },
        {
            "icon" : MdSettingsInputComponent,
             "name" : "Components" 
        }
    ]


    const [showmenus,setShowMenus] = useState(false)

   
    const menuFunction = ()=>{
        setShowMenus(!showmenus)
    }


return(
    <div className="nav-container">

       <div className="nav-sub1">
         <img src={logo} className="logo"/>
         <h4>T500</h4>
       </div>

      <div className="nav-sub2" id={!showmenus ? "nav-sub2-close" : null}>
        {icons.map((ele)=>{
            return(
                <div className="nav-sub-icon">
                    <ele.icon/>
                    <div>{ele.name}</div>
                </div>
            )
        })}
      </div>
      <div className="nav-sub3" id={!showmenus ? "nav-sub2-close" : null}>
        <FaPlus/>
        <IoSearch/>
        <IoSettingsOutline/>
        <IoMdNotificationsOutline/>
        <CgProfile/>
      </div>
      <div className="nav-close-icon" onClick={menuFunction}>
         <PiListLight/>
      </div>
    </div>
 )

}

export default Navbar;