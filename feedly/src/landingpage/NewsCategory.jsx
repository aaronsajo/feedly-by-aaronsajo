import React from 'react'
import { useState, useEffect } from "react";
import { Typography} from "@bigbinary/neetoui/v2"

import SmallNews from './SmallNews';
import BigNews from './BigNews';
const NewsCategory = ({category}) => {
    const [posts, setPosts] = useState([]);
    const [news, setNews] = useState([]);
    
    const str = category.toLowerCase();
    useEffect(() => {
        const fetchPosts = async () => {
         
          const res = await fetch("https://inshortsapi.vercel.app/news?category="+str);
          const dat = await res.json();
          const fd = await dat["data"];
          
          setPosts(fd)
          
         
        };
        fetchPosts();
        
      }, []);
       
      useEffect(()=>{
        const n=posts.filter((data,i)=>i<5&&i!==0)
        setNews(n);
      },[posts])
    return (
        <div className="px-12 py-8 ">
            <Typography style="h2" className="flex pb-2 mr-0" >
               {category} News
            
             </Typography>
            <BigNews title={posts[0]?.title}  author={posts[0]?.author} time={posts[0]?.time} date={posts[0]?.date} content={posts[0]?.content} url={posts[0]?.url} all={posts}/>
            <div className="border-b-2 pb-8">
              <SmallNews news={news} all={posts} />
            </div>
        </div>
    )
}

export default NewsCategory
