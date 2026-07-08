import "./Login.css";
import { useForm } from "react-hook-form";
import type { LoginRequest } from "../interfaces/LoginRequest";
import { serviceLogin } from "../services/AuthService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify/unstyled";


function Login() {

  const { register, handleSubmit, reset } = useForm<LoginRequest>();

 const onSubmitLogics = async (data:LoginRequest) => {
      try {
            const response = await serviceLogin(data);
            toast.success("Login Successful 🎉")
            console.log(response);
            reset();
        } catch (error) {
            console.log(error);
            toast.error("Invalid Credentials")
        }
  };

  return (
    <div className="login-page">

<div className="login-card">

<h1>Welcome Back 👋</h1>

<p>

Login to continue shopping

</p>

<form onSubmit={handleSubmit(onSubmitLogics)}>

      <input

className="login-input"
        type="email"
        {...register("email")}
        placeholder="Email"
      />

      <br /><br />


      <input

className="login-input"
        type="password"
        {...register("password")}
        placeholder="Password"
      />

      <br /><br />


      <button

className="login-btn"

type="submit">Login</button>

      <br /><br />

      <p className="register-link">

Don't have an account? <Link to={"/register"}>Register</Link>
      </p>

    </form>
    </div>

</div>
  );
}

export default Login;