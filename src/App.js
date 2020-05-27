import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MyNavBar from './components/MyNavBar'
import MyFooter from './components/MyFooter'
import ScrollToTop from './components/ScrollToTop'
import Home from './components/Home'
import Projects from './components/Projects'
import Services from './components/Services'
import NotFound from './components/NotFound'
import Team from './components/Team'
import About from './components/About'


class App extends Component {
  render() {
    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <div className="App">
          <ScrollToTop>
            <header>
              <MyNavBar />
            </header>

            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/services" component={Services} />
                <Route path="/projects" component={Projects} />
                <Route path="/team" component={Team} />
                <Route path="/about" component={About} />
                <Route path="*" component={NotFound} />
              </Switch>
            </main>
            
            <MyFooter />
          </ScrollToTop>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
