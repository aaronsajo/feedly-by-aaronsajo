import React from 'react'
import Timestamp from './Timestamp'
import { Typography} from "@bigbinary/neetoui/v2"
function BigNews({title,author,time,date,content}) {
    return (
        <div>
            <div className="flex border-b-2 pb-6">
               
               <img src="https://picsum.photos/526/263" className="w-150"/>
              
              <div className="pl-5">
               <Typography style="h3" className="text-left flex justify-between">
                {title?.trim()}
               
               </Typography>
               
               <Timestamp type="big" author={author} time={time} date={date}/>
               <Typography style="body1" className="flex text-left  text-xs neeto-ui-text-gray-600">
                 {content?.slice(0,300)+"..."}
               </Typography>
              </div>
           
           </div>
        </div>
    )
}

export default BigNews
