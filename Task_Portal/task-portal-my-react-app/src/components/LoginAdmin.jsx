import { Form , Outlet, useNavigate } from "react-router-dom"
import { useState } from "react"
import Lottie from "lottie-react"   
import animationData from "./Unknownani2.json"

import { MailOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Input } from 'antd'; // Import Ant Design form components


// /* Password Hide and show */

// import { Icon } from "react-icons-kit";
// import { eyeOff } from "./react-icons-kit/src/feather/eyeOff";
// import { eye } from "./react-icons-kit/src/feather/eye";


const LoginAdmin = () => {

    const navigate = useNavigate()


    const handleClickSignin = () => {
        navigate('/admin/signinadmin')
    }

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[errors,setErrors] = useState({})

    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault()

        let err = {}
        
        /* if(title === ' ' || amount === 0){
            alert('Please enter valid title and amount')
            return
        } */

        /*  const email1 = /^[^\s@] + @[^\s@] + \.[^\s@] {2,6}$/
        const password1 = /^(?=.*\d) (?=.*[a-z]) (?=.*[A-Z]) [a-zA-Z0-9] {8,}$ /   */

        if(!email)
        {
            err.email = '*Please enter your Email.'
        }
    
        if (password.length <= 7){
            err.password = '*Password should be atleast 8 characters long.'
        }

        if (Object.keys(err).length > 0 ) {
            setErrors({ ...err})
            return
        } else {
            navigate('/admin/adminpage')
            return
        }

    }

    const handleEmailChange = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
        setErrors({ ...errors, email: '' })
    }

    const handlePasswordChange = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
        setErrors({ ...errors, password: '' })
    }

    // const handleTogglePasswordVisibility = () => {
    //     setShowPassword(!showPassword);
    // }
    
   

    return(
        <>   
            <div className="ALoginandanimationimage">

                <div className="wholeformALogin"> 

                    <h1 className="login"> Login </h1>

                    <form className="login-page" onSubmit={handleSubmit} >

                            <div className="input-container">  
                                    <label htmlFor="email"> Email <div className="requiredstar"> * </div>   </label> 
                                    <Input  className="inputemail"
                                            type="email" 
                                            id="email" 
                                            value={email} 
                                            onChange={handleEmailChange} 
                                            suffix={<MailOutlined />}
                                            style={{fontFamily: "cursive"}} 
                                    />   
                                    {errors.email ? <div className="error"> {errors.email} </div> : null }
                                
                            </div>  


                        {/************************** Password eyeicon **************** */}
                       
                        <div className="input-container"> 
                            <label htmlFor="password"> Password <div className="requiredstar"> * </div>  </label> 
                            <Input.Password className="inputpassword"
                                            type={showPassword ? "text" : "password"} 
                                            id="password" 
                                            value={password} 
                                            onChange={handlePasswordChange} 
                                            iconRender={visible => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                                            style={{fontFamily: "cursive !important"}}
                            /> 
                            {errors.password? <div className="error"> {errors.password} </div> : null }
                        </div>
                        
                        {/************************** Password eyeicon **************** */}


                        <div className="loginonly"> 
                            <button type="submit" className="loginButtton" >   Login    </button>
                        </div>

                        <div className="signinonly"> 
                            <div className="noaccount"> <div className="requiredstar"> * </div>Don't have an account? Create an account </div>
                            <button type="submit" className="signinButtonAdmin" onClick={handleClickSignin}>   Sign In  </button>
                        </div>
                    </form>
                </div>

                    <div className="animationimageAlogin"> <Lottie style={{marginLeft: 20, paddingRight: 100, width: 500, height: 500}} animationData={animationData} /> </div>

            </div>
        </>
    )
}
export default LoginAdmin