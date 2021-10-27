import React from 'react'
import Timestamp from './Timestamp'
import { Typography} from "@bigbinary/neetoui/v2"
function SmallNews({news}) {
    return (
        <div className="grid grid-cols-2 gap-x-60 mt-2.5">
           {news.map((data,i)=>(<div key ={i} className="flex pb-5">
               
               <img src="https://picsum.photos/84" />
              
              <div className="pl-5">
               <Typography style="h6" className="text-left flex ">
                {data?.title.trim()}
               
               </Typography>
               
               <Timestamp type="small" author={data?.author} time={data?.time} date={data?.date} />
               
              </div>  
            </div>))}
            
        </div>
    )
}

export default SmallNews
