import React from 'react'
import { Modal,Button,Input } from "@bigbinary/neetoui/v2";
import { useState } from "react";
import pic from "./picture/img1.png"



function Subscribe({showSub,setShowSub}) {
    const [email,setEmail]=useState("");
    function postReq(){
        fetch('	https://webhook.site/9f54337a-cb5f-43e8-bb10-6caa824fb55a',{
            method : 'POST',
            headers : {"Content-Type": "application/json"},
            body: JSON.stringify(email)
        } )
        
    }
    return (
        <Modal isOpen={showSub} onClose={() => setShowSub(false)} size="xs" closeButton={false}>
         <Modal.Body className="mt-5">
          <div className = "mt-8 ml-auto mr-auto">
            <img src={pic} alt= "subscribe"/>
            <br />
            <p className="font-bold text-2xl">Subscribe to Feed.ly</p>
            <br />
            <p className="">We don't spam but we deliver the latest news in short</p>
            <br />
          </div>
          <Input placeholder="oliver@example.com" value = {email} onChange = {(e)=>setEmail(e.target.value)}/>
        </Modal.Body>
          <Modal.Footer className="space-x-2">
            <Button
              size="large"
              label="Sign Up"
              onClick={() => {setShowSub(false);postReq()}}
            />
            <Button
              style="text"
              size="large"
              label="Cancel"
              onClick={() => setShowSub(false)}
            />
          </Modal.Footer>
        </Modal>
    )
}

export default Subscribe
