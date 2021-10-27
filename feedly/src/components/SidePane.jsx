import React from 'react'
import { useState } from "react";
import { Pane ,Typography, Button ,Checkbox} from "@bigbinary/neetoui/v2";
import {Check} from '@bigbinary/neeto-icons'


function SidePane({showFilter,setShowFilter,topic,setTopic}) {
    const [all,setAll]=useState(false);
    const [science,setScience]=useState(false);
    const [business,setBusiness]=useState(true);
    const [national,setNational]=useState(true);
    const [sports,setSports]=useState(true);
    const [world,setWorld]=useState(false);
    const [technology,setTechnology]=useState(false);
    function onSave(){
        let t = [];
        if(all)
        {
         t=["Science","Business","National","Sports","World","Technology"]
        }else
        {
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
        }
        console.log(t)
        setTopic(t);
        setShowFilter(false);
    }
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
          <Checkbox 
          className="mt-2.5"
          checked={all}
          label="All"
          onChange={()=>setAll(s=>!s)}
          />
          <Checkbox 
          checked={science}
          label="Science"
          onChange={()=>setScience(s=>!s)}
          />
           <Checkbox 
          checked={business}
          label="Business"
          onChange={()=>setBusiness(s=>!s)}
          />
           <Checkbox 
          checked={national}
          label="National"
          onChange={()=>setNational(s=>!s)}
          />
           <Checkbox 
          checked={sports}
          label="Sports"
          onChange={()=>setSports(s=>!s)}
          />
           <Checkbox 
          checked={world}
          label="World"
          onChange={()=>setWorld(s=>!s)}
          />
           <Checkbox 
          checked={technology}
          label="Technology"
          onChange={()=>setTechnology(s=>!s)}
          />
          
        </Pane.Body>
        <Pane.Footer className="flex items-center space-x-2">
          <Button
            icon={Check}
            size="large"
            label="Save Changes"
            onClick={() => onSave()}
          />
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

