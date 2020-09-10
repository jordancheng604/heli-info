import React from 'react';
import Main from './Components/Main'
import './App.css';
import './styles/styles.scss';
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import Home from './Components/Main';
import About from './Pages/About';
import Contact from './Pages/Contact';
import StoryMode from './Components/StoryMode/StoryMode';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path='/About' component={About}/>
      <Route path='/Contact' component={Contact}/>
      <Route path='/Storymode' component={StoryMode}></Route>
      <Route path='/:modelname' render={(routeProps)=>{return <Main routeProps={routeProps}/>}}/>
      <Route path='/' component={Home} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
