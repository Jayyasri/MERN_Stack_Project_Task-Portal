import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Admin from "./components/Admin"
import User from "./components/User"
import Frontpage from "./components/Frontpage"
import LoginAdmin from "./components/LoginAdmin"
import SigninAdmin from "./components/SigninAdmin"
import AdminPage from "./components/AdminPage"
import UserPage from "./components/UserPage"
import LoginUser from "./components/LoginUser"
import SigninUser from "./components/SiginUser"
import NewPage from "./components/NewPage"


const App = () => {

  const router = createBrowserRouter([ // We pass a array objects here.
  
    /* path: "/",
    children: [
      { path: "/", element: <Login /> },
      { path: "/home", element: <Home /> },
      { path: "/signin", element: <SignIn /> }
    ]*/
    
    //   we need to display the header in all the pages, so we need to give children and give the paths and in the header.jsx, we give outlet below <Header />, as we header to display first and the about and contact.
      {
        path: "/",
        children: [
          { path: "/", element: <Frontpage /> },
          { path: "/admin", element: <Admin /> },
          { path: "/user", element: <User /> },
          { path: "/newpage", element: <NewPage /> },
        ]
      },
      {
        path: "/admin",
        children: [
          { path: "/admin/loginadmin", element: <LoginAdmin  /> },
          { path: "/admin/signinadmin", element: <SigninAdmin /> },
          { path: "/admin/signinadmin/loginadmin", element: <LoginAdmin /> },
          { path: "/admin/adminpage", element: <AdminPage /> }
        ]
      },
      {
        path: "/user",
        children: [
          { path: "/user/loginuser", element: <LoginUser /> },
          { path: "/user/signinuser", element: <SigninUser /> },
          { path: "/user/signinuser/loginuser", element: <LoginUser /> },
          { path: "/user/userpage", element: <UserPage /> }
        ]
      }


])


  return(
    <> 
    <RouterProvider router={router} />
  </>
  )
}
export default App