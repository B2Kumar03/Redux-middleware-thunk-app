import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from '../components/Navbar'
import AddToDo from '../components/AddToDo'
import UpdateToDo from '../components/UpdateToDo'
import Edit from '../components/Edit'

const AllRoute = () => {
  return (
    <>
    <Routes>
       <Route path='/' element={<Navbar/>}/>
       <Route path='/add' element={<AddToDo/>}/>
       <Route path='/update-edit/:id' element={<Edit/>}/>
    </Routes>
    </>
  )
}

export default AllRoute