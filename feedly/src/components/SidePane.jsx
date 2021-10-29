import React from 'react'
import { useState ,useEffect} from "react";
import { Pane ,Typography, Button ,Checkbox} from "@bigbinary/neetoui/v2";
import {Check} from '@bigbinary/neeto-icons'
import {  Link } from "react-router-dom";

function SidePane({showFilter,setShowFilter,setTopic,topic,archive,setArchive}) {
    const [all,setAll]=useState(false);
    const [science,setScience]=useState(false);
    const [business,setBusiness]=useState(true);
    const [national,setNational]=useState(true);
    const [sports,setSports]=useState(true);
    const [world,setWorld]=useState(false);
    const [technology,setTechnology]=useState(false);
    const [localArchive,setLocalArchive] = useState(false);
    function onSave(){
        let t = [];
        if(all)
        { t.push("All")}
        
        if(science)
         { t.push("Science")}
        if(business)
        { t.push("Business")}
        if(national)
        { t.push("National")}
        if(sports)
        {  t.push("Sports")}
        if(world)
        {  t.push("World")}
        if(technology)
        {  t.push("Technology");}
        
        setArchive(localArchive);
        setTopic(t);
        setShowFilter(false);
         } 
         useEffect(() => {
          setLocalArchive(archive);
          if(!topic.includes("All"))
          {
            setAll(false)
          }
          if(!topic.includes("Science"))
          {
            setScience(false)
          }
          if(!topic.includes("Business"))
          {
            setBusiness(false)
          }
          if(!topic.includes("National"))
          {
            setNational(false)
          }
          if(!topic.includes("Sports"))
          {
            setSports(false)
          }
          if(!topic.includes("World"))
          {
            setWorld(false)
          }
          if(!topic.includes("Technology"))
          {
            setTechnology(false)
          }
           return () => {
             
           }
         }, [topic])

        useEffect(() => {
          setLocalArchive(archive);
          if(topic.includes("All"))
          {
            setAll(true)
          }
          if(topic.includes("Science"))
          {
            setScience(true)
          }
          if(topic.includes("Business"))
          {
            setBusiness(true)
          }
          if(topic.includes("National"))
          {
            setNational(true)
          }
          if(topic.includes("Sports"))
          {
            setSports(true)
          }
          if(topic.includes("World"))
          {
            setWorld(true)
          }
          if(topic.includes("Technology"))
          {
            setTechnology(true)
          }
          if(!topic.includes("All"))
          {
            setAll(false)
          }
          if(!topic.includes("Science"))
          {
            setScience(false)
          }
          if(!topic.includes("Business"))
          {
            setBusiness(false)
          }
          if(!topic.includes("National"))
          {
            setNational(false)
          }
          if(!topic.includes("Sports"))
          {
            setSports(false)
          }
          if(!topic.includes("World"))
          {
            setWorld(false)
          }
          if(!topic.includes("Technology"))
          {
            setTechnology(false)
          }
           return () => {
             
           }
           
         }, [showFilter])
         
         
    return (
        <div className="w-full">
      
      
      <Pane isOpen={showFilter} onClose={() => setShowFilter(false)}>
        <Pane.Header>
          <Typography style="h2" weight="semibold">
           Filter Articles
          </Typography>
        </Pane.Header>
        <Pane.Body>
           
          <Typography style="h4">Category</Typography>
          <div>
          <Checkbox 
          className="mt-2.5"
          checked={all}
          label="All"
          onChange={()=>setAll(s=>!s)}
          className="p-5"
          />
          <Checkbox 
          checked={science}
          label="Science"
          onChange={()=>setScience(s=>!s)}
          className="p-5"
          />
           <Checkbox 
          checked={business}
          label="Business"
          onChange={()=>setBusiness(s=>!s)}
          className="p-5"
          />
           <Checkbox 
          checked={national}
          label="National"
          onChange={()=>setNational(s=>!s)}
          className="p-5"
          />
           <Checkbox 
          checked={sports}
          label="Sports"
          onChange={()=>setSports(s=>!s)}
          className="p-5"
          />
           <Checkbox 
          checked={world}
          label="World"
          onChange={()=>setWorld(s=>!s)}
          className="p-5"
          />
           <Checkbox 
          checked={technology}
          label="Technology"
          onChange={()=>setTechnology(s=>!s)}
          className="p-5"
          
          />
           <Checkbox 
          checked={localArchive}
          label="Include archived articles."
          onChange={()=>setLocalArchive(s=>!s)}
          className="p-5"
          
          />
          
          </div>
          <div className="w-full ">

          <hr/>
          </div>
        </Pane.Body>
        <Pane.Footer className="flex items-center space-x-2">
        <Link
               to={{
                pathname: `/`
                
                   }}
                >
                  <Button
            icon={Check}
            size="large"
            label="Save Changes"
            onClick={() => onSave()}
          />
               </Link>
          
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() =>setShowFilter(false)}
          />
        </Pane.Footer>
      </Pane>
    </div>
    )
}

export default SidePane

