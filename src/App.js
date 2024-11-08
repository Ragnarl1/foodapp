
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
   <>
   <Router>
    <Header />
    <Navbar />
    <Routes>
      <Route path='/' element ={<Home/>} />
      {/* <Route path='/Fashion' element = {<Fashion/>} />
      <Route path='/Footware' element = {<Footware/>} />
      <Route path='/Electronics' element = {<Electronics/>} />
      <Route path='/Bags' element = {<Bags/>} />
      <Route path='/Groceries' element = {<Groceries/>} />
      <Route path='/Beauty' element = {<Beauty/>} />
      <Route path='/Shop' element = {<Shop/>} /> */}

    </Routes>
   </Router>
   
   </>
  );
}

export default App;
