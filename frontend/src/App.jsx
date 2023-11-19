import React from 'react'
import { Route,Routes,Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Editbook from './pages/Editbook.jsx'
import Deletebook from './pages/Deletebook.jsx'
import ShowBook from './pages/ShowBook.jsx'
import Createbook from './pages/Createbook.jsx'
import Navbar from './components/NavbarCom.jsx'
import NavbarCom from './components/NavbarCom.jsx'


const App = () => {
  return (
    <>
    <NavbarCom/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/books/create' element={<Createbook/>}/>
      <Route exact path='/books/details/:id' element={<ShowBook/>}/>
      <Route exact path='/books/edit/:id' element={<Editbook/>}/>
      <Route exact path='/books/delete/:id' element={<Deletebook/>} />
    </Routes>
    </>
  )
}

export default App