import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Products from './components/Products'

const routes = [
  { name: 'Home', href: '/', element: <Home /> },
  { name: 'Products', href: '/products', element: <Products />}
]

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav routes={routes}/>
        <Routes>
          {routes.map(r => (
            <Route key={r.name} path={r.href} element={r.element} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
