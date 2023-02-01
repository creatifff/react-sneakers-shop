import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router/router'
import { RouterProvider } from 'react-router-dom'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Suspense fallback={<h2>loading...</h2>}>
    <RouterProvider router={router}/>
  </React.Suspense>
)
