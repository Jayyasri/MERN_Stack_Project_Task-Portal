import { Outlet, useNavigate } from "react-router-dom"
import { useState } from "react"
import Lottie from "lottie-react"   
import animationData from "./UserPageAnimation.json"

// /* Password Hide and show */

// import { Icon } from "react-icons-kit";
// import { eyeOff } from "./react-icons-kit/src/feather/eyeOff";
// import { eye } from "./react-icons-kit/src/feather/eye";

import { MailOutlined, MobileOutlined, UserOutlined,  EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { Input } from 'antd'; // Import Ant Design form components


const SigninUser = () => {

    const navigate = useNavigate()

    const[name,setName] = useState('')
    const[mobileNo,setMobileNo] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[confirmpassword,setConfirmpassword] = useState('')
    const[errors,setErrors] = useState({})

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()

        let err = {}
        
        /* if(title === ' ' || amount === 0){
            alert('Please enter valid title and amount')
            return
        } */

        if(name.length < 4){
            err.name = '*Name should be atleast 4 characters long.'
        }  
        
        if (mobileNo.length != 10){
            /* setErrors({...errors, amount: 'Enter the valid Amount'})
            alert('Enter the valid amount')
            return */
            err.mobileNo = '*Please enter valid mobile number.'
        }

        if (!email){
            err.email = '*Please enter your Email Id.'
        }
        if (password.length <= 7){
            err.password = '*Password should be atleast 8 characters long.'
        }
        if(password != confirmpassword){
            err.confirmpassword = '*The password should be same as the given password.'
        }

        if (Object.keys(err).length > 0 ) {
            setErrors({ ...err})
            return
        } else {
            navigate('/user/signinuser/loginuser')
            return
        }
        
    }

    const handleNameChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
        setErrors({ ...errors, name: '' })
    }

    const handleMobileNoChange = (e) => {
        console.log(e.target.value)
        setMobileNo((e.target.value)) //parseInt is used to convert string into number
        setErrors({ ...errors, mobileNo: '' })
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

    const handleConfirmPasswordChange = (e) => {
        console.log(e.target.value)
        setConfirmpassword(e.target.value)
        setErrors({ ...errors, confirmpassword: '' })
    }

    // const handleTogglePasswordVisibility = () => {
    //     setShowPassword(!showPassword)
    // }
    
    // const handleToggleConfirmPasswordVisibility = () => {
    //     setShowConfirmPassword(!showConfirmPassword)
    // }


    return(
        <>   
            <div className="USigninandanimationimage"> 

            <div className="wholeformUSignin"> 

                <h1 className="signin"> Sign In </h1>

                <form className="signin-page"  onSubmit={handleSubmit}>

                    <div className="input-container"> 
                        <label htmlFor="name"> Name <div className="requiredstar"> * </div> </label> 
                        <Input  className="inputname"
                                    type="text" 
                                    id="name" 
                                    value={name} 
                                    onChange={handleNameChange} 
                                    suffix={<UserOutlined />} 
                        />   
                        {errors.name ? <div className="error"> {errors.name} </div> : null }
                    </div> 

                    <div className="input-container"> 
                        <label htmlFor="number"> Mobile Number <div className="requiredstar"> * </div> </label> 
                        <Input  className="inputMobileNo"
                                    type="number"
                                    id="number" 
                                    value={mobileNo} 
                                    onChange={handleMobileNoChange} 
                                    suffix={<MobileOutlined/>} 
                        />  
                        {errors.mobileNo ? <div className="error"> {errors.mobileNo} </div> : null }
                    </div> 

                    <div className="input-container"> 
                        <label htmlFor="email"> Email <div className="requiredstar"> * </div> </label> 
                        <Input  className="inputemail"
                                    type="email"
                                    id="email" 
                                    value={email} 
                                    onChange={handleEmailChange} 
                                    suffix={<MailOutlined/>} 
                        /> 
                        {errors.email ? <div className="error"> {errors.email} </div> : null }
                    </div>  



                    {/************************ Password and Confirm Password eyeicon **************** */}

            
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


                    {/************************ Password and Confirm Password eyeicon **************** */}


                    <div className="input-container"> 
                        <label htmlFor="password"> Confirm Password <div className="requiredstar"> * </div> </label> 
                        <Input.Password className="inputconfirmpassword"
                                            type={showConfirmPassword ? "text" : "password"} 
                                            id="confirmpassword" 
                                            value={confirmpassword} 
                                            onChange={handleConfirmPasswordChange} 
                                            iconRender={visible => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                        />
                        {errors.confirmpassword ? <div className="error"> {errors.confirmpassword} </div> : null }

                    </div>

                    {/************************ Password and Confirm Password eyeicon **************** */}

                    <div className="signinonly1"> 
                        <button type="submit" className="signinButton">   Sign In  </button>
                    </div>
                </form>
            </div>

                <div className="animationimageUsignin"> <Lottie style={{marginLeft: 20, paddingRight: 100, width: 500, height: 500}} animationData={animationData} /> </div>

            </div>
        </>
    )
}
export default SigninUser