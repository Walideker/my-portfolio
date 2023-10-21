import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/nav'
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';


function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="">
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App


