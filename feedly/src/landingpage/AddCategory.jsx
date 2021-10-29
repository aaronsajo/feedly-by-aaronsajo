import React from 'react'
import { Modal,Button,Input,Textarea  } from "@bigbinary/neetoui/v2";
import { useState } from "react";
import { Typography } from "@bigbinary/neetoui/v2"

function AddCategory({write,setWrite}) {
     const [name,setName]= useState("");
     const [email,setEmail]= useState("");
     const [message,setMessage]= useState("");
     
     function postReq(){
        fetch('https://webhook.site/9f54337a-cb5f-43e8-bb10-6caa824fb55a',{
            method : 'POST',
            headers : {"Content-Type": "application/json"},
            body: JSON.stringify({name,email,message})
        } )}

    return (
        <Modal isOpen={write} onClose={() => setWrite(false)} size="xl" closeButton={false}>
        <Modal.Header>
          <Typography style="h2">Can't find what you came for?</Typography>
        </Modal.Header>
        <Modal.Body className="mt-5">
          <div className = " ml-auto mr-auto">
            
            <p className="">Write to us about which category interests you and we will fetch them for you daily, for free</p>
            <br />
          </div>
          <div className="flex mb-7">
          <Input placeholder="Oliver Smith" className="mr-10" value = {name} label="Name" onChange = {(e)=>setName(e.target.value)}/>
          <Input placeholder="oliver@example.com" value = {email}  label="Email"  onChange = {(e)=>setEmail(e.target.value)}/>
          </div>
          <Textarea placeholder="Write your message here" value = {message} label="Message"  onChange = {(e)=>setMessage(e.target.value)}/>
        </Modal.Body>
          <Modal.Footer className="space-x-2">
            <Button
              size="large"
              label="Submit"
              onClick={() => {setWrite(false);postReq()}}
            />
            <Button
              style="text"
              size="large"
              label="Cancel"
              onClick={() => setWrite(false)}
            />
          </Modal.Footer>
        </Modal>   
    )
}

export default AddCategory
