import {  useContext } from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/registor";
import "./styles.scss"
import { BrowserRouter,Navigate,Route,Routes } from "react-router-dom";
import { AuthContext } from "./context/Authcontext";



 function App(){

  const {currentUser}=useContext(AuthContext)
 const ProtectedRoute = ({children})=>{
  if(!currentUser){
    return <Navigate to="/login"/>
  }
  return children
 };

  return(
    <BrowserRouter>
    <Routes>

<Route index element={<ProtectedRoute>
  <Home/>
</ProtectedRoute>}/>
<Route path="login" element={<Login/>}/>
<Route path="registor" element={<Register/>}/>

    </Routes>
    
    </BrowserRouter>
  )
 }
 export default App ;