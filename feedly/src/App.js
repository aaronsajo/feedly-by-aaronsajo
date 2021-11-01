import React  from "react";
import { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Landingpage from './landingpage/index'
import NavBar from './components/Navbar';
import ArticlePage from './ArticlePage/ArticlePage'
import PageNotFound from "./components/PageNotFound";
import { ToastContainer } from "react-toastify";
import ErrorBoundary from "./components/ErrorBoundary";

const App =()=> {
  const [archive,setArchive]= useState(false);
  const [topic,setTopic] = useState(["National","Sports","Business","World"]);
  

 
 
  return (
    
    <Router>
      <ErrorBoundary> 
        <NavBar  setTopic={setTopic} topic={topic} archive={archive} setArchive={setArchive}/>
        <ToastContainer />
         <div>
         <Switch>
             <Route exact path="/" >
                  <Landingpage topic={topic} setTopic={setTopic} archive={archive} />
              </Route>
             <Route exact path="/articles/:id" component={ArticlePage} /> 
             <Route path="*" component={PageNotFound} />
         </Switch>
         </div>
      </ErrorBoundary> 
    </Router>
     
    
  );
}

export default App;
