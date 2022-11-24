import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import logo from '../../assets/images/login/login.png';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (data) => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password, data.category)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
                toast.success("Successfully login");
            })
            .catch(() => {
                toast("Login Failed!");
            })
    }

    return (
        <div className='lg:flex justify-center my-8'>
            <div>
                <img className='h-3/4' src={logo} alt="img" />
            </div>
            <div className='p-8 h-3/4 shadow-2xl'>
                <h2 className='text-3xl text-center font-bold'>Login</h2>
                <form onSubmit={handleSubmit((handleLogin))}>

                    {/* email field ---------------------------------------- */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    {/* password field ------------------------------------ */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    {/* dropdown selected user position */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Users</span></label>
                        <select className="input input-bordered w-full max-w-xs" {...register("category", { required: "Category is required" })}>
                            <option value="">Select Your Account Category</option>
                            <option value="User Account">User Account</option>
                            <option value="Seller Account">Seller Account</option>
                        </select>
                        {errors.category && <p className='text-red-600'>{errors.category?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-6' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='text-center mt-5'>New User? <Link className='text-secondary font-semibold' to="/signup">Create an Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};
export default Login;