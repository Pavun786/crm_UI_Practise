import { RxDashboard } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

  function Header(){

      return(

        <div className="header-container">
         
          <div className="head-sub1">
          
            <RxDashboard className="head-img"/>
            <div>
                <div className="head-left">
                    <p>Lead</p>
                    <div ><IoIosArrowDown/></div>
                    
                </div>
                <p>Qualified Leads</p>
            </div>
           </div>

           <div className="head-sub2">
            <div >
            <button className="head-btn">
                <p>More Action </p>
                <IoIosArrowDown/>
            </button>
            
            </div>
            <div >
           
            <button className="head-lead-btn">  
                <FaPlus/>
                <p>Add Lead</p>
            </button>
            </div>

           </div>


         

         </div>   
      )
  }

  export default Header;