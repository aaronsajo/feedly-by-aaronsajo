import React from 'react'
import Timestamp from './Timestamp'
import { Typography} from "@bigbinary/neetoui/v2"
import { BrowserRouter as Router,Link } from "react-router-dom";
function BigNews(props) {
   const  {title,author,time,date,content}=props
    return (
        <div>
            <div className="flex border-b-2 pb-6">
               
               <img src="https://picsum.photos/526/263" alt="Img" className="w-150"/>
               
              <div className="pl-5">
               <Typography style="h3" className="text-left flex justify-between tracking-wide">
                {title?.trim()}
               
               </Typography>
               
               <Timestamp type="big" author={author} time={time} date={date}/>
               <Typography style="body1" className="flex text-left  text-xs neeto-ui-text-gray-600">
                 {content?.slice(0,300)+"..."}
               </Typography>
               

               <Link
               to={{
                pathname: "/articles",
                state: { ...props}
              }}
                className="flex text-left mt-3 neeto-ui-text-info">Read More
               </Link>
               
              </div>
           
           </div>
        </div>
    )
}

export default BigNews
