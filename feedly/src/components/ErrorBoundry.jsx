import React from 'react'
import { Typography, Button } from "@bigbinary/neetoui/v2"
import { Home} from "@bigbinary/neeto-icons";
import { useHistory } from "react-router-dom";
import img2 from "./picture/Error.png"
function ErrorBoundry() {
    let history = useHistory();
    function home(){
        history.push(`/`);
    }
    return (
        <div className=" flex flex-col p-20 items-center">
            <img  src={img2} alt="Error Page"/>
        <Typography style="h3" className="px-2 w-3/12 text-center" >You have landed somewhere unknown</Typography>     
        <Button
              className="px-2 w-1/10"
              label ="Take me home"
              style="secondary"
              icon={Home}
              size="large"
              onClick={()=>home()}
            />
        </div>
    )
}

export default ErrorBoundry
