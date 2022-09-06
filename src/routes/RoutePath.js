import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Nav from '../layout/Nav'
import Login from '../pages/Login/Login'
import { RouteData } from './RouteData'

export const RoutePath = () => {
  return (
    
    <Routes>
       <Route path='/login' element={<Nav />}>
                {
                    <Route path={""} element={<Login/>} />
                }
            </Route>
      <Route path='/' element={<MainLayout />}>
          {
            RouteData.length >0 && RouteData.map((v,i) => (
              <Route key={`RouteData_${i}`} path={v.path} element={v.element} />
            ))
          }
      </Route>
    </Routes>
  )
}