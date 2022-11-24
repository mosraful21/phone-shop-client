import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/login/signup.png';
import { AuthContext } from '../../context/AuthProvider';


const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');


    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password, data.category)
            .then(() => {
                toast.success("User Create Successfully");
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(error => console.log(error));
            })
            .catch(error => {
                setSignUpError(error.message)
            });
    }



    return (
        <div className='lg:flex justify-center my-8'>
            <div>
                <img className='h-3/4' src={logo} alt="img" />
            </div>
            <div className='p-8 h-3/4 shadow-2xl'>
                <h2 className='text-3xl text-center font-bold'>Sign Up</h2>
                <form onSubmit={handleSubmit((handleSignUp))}>

                    {/* Name field ---------------------------------------- */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text"
                            {...register("name", {
                                required: "Name is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

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
                        <select type="category" className="input input-bordered w-full max-w-xs" {...register("category", { required: "Category is required" })}>
                            <option value="Account Category">Account Category</option>
                            <option value="User Account">User Account</option>
                            <option value="Seller Account">Seller Account</option>
                        </select>
                        {errors.category && <p className='text-red-600'>{errors.category?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-6' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p className='text-center mt-5'>Already have an Account? <Link className='text-secondary font-semibold' to="/login">Login Here</Link></p>
            </div>
        </div>
    );
};

export default SignUp;