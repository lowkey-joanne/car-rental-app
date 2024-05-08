import React from 'react'
import { Router, Route,Navigate, Routes} from 'react-router-dom'
import HomePage from '../ Pages/HomePage'
import About from '../ Pages/About'
import CarListing from '../ Pages/ CarListing'
import CarDetails from '../ Pages/CarDetails'
import Blog from '../ Pages/Blog'
import BlogDetails from '../ Pages/BlogDetails'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='./HomePage'/>}/>
        <Route path='/homepage' element={<HomePage/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/cars' element={<CarListing/>} />
        <Route path='/cars/:slug' element={<CarDetails/>} />
        <Route path='/blogs' element={<Blog/>} />
        <Route path='/blogs/:slug' element={<BlogDetails/>} />
        <Route path='/' element={<HomePage/>} />
    </Routes>
  )
}

export default Routers 