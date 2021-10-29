import React  from "react";
import { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Landingpage from './landingpage/index'
import NavBar from './components/Navbar';
import ArticlePage from './ArticlePage/ArticlePage'
import ErrorBoundry from "./components/ErrorBoundry";



function App() {
  
  const [topic,setTopic] = useState(["National","Sports","Business"]);
  

 
 
  return (
    
      <Router>
        
        <NavBar  setTopic={setTopic} topic={topic}/>
         <div>
         <Switch>
             <Route exact path="/" >
                  <Landingpage topic={topic} setTopic={setTopic} />
              </Route>
             <Route exact path="/articles/:id" component={ArticlePage} /> 
             <Route path="*" component={ErrorBoundry} />
         </Switch>
         </div>
        
    </Router>
     
    
  );
}

export default App;
