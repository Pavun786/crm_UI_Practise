
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io"
import { IoFilterSharp } from "react-icons/io5";
import { PiTreeStructureThin } from "react-icons/pi";
import { FiTable } from "react-icons/fi";
import "./App.css"

function Main() {

    const [status, setStatus] = useState(false)

    const changeStatus = () => {
        setStatus(!status)
    }

    return (
        <>
            <div className="Main-container">

                <div className="main-sub1">

                    <div onClick={changeStatus} className="main-option">
                        <p>Lead Stage </p>
                        <IoIosArrowDown />
                    </div>

                    <div className="sub-option">
                        <p>Lead Name</p>
                        <IoIosArrowDown />
                    </div>

                    <div>
                        <p>Clear Filter</p>
                    </div>
                </div>



                <div className="main-sub2">
                  
                 <div className="main-icons">
                    <IoFilterSharp/>
                    <p>1 Filter Applied</p>
                 </div>

                 <div className="main-icons">
                    <PiTreeStructureThin/>
                    <p>Group By</p>
                 </div>

                 <div className="main-icons">
                    <FiTable/>
                    <p>Customize Table</p>
                 </div>

                </div>

            </div>
            <div className={status ? "modelOpen" : "modelClose"}>

                <div className="main-model">
                    <div className="main-model-sub">
                        <p>Lead Stage</p>
                        <IoMdCloseCircleOutline />
                    </div>
                    <select className="main-model-sub2">
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option>New Lead</option>
                        <option>Quality</option>
                        <option>Bad Contact Info</option>
                        <option>Converted</option>
                        <option>Existing Account</option>
                    </select>
                </div>
            </div>
        </>
    )
}
export default Main;