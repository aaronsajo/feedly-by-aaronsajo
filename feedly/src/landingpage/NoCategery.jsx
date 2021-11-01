import React from 'react'
import { useState,useEffect } from "react";
import { Typography, Button } from "@bigbinary/neetoui/v2"
import img2 from "./Landing Picture/Vectorman.png"
import { Highlight } from "@bigbinary/neeto-icons";
import AddCategory from './AddCategory';
import SmallNews from './SmallNews';

const NoCategery=()=> {
    const [write,setWrite] = useState(false);
    const [posts,setPosts] = useState([]);
    const [news, setNews] = useState([]);
    useEffect(() => {
        
        const fetchPosts = async () => {
          
         
          const res = await fetch("https://inshortsapi.vercel.app/news?category=all");
          const dat = await res.json();
          const fd = await dat["data"];
          setPosts(fd)      
          const n=fd.filter((data,i)=>i<5&&i!==0);
          setNews(n);
          
        };
        fetchPosts();
        
        return(() => {
          
        })
      }, []);
    return (
        <div className=" flex flex-col p-20 items-center">
            <img  src={img2} alt="No Filter" />
          <Typography style="h3" className="p-8 w-3/12 text-center" >No News Article Found.</Typography>     
          <Button
              className="px-2 w-1/10 py-10"
              label ="Write to us"
              style="secondary"
              icon={Highlight}
              size="large"
              iconPosition="left"
              onClick = {()=>setWrite(s=>!s)}
            />
            <div className="w-full mt-3.5 ">
              <hr/>
            </div>
            <SmallNews news={news} all={posts} />
            <AddCategory write={write} setWrite={setWrite} />
        </div>
    )
}

export default NoCategery
