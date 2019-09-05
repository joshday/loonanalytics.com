import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MyNavBar from './components/MyNavBar'
import ScrollToTop from './components/ScrollToTop'
import Home from './components/Home'
import Products from './components/Products'
import Services from './components/Services'
import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <div className="App">
          <ScrollToTop>
            <MyNavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/products" component={Products} />
              <Route path="*" component={NotFound} />
            </Switch>
          </ScrollToTop>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
