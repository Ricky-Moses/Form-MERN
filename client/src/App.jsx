import React from 'react'
// Router
import {RouterProvider, Routes, Route, createHashRouter} from 'react-router-dom'
// Form
import Form from './pages/form'
import List from './pages/list'

const App = () => {

  const routing = createHashRouter([
    {
      path: '/',
      element: <Form />
    },
    {
      path: '/list',
      element: <List />
    }
  ])

  return (<RouterProvider router={routing}/>)
}

export default App