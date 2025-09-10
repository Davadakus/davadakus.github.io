import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import './Pages/index.css'
import Error from './Pages/Error.tsx'
import MainMenu from './Pages/MainMenu'
import TestPage from './Pages/TestPage';
import Contact from './Pages/Contact.tsx';

const router = createBrowserRouter([
{
  path: '/',
  element: <MainMenu />,
  errorElement: <Error />
},
{
  path: '/Test',
  element: <TestPage />
},
{
  path: '/contact',
  element: <Contact />
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
