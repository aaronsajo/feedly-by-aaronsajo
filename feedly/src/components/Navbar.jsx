import React from "react";
import { Search, Filter,Notification} from "@bigbinary/neeto-icons"
import { Typography, Button ,Tooltip} from "@bigbinary/neetoui/v2"

const NavBar = () => {
  return (
    <nav className="bg-white shadow p-2 h-16">
      <div className="py-2 mx-3">
        <div className="flex justify-between ">
          <div className="flex ">
            <div className="mt-1" >
             <Typography style="h3" className="neeto-ui-text-gray-500">
                 Feed.ly
             </Typography>
            </div>
          </div>
          <div className="p-1 flex justify-end" >
          <Tooltip placement={"bottom-start"} content={"Search"}>
             <Typography><Search className="ml-5 mt-1" onClick={()=>console.log("Search")} tooltipProps/> </Typography>
          </Tooltip>
          <Tooltip placement={"bottom-start"} content={"Notification"}>
              
             <Typography><Notification  className="ml-5 mt-1" onClick={()=>console.log("Notification")}/></Typography>
          </Tooltip>
          
            <Tooltip placement={"bottom-start"} content={"Filter"}>
            <Button
              className="ml-5"
              label ="Filter"
              style="secondary"
              icon={Filter}
              size="large"
            />
            </Tooltip>
            
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;