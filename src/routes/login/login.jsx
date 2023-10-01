import './Login.scss'
import login from "../../images/login.svg"
import {FiEye, FiEyeOff} from "react-icons/fi";
import {useState, useRef} from "react";
import {instance} from "../../api/axios";
import {AiOutlineLoading} from "react-icons/ai";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";


const  Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isPasswordOpen, setIsPasswordOpen] = useState(false)
  const [isLoding, setIsLoding] = useState(false)
  const form = useRef();

  function loginUser(e) {
    e.preventDefault();
    setIsLoding(true);
    instance.post('/auth/login', {
      username,
      password
    }
    ). then(response => {
      if(response.data.token) {
        localStorage.setItem("admin-auth-token", response.data.token)
        setIsLoding(false)
        toast.success(response.data.message)
        navigate("/admin");
      }
    })
      .catch(err => {
        setIsLoding(false)
        toast.error(err.response.data.message)
      })
    setUsername("")
    setPassword("")
  }

  return (
    <div className="login">
      <div className="login-main">
        <form ref={form} onSubmit={loginUser}>
          <input
            autoComplete="username"
            typeof="text" placeholder=" your username "
                 value={username}
                 required onChange={(e) => setUsername(e.target.value)}/>
          <div className="password-wrapper">
            <input
              autoComplete="current-password"
              type={isPasswordOpen ? "text" : "password"} placeholder=" your password "
                   value={password}
                   required minLength={8} onChange={(e) => setPassword(e.target.value)}/>
            {isPasswordOpen ?<FiEyeOff onClick={() =>setIsPasswordOpen(!isPasswordOpen)}/> : <FiEye onClick={() =>setIsPasswordOpen(true)}/>}
          </div>
          <button disabled={ isLoding ? true : false}>
            {isLoding &&  <AiOutlineLoading className="loading-icon"/>}
            {isLoding ? "" : "Login"}
            </button>
        </form>
      </div>
      <div className="login-image">
        <img src={login}/>
      </div>
    </div>
  )
}
export default Login