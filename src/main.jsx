import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
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
    {/* Smooth scrolling for the whole page; anchors makes in-page links (like /#about) glide there too */}
    <ReactLenis root options={{ anchors: true }} />
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
