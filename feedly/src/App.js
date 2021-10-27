import React from "react";
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
         <NavBar topic={topic} setTopic={setTopic}/>
         <div>
         <Switch>
             <Route exact path="/" component={() =><Landingpage topic={topic}/>}   />
             <Route exact path="/articles" component={ArticlePage} /> 
             <Route path="*" component={ErrorBoundry} />
         </Switch>
         </div>
    </Router>
     
    
  );
}

export default App;
