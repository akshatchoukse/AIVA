import React, { useContext, useState } from 'react'
import {useNavigate} from "react-router-dom"
import bgimg from "../assets/authBg.png"
import {IoEye} from "react-icons/io5"
import { userDataContext } from '../context/userContext'
import axios from "axios"
function Signup() {
  const navigate = useNavigate()
  const [showPassword,setShowPassword] = useState(false)
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const {serverUrl} = useContext(userDataContext)
  const handleSignup=async()=>{
    try {
      let result = await axios.post(`${serverUrl}/api/auth/signup`,{
        name,email,password
      },{withCredentials:true})
      console.log(result.data)
    } catch (error) {
      
    }
  }
  return (
    <div className='w-full h-[100vh] bg-cover flex items-center justify-center' style={{backgroundImage:`url(${bgimg})`}}>
      <form className='w-[70%] h-[450px] max-w-[400px] bg-[#00000069] backdrop-blur shadow-lg shadow-black flex flex-col items-center justify-center gap-[20px] px-[15px]'>
        <h1 className='text-white text-[25px] mb-[25px] font-semibold'>Register to <span className='text-[#fc2686]'>AIVA</span></h1>
        <input type='text' placeholder='Enter Your Name' className='w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-400 px-[15px] py-[13px] rounded text-[17px]' required value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input type='email' placeholder='Enter Your Email' className='w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-400 px-[15px] py-[13px] rounded text-[17px]' required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <div className='w-full h-[60px] border-2 bg-transparent border-white text-white text-[18px] relative rounded'>
        <input type={showPassword?"text":"password"} required value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Your Password' className='w-full h-[60px] outline-none bg-transparent text-white placeholder-gray-400 px-[15px] py-[13px] rounded text-[17px]'/>
        <IoEye onClick={()=>setShowPassword(!showPassword)} className='absolute cursor-pointer top-[20px] right-[15px] text-white'/> 
      </div>
      <button className='w-full h-[40px] bg-white rounded font-semibold text-[19px]'>Sign Up</button>
      <p className='text-white'>Already have an Account ? <span className='text-[#fc2686]  cursor-pointer' onClick={()=>navigate("/signin")}>Sign In</span></p>
      </form>
    </div>
  )
}

export default Signup