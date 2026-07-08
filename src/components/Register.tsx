import "./Register.css";
import type { RegisterRequest } from "../interfaces/RegisterRequest";
import { useForm } from "react-hook-form";
import { serviceRegister } from "../services/AuthService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify/unstyled";

function Register() {

  const { register, handleSubmit, reset } = useForm<RegisterRequest>();

 const onSubmitLogics = async (data:RegisterRequest) => {
      try {
            const response = await serviceRegister(data);
            toast.success("Registration Successful 🎉");
            console.log(response);
            reset();
        } catch (error) {
            console.log(error);
        }
  };

  return (
    <div className="register-page">

<div className="register-card">

<h1>Create Account 🚀</h1>

<p>Join FreshMart and start shopping today</p>

<form onSubmit={handleSubmit(onSubmitLogics)}>

      <input
className="register-input"
        type="text"
        {...register("name")}
        placeholder="Username"
      />

      <br /><br />

      <input
className="register-input"
        type="email"
        {...register("email")}
        placeholder="Email"
      />

      <br /><br />

      <input
className="register-input"
        type="number"
        {...register("phone")}
        placeholder="Phone"
      />

      <br /><br />

      <input
className="register-input"
        type="password"
        {...register("password")}
        placeholder="Password"
      />

      <br /><br />

       <select
className="register-input"
{...register("role")}
>
      <option value="ROLE_CUSTOMER">Customer</option>
      <option value="ROLE_ADMIN">Admin</option>
    </select>

      <br /><br />


      <button
className="register-btn"
type="submit">Register</button>

       <br /><br />

       <p className="login-link">
        Already have an account? <Link to={"/login"}>Login</Link>
       </p>

    </form>
    </div>

</div>
  );
}

export default Register;