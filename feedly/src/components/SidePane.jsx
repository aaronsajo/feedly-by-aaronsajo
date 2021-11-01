import React from 'react'
import { useState ,useEffect} from "react";
import { Pane ,Typography, Button ,Checkbox} from "@bigbinary/neetoui/v2";
import {Check} from '@bigbinary/neeto-icons'
import {  Link } from "react-router-dom";

const  SidePane=({showFilter,setShowFilter,setTopic,topic,archive,setArchive}) =>{
    // const [all,setAll]=useState(false);
    // const [science,setScience]=useState(false);
    // const [business,setBusiness]=useState(true);
    // const [national,setNational]=useState(true);
    // const [sports,setSports]=useState(true);
    // const [world,setWorld]=useState(false);
    // const [technology,setTechnology]=useState(false);
    // const [polictis,setPolicitcs]=useState(false);
    // const [startup,setStartup]=useState(false);
    // const [entertainment,setEntertainment]=useState(false);
    // const [automobile,setAutomobile]=useState(false);
    const  [newsHeadings,setNewsHeading] = useState({
      all:false,
      national:true,
      business:true,
      sports:true,
      world:true,
      politics:false,
      technology:false,
      startup:false,
      entertainment:false,
      science:false,
      automobile:false,})
    const [localArchive,setLocalArchive] = useState(false);
    

  
    const onSave=()=>{
        let t = [];
        for(let key in newsHeadings ){
          if(newsHeadings[key])
          {
            t.push(`${key[0].toUpperCase()}${key.slice(1)}`)
          }
        }
        
        setArchive(localArchive);
        setTopic(t);
        setShowFilter(false);
         } 
         useEffect(() => {
          setLocalArchive(archive);
          if(!topic.includes("All"))
          {
            setNewsHeading(s=>({...s,all:false}))
          }
          if(!topic.includes("Automobile"))
          {
            setNewsHeading(s=>({...s,automobile:false}))
          }
          if(!topic.includes("Entertainment"))
          {
            setNewsHeading(s=>({...s,entertainment:false}))
          }
          if(!topic.includes("Politics"))
          {
            setNewsHeading(s=>({...s,politics:false}))
          }
          if(!topic.includes("Startup"))
          {
            setNewsHeading(s=>({...s,startup:false}))
          }
          if(!topic.includes("Science"))
          {
            setNewsHeading(s=>({...s,science:false}))
          }
          if(!topic.includes("Business"))
          {
            setNewsHeading(s=>({...s,business:false}))
          }
          if(!topic.includes("National"))
          {
            setNewsHeading(s=>({...s,national:false}))
          }
          if(!topic.includes("Sports"))
          {
            setNewsHeading(s=>({...s,sports:false}))
          }
          if(!topic.includes("World"))
          {
            setNewsHeading(s=>({...s,world:false}))
          }
          if(!topic.includes("Technology"))
          {
            setNewsHeading(s=>({...s,technology:false}))
          }
           return () => {
             
           }
         }, [topic])

        useEffect(() => {
          setLocalArchive(archive);
          if(topic.includes("All"))
          {
            setNewsHeading(s=>({...s,all:true}))
          }
          if(topic.includes("Automobile"))
          {
            setNewsHeading(s=>({...s,automobile:true}))
          }
          if(topic.includes("Entertainment"))
          {
            setNewsHeading(s=>({...s,entertainment:true}))
          }
          if(topic.includes("Politics"))
          {
            setNewsHeading(s=>({...s,politics:true}))
          }
          if(topic.includes("Startup"))
          {
            setNewsHeading(s=>({...s,startup:true}))
          }
          if(topic.includes("Science"))
          {
            setNewsHeading(s=>({...s,science:true}))
          }
          if(topic.includes("Business"))
          {
            setNewsHeading(s=>({...s,business:true}))
          }
          if(topic.includes("National"))
          {
            setNewsHeading(s=>({...s,national:true}))
          }
          if(topic.includes("Sports"))
          {
            setNewsHeading(s=>({...s,sports:true}))
          }
          if(topic.includes("World"))
          {
            setNewsHeading(s=>({...s,world:true}))
          }
          if(topic.includes("Technology"))
          {
            setNewsHeading(s=>({...s,technology:true}))
          }
          if(!topic.includes("All"))
          {
            setNewsHeading(s=>({...s,all:false}))
          }
          if(!topic.includes("Automobile"))
          {
            setNewsHeading(s=>({...s,automobile:false}))
          }
          if(!topic.includes("Entertainment"))
          {
            setNewsHeading(s=>({...s,entertainment:false}))
          }
          if(!topic.includes("Politics"))
          {
            setNewsHeading(s=>({...s,politics:false}))
          }
          if(!topic.includes("Startup"))
          {
            setNewsHeading(s=>({...s,startup:false}))
          }
          if(!topic.includes("Science"))
          {
            setNewsHeading(s=>({...s,science:false}))
          }
          if(!topic.includes("Business"))
          {
            setNewsHeading(s=>({...s,business:false}))
          }
          if(!topic.includes("National"))
          {
            setNewsHeading(s=>({...s,national:false}))
          }
          if(!topic.includes("Sports"))
          {
            setNewsHeading(s=>({...s,national:false}))
          }
          if(!topic.includes("World"))
          {
            setNewsHeading(s=>({...s,world:false}))
          }
          if(!topic.includes("Technology"))
          {
            setNewsHeading(s=>({...s,technology:false}))
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
          checked={newsHeadings.all}
          label="All"
          onChange={()=>setNewsHeading(s=>({...s,all:!s.all}))}
          className="px-5 py-2.5"
          />
          <Checkbox 
          checked={newsHeadings.automobile}
          label="Automobile"
          onChange={()=>setNewsHeading(s=>({...s,automobile:!s.automobile}))}
          className="px-5 py-2.5"
          />
           <Checkbox 
          checked={newsHeadings.business}
          label="Business"
          onChange={()=>setNewsHeading(s=>({...s,business:!s.business}))}
          className="px-5 py-2.5"
          />
           <Checkbox 
          checked={newsHeadings.entertainment}
          label="Entertainment"
          onChange={()=>setNewsHeading(s=>({...s,entertainment:!s.entertainment}))}
          className="px-5 py-2.5"
          />
           <Checkbox 
          checked={newsHeadings.national}
          label="National"
          onChange={()=>setNewsHeading(s=>({...s,national:!s.national}))}
          className="px-5 py-2.5"
          />
          <Checkbox 
          checked={newsHeadings.polictis}
          label="Policitcs"
          onChange={()=>setNewsHeading(s=>({...s,politics:!s.politics}))}
          className="px-5 py-2.5"
          />
          <Checkbox 
          checked={newsHeadings.science}
          label="Science"
          onChange={()=>setNewsHeading(s=>({...s,science:!s.science}))}
          className="px-5 py-2.5"
          />
          
          
           <Checkbox 
          checked={newsHeadings.sports}
          label="Sports"
          onChange={()=>setNewsHeading(s=>({...s,sports:!s.sports}))}
          className="px-5 py-2.5"
          />
           <Checkbox 
          checked={newsHeadings.startup}
          label="Startup"
          onChange={()=>setNewsHeading(s=>({...s,startup:!s.startup}))}
          className="px-5 py-2.5"
          />
           <Checkbox 
          checked={newsHeadings.technology}
          label="Technology"
          onChange={()=>setNewsHeading(s=>({...s,technology:!s.technology}))}
          className="px-5  py-2.5"
          
          />
           <Checkbox 
          checked={newsHeadings.world}
          label="World"
          onChange={()=>setNewsHeading(s=>({...s,world:!s.world}))}
          className="px-5 py-2.5"
          />
         
          </div>
          <div className="w-full ">
          <hr/>
          <Checkbox 
          checked={localArchive}
          label="Include archived articles."
          onChange={()=>setLocalArchive(s=>!s)}
          className="p-5"
          
          />
          
          
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

