import { Outlet, useNavigate } from "react-router-dom"
import Lottie from "lottie-react"   
import animationData from "./TaskAnimation2.json"


const Frontpage = () => {

    const navigate = useNavigate()

    const handleClickAdmin = () => {
        navigate('/admin')
    }
    const handleClickUser = () => {
        navigate('/user')
    }
        
    
    return(
    <>
       

        <div className="frontpage"> 

        <div className="welcomeandanimation"> 

            
            <div className="welcomeandbuttons"> 
            <h1 className="taskportal"> TASK PORTAL </h1>
            <h1 className="welcome">   Welcome Back!  </h1>
            
            <div className="frontbuttons"> 
                <button type="submit" className="admin" onClick={handleClickAdmin}> Admin </button>
                <button type="submit" className="user" onClick={handleClickUser}> User </button>
            </div>
            </div>

            <div> <Lottie style={{marginLeft: 20, paddingRight: 100, width: 500, height: 500}} animationData={animationData} /> </div>
        
        </div>
        
        </div>

    </>

    )
}
export default Frontpage