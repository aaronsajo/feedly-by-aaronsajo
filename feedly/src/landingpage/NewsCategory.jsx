import React from 'react'
import { useState, useEffect , useContext} from "react";
import { Typography} from "@bigbinary/neetoui/v2"

import SmallNews from './SmallNews';
import BigNews from './BigNews';


const NewsCategory = ({category,archive,topic}) => {
    const [posts, setPosts] = useState([]);
    const [news, setNews] = useState([]);
    const  [loading,setLoading] = useState(true);
    const str = category.toLowerCase();
    
    useEffect(() => {
        let fd
        const fetchPosts = async () => {        
          const res = await fetch("https://inshortsapi.vercel.app/news?category="+str);
          const dat = await res.json();
          fd = await dat["data"];
          if(!archive)
          { const today = new Date().toDateString()
            fd=fd.filter((ele)=>{
              let newsDate = new Date(ele.date.slice(0,11)).toDateString();
              return today === newsDate?true : false
            }
          )}
          setPosts(fd)      
          const n=fd.filter((data,i)=>i<5&&i!==0);
          setNews(n);
          setLoading(false);
          
        };
        fetchPosts();
       
        return(() => {
          
        })
      }, [topic]);
      
    if(loading){
      return (

        <div className="px-15 py-8 mx-20 ">
          <h1> {category} News</h1>
          <h2 className="pt-5">Loading ...</h2>
      
        </div>)
      }
     
    
    return  (
        <div className="px-15 py-8 mx-20 ">
            <Typography style="h2" className="flex pb-2 mr-0" >
               {category} News
            
             </Typography>
             {(posts[0]==undefined) &&<div>
                 <h3 >No {category} News Today!</h3><p>Make changes in the  filter for Archived News</p>
               </div>}
            { !(posts[0]==undefined) && <div>
              <BigNews title={posts[0]?.title}  author={posts[0]?.author} time={posts[0]?.time} date={posts[0]?.date} content={posts[0]?.content} url={posts[0]?.url} readMoreUrl={posts[0]?.readMoreUrl}all={posts}/>
              <div className="border-b-2 pb-8">
              <SmallNews news={news} all={posts} /></div>
            </div>}
        </div>
    )

}

export default NewsCategory
