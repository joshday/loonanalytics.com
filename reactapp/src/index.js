import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';

// Layout
import Nav from './layout/Nav'
import Footer from './layout/Footer'

// routes
import loadable from '@loadable/component'
import Home from './routes/Home'
const Search = loadable(() => import('./routes/Search'))

//-----------------------------------------------------------------------------// render
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      
      <div className="App">
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
        </Switch>

        <Footer />
      </div>

    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
);
