import React from "react";
import { useState } from "react";
import { Search, Filter,Notification} from "@bigbinary/neeto-icons"
import { Typography, Button ,Tooltip} from "@bigbinary/neetoui/v2"
import SidePane from "./SidePane";
import Subscribe from "./Subscribe";
import SearchNews from "./SearchNews";

const NavBar = ({setTopic,topic,archive,setArchive}) => {
    const [showFlilter,setShowFilter]=useState(false)
    const [showSub,setShowSub]=useState(false)
    const  [showSearch,setShowSearch] = useState(false);
    
  return (
    <nav className="bg-white shadow p-2 h-16">
      <div className="py-2 mx-3">
        <div className="flex justify-between ">
          <div className="flex ">
            <div className="mt-1" >
             <Typography style="h4" className="neeto-ui-text-gray-500">
                 Feed.ly
             </Typography>
            </div>
          </div>
          <div className="p-1 flex justify-end" >
          <Tooltip placement={"bottom-start"} content={"Search"}>
             <Typography><Search className="ml-5 mt-1" onClick={()=>setShowSearch(s=>!s)} /> </Typography>
          </Tooltip>
          <Tooltip placement={"bottom-start"} content={"Notification"}>
              
             <Typography><Notification  className="ml-5 mt-1" onClick={()=>setShowSub(s=>!s)}/></Typography>
          </Tooltip>
          
            <Tooltip placement={"bottom-start"} content={"Filter"}>
            <Button
              className="ml-5"
              label ="Filter"
              style="secondary"
              icon={Filter}
              size="large"
              onClick={()=>setShowFilter(f=>!f)}
            />
            </Tooltip>
            <SidePane showFilter={showFlilter} setShowFilter={setShowFilter}  setTopic={setTopic} topic={topic} archive={archive} setArchive={setArchive}/>
            <Subscribe showSub={showSub} setShowSub={setShowSub} />
             {showSearch && <SearchNews topic={topic} showSearch={showSearch} setShowSearch={setShowSearch}/> }
             {showSearch&&console.log("Search")}
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;