import React from 'react'
import Timestamp from './Timestamp'
import { Typography} from "@bigbinary/neetoui/v2"
import { BrowserRouter as Router,Link ,Switch} from "react-router-dom";
function SmallNews({news,all}) {
    
    return (
        <div className="grid grid-cols-2 gap-x-60 mt-2.5">
           {news.map((data,i)=>(
               
               <div key ={i} className="flex pb-5">
               
               <img src="https://picsum.photos/84" alt="img"/>
              
              <div className="pl-5">
               <Typography style="h6" className="text-left flex ">
                {data?.title.trim()}
               
               </Typography>
               
               <Timestamp type="small" author={data?.author} time={data?.time} date={data?.date} />
               
               
               <Link
               to={{
                pathname: "/articles",
                state: {...data,all}
                   }}
                className="flex text-left mt-3 neeto-ui-text-info">Read More
               </Link>
               
               
              </div>  
            </div>))}
            
        </div>
    )
}

export default SmallNews
