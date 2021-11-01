import React from 'react'
import {useLocation} from 'react-router-dom'
import { Typography,Tooltip} from "@bigbinary/neetoui/v2"
import { Copy } from "@bigbinary/neeto-icons";
import Timestamp from '../landingpage/Timestamp';
import SmallNews from '../landingpage/SmallNews';
import { Toastr } from "@bigbinary/neetoui/v2";

const ArticlePage=() =>{
    const data =useLocation().state
    
    const allNews = data?.all
    const nonfilter= allNews.filter((d,i)=>d.url!==data?.url &&i<5)
    const subNews = nonfilter.filter((d,i)=>i<4);
    
    

    
    return (
        <div className="container w-2/3 ml-40 mr-20 pl-20">
            <div>
                <Typography style="h1" className="tracking-wider ">
                    {data?.title }<Tooltip placement={"bottom-start"} content={"Copy URL"}>
                        <div className="inline-block" onClick={ ()=>{navigator.clipboard.writeText(data?.readMoreUrl);Toastr.info("Copied to clipboard ")}}> <Copy  /></div>
                 </Tooltip>
                </Typography>
            </div>
            
            <Timestamp type="small" author={data?.author} time={data?.time} date={data?.date} />
            
                <img src="https://picsum.photos/526/263 " alt-="Image" className="mx-auto py-8" />
            
            <Typography style="body1" className="text-left pb-4">
            {data?.content}
            </Typography>
            <Typography style="body1" className="text-left pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit lectus et nisi semper, ac porttitor est vehicula. Donec quis sollicitudin nulla. Donec tincidunt diam a ante egestas ornare. Nam vestibulum sapien ac mi pretium, ac ultricies nisl hendrerit. Proin blandit semper massa sit amet euismod. Integer ornare lacus at turpis mattis dignissim. Curabitur vestibulum scelerisque lacus sed tincidunt.
             </Typography>   
            <Typography style="body1" className="text-left pb-4 ">
                Cras nec faucibus mauris, eget bibendum nibh. Ut venenatis cursus tristique. Sed sit amet augue tempus, eleifend felis ac, viverra massa. Proin rutrum commodo leo, eget tincidunt nisi molestie vitae. Maecenas sit amet lacus mollis, eleifend justo in, lacinia neque. Duis imperdiet semper turpis in dictum. Fusce lectus ex, pretium a dolor non, pharetra iaculis tellus. Suspendisse vulputate molestie ex at finibus. Ut ut ante eu magna pharetra dignissim. Etiam ornare tortor vel volutpat tincidunt. Praesent eleifend a sem a dapibus. Curabitur blandit arcu purus, ac scelerisque risus luctus sed.
            </Typography>
            <Typography style="body1" className="text-left pb-4">
                Aenean molestie convallis leo eget facilisis. Quisque dapibus pulvinar dolor ut posuere. Nullam consequat efficitur accumsan. Sed rhoncus rutrum purus, a ornare tortor pretium a. Fusce urna tellus, tempus id placerat accumsan, suscipit vitae ligula. Nulla facilisi. Fusce gravida, turpis eu pulvinar posuere, lorem libero semper odio, nec mattis dolor turpis pharetra metus. Aenean ornare rutrum ultricies. Cras id nunc nulla.

                Proin lacinia sed lectus eu molestie. Etiam vel erat urna. Maecenas laoreet aliquet urna sed lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla pellentesque non ante vel pellentesque. Nulla at maximus elit, sed viverra est. Curabitur vitae hendrerit massa. Sed finibus mollis tortor, vel vulputate nulla blandit quis. In purus eros, aliquet vestibulum quam ac, tempor malesuada lacus.
            </Typography>
            <SmallNews news={subNews} all={allNews} /> 
        </div>
    )
}

export default ArticlePage