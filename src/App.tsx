import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import Nav from './components/nav'
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import footer from './components/footer';



function App() {

  return (
    <BrowserRouter>
    <div className="">
    <Nav/>
    <Routes>
      <Route path='/home' element={<Home/>}/> 
      <Route path='/about' element={<About/>}/> 
      <Route path='/contact' element={<Contact/>}/> 
    </Routes>
    </div>
      </BrowserRouter>
  )
}

export default App
