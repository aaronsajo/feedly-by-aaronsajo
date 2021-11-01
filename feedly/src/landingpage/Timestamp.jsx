import React from 'react'


const Timestamp=({type,author,time,date})=> {
    if(type==="big")
    {return (
        <div className="text-right neeto-ui-text-gray-500 pt-3 pb-3">
            {author+" at "+time+" on "+date }
        </div>
    )}
    else
    {
        return (
            <div className=" text-left neeto-ui-text-gray-500 pt-3 text-xs">
                {author+" at "+time+" on "+date }
            </div>)
    }
}

export default Timestamp
