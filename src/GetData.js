import { useEffect, useState } from "react"
import records from "./data.json"
import Pagination from "./Pagination";
  


  function GetData(){

    //    console.log(data)

      const res = records.LeadDetails;

       const [data,setData] = useState(res)
       const [currentPage,setCurrentPage] = useState(1);
       const [recordPerPage] = useState(10);

      console.log(data)  


      const indexOfLastRecord = currentPage * recordPerPage;
      const indexOfFirstRecord = indexOfLastRecord - recordPerPage
      const currentRecords = data.slice(indexOfFirstRecord,indexOfLastRecord)
      
      const nPages = Math.ceil(data.length/recordPerPage);
      
      console.log(currentPage)
      console.log(currentRecords)

       return(
        <>
         <div className="data-container">
         
         <table>
            <tr>
                <th>S.no</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>City</th>
                <th>Country</th>
                <th>Lead-Owner</th>
                <th>Lead-Stage</th>
            </tr>

        

        {currentRecords.map((ele,index)=>{
            return(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{ele.FistName}</td>
                  <td>{ele.LastName}</td>
                  <td>{ele.City}</td>
                  <td>{ele.Country}</td>
                  <td>{ele.LeadOwner}</td>
                  <td>{ele.LeadStage}</td>
                </tr>
            )
        })}  

         </table> 
        </div>
        <Pagination 
         nPages = {nPages}
         currentPage ={currentPage}
         setCurrentPage ={setCurrentPage}
        />
        </>
       )
  }

  export default GetData;