import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './Pages/index.css'
import Error from './Pages/Error.tsx'
import MainMenu from './Pages/MainMenu'
import TestPage from './Pages/TestPage';

const router = createBrowserRouter([
{
  path: '/',
  element: <MainMenu />,
  errorElement: <Error />
},
{
  path: '/Test',
  element: <TestPage />
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
