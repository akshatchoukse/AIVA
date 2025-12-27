import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import bgimg from "../assets/authBg.png"
import { IoEye } from "react-icons/io5"
import axios from "axios"
import { userDataContext } from '../context/userContext'

function Signup() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { serverUrl } = useContext(userDataContext)
  const [err, setErr] = useState("")
const [loading,setLoading]=useState(false)
  const handleSignup = async (e) => {
    e.preventDefault()
    setErr("")
    setLoading(true)
    try {
      let result = await axios.post(
        `${serverUrl}/api/auth/signup`,
        { name, email, password },
        { withCredentials: true }
      )
      setLoading(false)
      console.log(result.data)
    } catch (error) {
      setLoading(false)
      setErr(error.response?.data?.message || "Something went wrong")
    }
  }

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <form
        onSubmit={handleSignup}
        className="w-full max-w-[420px] bg-[#00000069] backdrop-blur shadow-lg shadow-black flex flex-col items-center justify-center gap-4 sm:gap-5 px-4 sm:px-6 py-6 sm:py-8 rounded"
      >
        <h1 className="text-white text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
          Register to <span className="text-[#fc2686]">AIVA</span>
        </h1>

        <input
          type="text"
          placeholder="Enter Your Name"
          className="w-full h-[50px] sm:h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-400 px-4 rounded text-base sm:text-[17px]"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full h-[50px] sm:h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-400 px-4 rounded text-base sm:text-[17px]"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="w-full h-[50px] sm:h-[60px] border-2 bg-transparent border-white text-white relative rounded">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Your Password"
            className="w-full h-full outline-none bg-transparent text-white placeholder-gray-400 px-4 rounded text-base sm:text-[17px]"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <IoEye
            onClick={() => setShowPassword(!showPassword)}
            className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-4 text-white"
          />
        </div>

        {err.length > 0 && (
          <p className="text-red-500 text-xs sm:text-[13px] w-full text-left">
            *{err}
          </p>
        )}

        <button disabled={loading} className="w-full h-[40px] sm:h-[45px] bg-white rounded font-semibold text-lg sm:text-[19px]">
          {loading?"loading......":"Signup"}
        </button>

        <p className="text-white text-sm sm:text-base">
          Already have an Account ?{" "}
          <span
            className="text-[#fc2686] cursor-pointer"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
  )
}

export default Signup
