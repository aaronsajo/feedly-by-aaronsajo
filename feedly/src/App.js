import React  from "react";
import { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Landingpage from './landingpage/index'
import NavBar from './components/Navbar';
import ArticlePage from './ArticlePage/ArticlePage'
import ErrorBoundry from "./components/ErrorBoundry";
import { ToastContainer } from "react-toastify";


function App() {
  const [archive,setArchive]= useState(false);
  const [topic,setTopic] = useState(["National","Sports","Business"]);
  

 
 
  return (
    
      <Router>
        
        <NavBar  setTopic={setTopic} topic={topic} archive={archive} setArchive={setArchive}/>
        <ToastContainer />
         <div>
         <Switch>
             <Route exact path="/" >
                  <Landingpage topic={topic} setTopic={setTopic} archive={archive} />
              </Route>
             <Route exact path="/articles/:id" component={ArticlePage} /> 
             <Route path="*" component={ErrorBoundry} />
         </Switch>
         </div>
        
    </Router>
     
    
  );
}

export default App;
