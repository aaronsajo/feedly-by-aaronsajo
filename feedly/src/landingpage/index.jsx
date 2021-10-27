import React from 'react'
import NewsCategory from './NewsCategory'
const index = ({topic}) => {
    
    return (
        <div className=" container  flex  justify-center mx-32 w-5/6 pt-3">
            <div >
                
                {topic.map((d,i)=>(
                  <NewsCategory key={i} category={d}/>  
                ))}
               
               
            </div>
        </div>
    )
}

export default index
