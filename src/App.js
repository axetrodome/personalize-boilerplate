import React from 'react';

import { Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Friends from './components/Friends';
import Messages from './components/Messages';

function App() {
  return (
    <div className="App">
     <Header />
     <div className="ui container">
       <Route exact path="/" component={Home} />
       <Route path="/friends" component={Friends} />
       <Route path="/messages" component={Messages} />
     </div>
    </div>
  );
}

export default App;
