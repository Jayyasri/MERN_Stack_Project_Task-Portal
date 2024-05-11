import { Outlet, useNavigate } from "react-router-dom"
import { useState } from "react"
import Lottie from "lottie-react"   
import animationData from "./UserPageAnimation.json"

import { MailOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Input } from 'antd'; // Import Ant Design form components



// /* Password Hide and show */

// import { Icon } from "react-icons-kit";
// import { eyeOff } from "./react-icons-kit/src/feather/eyeOff";
// import { eye } from "./react-icons-kit/src/feather/eye";
// import { BsDisplay } from "react-icons/bs";


const LoginUser = () => {

    const navigate = useNavigate()

    const handleClickSignin = () => {
        navigate('/user/signinuser')
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

        if (!email){
            err.email = '*Please enter your Email Id.'
        }
        if (password.length <= 7){
            err.password = '*Password should be atleast 8 characters long.'
        }

        if (Object.keys(err).length > 0 ) {
            setErrors({ ...err})
            return
        } else {
            navigate('/user/userpage')
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
            <div className="ULoginandanimationimage">
                <div className="wholeformULogin"> 
                    <h1 className="login"> Login </h1>

                    <form className="login-page" onSubmit={handleSubmit} >

                        <div className="input-container"> 
                            <label htmlFor="email"> Email <div className="requiredstar"> * </div>  </label> 
                            <Input  className="inputemail"
                                            type="email" 
                                            id="email" 
                                            value={email} 
                                            onChange={handleEmailChange} 
                                            suffix={<MailOutlined />} 
                            />
                            {errors.email ? <div className="error"> {errors.email} </div> : null }
                        </div>  
                


                        <div className="input-container"> 
                            
                            <label htmlFor="password"> Password <div className="requiredstar"> * </div> </label> 
                            <Input.Password className="inputpassword"
                                            type={showPassword ? "text" : "password"} 
                                            id="password" 
                                            value={password} 
                                            onChange={handlePasswordChange} 
                                            iconRender={visible => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                            />
                            {errors.password? <div className="error"> {errors.password} </div> : null }

                        </div>


                        <div className="loginonlyUser"> 
                            <button type="submit" className="loginButtton" >   Login    </button>
                        </div>

                        <div className="signinonlyUser"> 
                            <div className="noaccount"> <div className="requiredstar"> * </div> Don't have an account? Create an account </div>
                            <button type="submit" className="signinButtonUser" onClick={handleClickSignin}>   Sign In  </button>
                        </div>
                        

                    </form>
                </div>

                    <div className="animationimageUlogin"> <Lottie style={{marginLeft: 20, paddingRight: 100, width: 500, height: 500}} animationData={animationData} /> </div>

            </div>
            
        </>
    )
}
export default LoginUser