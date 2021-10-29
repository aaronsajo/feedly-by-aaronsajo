import React from 'react'
import NewsCategory from './NewsCategory'
import { Tag } from "@bigbinary/neetoui/v2";
import NoCategery from './NoCategery';

const Index = ({topic,setTopic,archive}) => {
     function noRefCheck(ele){
        setTopic(topic.filter((item)=>item!=ele))
     }

     if(topic.length===0){
         return(
             <NoCategery/>
         )
     }
    
    return (
        <div>
            
        
        <div className=" container   mx-32 w-5/6 pt-3" >
        <div className="ml-8">
           {
               topic.map((ele,i)=>(
                <Tag
                
                key={i}
                label={ele}
                onClose={()=>noRefCheck(ele)}
                className="ml-4"
              />
               ))
           }
            </div>
        <div className="flex  justify-center">
            <div >
                
                {topic.map((d,i)=>(
                  <NewsCategory key={i} category={d} archive={archive} topic={topic}/>  
                ))}
               
               
            </div>
            </div>
        </div>
        </div>
    )
}

export default Index
