import React from 'react'
// Router
import {RouterProvider, Routes, Route, createHashRouter} from 'react-router-dom'
// Form
import Form from './pages/form'
import List from './pages/list'
import View from './pages/view'

const App = () => {

  const routing = createHashRouter([
    {
      path: '/',
      element: <Form />
    },
    {
      path: '/list',
      element: <List />
    },
    {
      path: '/view',
      element: <View />
    }
  ])

  return (<RouterProvider router={routing}/>)
}

export default App