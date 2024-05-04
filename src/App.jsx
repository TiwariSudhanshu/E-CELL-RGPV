import Header from "./Components/Header/header"
import Footer from "./Components/Footer/footer"
import Home from "./Components/Home/home"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Layout"
import About from "./Components/About/about"
import Team from "./Components/Team/team"
import Contact from "./Components/Contact/contact"
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "about",
          element: <About/>
        },
        {
          path: "team",
          element: <Team/>
        },
        {
          path: "contact",
          element: <Contact/>
        }
      ]
      }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
