import React from 'react'
import NewsCategory from './NewsCategory'
const index = () => {
    return (
        <div className=" container  flex  justify-center mx-32 w-5/6 pt-3">
            <div >
               <NewsCategory category="National"/>
               <NewsCategory category="Sports"/>
               <NewsCategory category="Business"/>
               
            </div>
        </div>
    )
}

export default index
