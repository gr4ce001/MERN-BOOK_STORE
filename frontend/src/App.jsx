import React from 'react'
import { Route,Routes, } from 'react-router-dom'
import {Home} from './pages/Home.jsx'
import {Editbook} from './pages/Editbook.jsx'
import {Deletebook} from './pages/Deletebook.jsx'
import {ShowBook} from './pages/ShowBook.jsx'
import {Createbook} from './pages/Createbook.jsx'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<Createbook/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path='/books/edit/:id' element={<Editbook/>}/>
      <Route path='/books/delete/:id' element={<Deletebook/>} />
    </Routes>
  )
}

export default App