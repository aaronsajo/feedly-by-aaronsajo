import { useState,useEffect,useCallback } from "react";
import React from 'react';
import {debounce} from 'lodash'
import ReactDOM from 'react-dom'
import {  Link } from "react-router-dom";
import { Button,Input } from "@bigbinary/neetoui/v2";


function SearchNews({topic,showSearch,setShowSearch}) {
    
    
    const [searchText, setSearchText] = useState("");
    const [allNews,setAllNews] = useState({});  
    useEffect(() => {
        
        const fetchPosts = async () => {
              
        let d={}; 
        
        topic.forEach(async (item)=>{
            
            const resp = await fetch("https://inshortsapi.vercel.app/news?category="+item.toLocaleLowerCase());
            
            const res = await resp.json();
            d[res.category] = await res.data;
           
            setAllNews(d);
        })
        };
        fetchPosts();
            
        return(() => {
              
            })
        },[]);
    
     const getFilteredRows = (data, text,cat) => {
        
        return data?.filter((row) =>row.title.toLowerCase().includes(text.toLowerCase())).map(ele=> ({ele,cat}));
        
        };
    
    const getSearchData = (data,text)=>{
      
      return [].concat(...topic.map(cat=>{
       return getFilteredRows(data[cat.toLowerCase()],text,cat)
      }))
    }     
    const getCatDat=(cat)=>{
        return allNews[cat?.toLowerCase()];
     }
     const deb=useCallback(debounce((data,text)=>getSearchData(data,text), 1000), []);
   
   if(!showSearch) return null
    
    
    
    return ReactDOM.createPortal(
        <div>
            
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-70" onClick={()=>{setShowSearch(false);setSearchText()}} ></div> 
            <div className="w-full fixed top-1/3">
            <div className="flex flex-col items-center w-full">
          <Input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search" 
            className="w-1/2"
        />
       
       {    searchText &&  <div className="mt-2 max-h-72 overflow-y-auto w-1/2 bg-white rounded-sm border-b-2">
          {
            allNews && deb(allNews,searchText)?.map((e,i)=>(
             
             <div key={i} className="m-2 p-2 bg-gray-100 rounded-sm border-b-2 flex justify-between items-center"  > 
             
          <Link
               to={{
                pathname: `/articles/${e?.["ele"].url.slice(33)}`,
                state: {...e?.ele,all:getCatDat(e?.cat)}
                   }}
                className="flex text-left mt-3 neeto-ui-text-info"
                onClick={()=>setShowSearch(s=>!s)}
                >
                {searchText && e?.["ele"].title} 
             </Link> 
          
             </div>
            ))
          }
          </div> }
         
        </div>
      </div>
        </div>
    ,document.getElementById('search-root'));
}

export default SearchNews
