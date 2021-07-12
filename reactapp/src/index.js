import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';

// Layout
import Nav from './layout/Nav'
import Footer from './layout/Footer'
import ScrollToTop from './layout/ScrollToTop'

// routes
import loadable from '@loadable/component'
import Home from './routes/Home/Home'
const Search = loadable(() => import('./routes/Search'))
const Products = loadable(() => import('./routes/Products'))
const About = loadable(() => import('./routes/About'))
const Resume = loadable(() => import('./routes/Resume'))
const Terms = loadable(() => import('./routes/Terms'))
const Privacy = loadable(() => import('./routes/Privacy'))
const Contact = loadable(() => import('./routes/Contact'))

//-----------------------------------------------------------------------------// render
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop />
      <div className="App">
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/tos" component={Terms} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/search" component={Search} />
        </Switch>

        <Footer />
      </div>

    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
);
