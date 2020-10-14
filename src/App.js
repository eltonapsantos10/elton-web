import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {home} from './home'
import {contatos} from './contatos'
import {servicos} from './servicos'

import {NavigationBar} from './Components/NavigationBar'
import {Carrossel} from './Components/Carrossel'
import {Jumb} from './Components/Jumb'
import {Card1} from './Components/Card1'
import {Forms} from './Components/Forms'
import {Video} from './Components/Video'
import {Fluid} from './Components/Fluid'


function App() {
  return (

    
    <React.Fragment>  
      <NavigationBar/>  
      <Carrossel/>  
      <Jumb/>
      <Card1/>
      <Forms/>
      <Video/>
    
      
      
      
        <Router>
        <Switch>
          <Route path="/" component={home}/>
          <Route path="./contatos" component={contatos}/>
          <Route path="./servicos" component={servicos}/>
          </Switch>
        </Router>
      
    </React.Fragment>


  );
}

export default App;
