import data from "./data.json"
  


  function GetData(){

       console.log(data)
      
       return(
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

        

        {data.LeadDetails.map((ele,index)=>{
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
       )
  }

  export default GetData;