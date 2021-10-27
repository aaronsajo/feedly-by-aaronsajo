import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Landingpage from './landingpage/Index'
import NavBar from './components/Navbar';
import ArticlePage from './ArticlePage/ArticlePage'

function App() {
  return (
    
      <Router>
         <NavBar/>
         <div>
         <Switch>
             <Route exact path="/" component={Landingpage} />
             <Route exact path="/articles" component={ArticlePage} /> 
         </Switch>
         </div>
    </Router>
     
    
  );
}

export default App;
