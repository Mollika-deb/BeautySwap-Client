import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import image from '../../images/sugnup.avif'

const SignUp = () => {


    const navigate = useNavigate()

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [createUserEmail, setCreateUserEmail] = useState('');




    const handleSignUp = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("signed up successfully");



                const userInfo = {
                    displayName: data.name

                }

                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.Role)
                        // saveSeller(data.name, data.email, data.sallerRole)

                    })
                    .catch(error => console.error(error))

            })
            .catch(error => console.error(error))


    }

    const saveUser = (name, email, Role) => {
        const user = { name, email, Role };
        fetch('https://beauty-bin-server.vercel.app/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/login');


            })
    }


   



    return (
        <div className="hero ">
            <div className="hero-content grid md:grid-cols-2  flex-col lg:flex-row mt-10 h-max">
                <div className="text-center max-w-lg lg:text-left">

                    <img id="" src={image} alt="" className="rounded-3xl mr-16" style={{ height: '500px' }} />

                </div>
                <div className="card  max-w-lg  bg-base-100 " >
                    <h1 className="text-3xl font-semibold text-center opacity-90" style={{ fontFamily: 'Oleo Script',  }}>Sign Up Now!</h1>
                    <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                        <div className="form-control">
                            
                            <input {...register("name", { required: "name is required" })} type="text" placeholder="email" className="w-[80vw] sm:w-[90vw] md:w-[90%] lg:w-[450px] bg-[#F7F7F7] rounded-[25px] px-5 sm:px-6 md:px-7 h-12 mx-auto mt-2 outline-none" />
                            {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                        </div>
                        <div className="form-control">
                            
                            <input {...register("email", { required: "Email Address is required" })} type="email" placeholder="email" className="w-[80vw] sm:w-[90vw] md:w-[90%] lg:w-[450px] bg-[#F7F7F7] rounded-[25px] px-5 sm:px-6 md:px-7 h-12 mx-auto mt-2 outline-none" />
                            {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            
                            <input {...register("password", { required: "password Address is required" })} type="password" placeholder="password" className="w-[80vw] sm:w-[90vw] md:w-[90%] lg:w-[450px] bg-[#F7F7F7] rounded-[25px] px-5 sm:px-6 md:px-7 h-12 mx-auto mt-2 outline-none" />
                            {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}

                        </div>

                       
                        <fieldset className=' border-2 rounded-md  mt-2'>

                            <legend>Select a Role:</legend>

                            <div className='flex md:flex-col justify-evenly items-center'>
                                <div>
                                    <input {...register("Role", { required: "must be select one" })} className='mx-2' type="radio" id="buyer" name="Role" value="buyer" />
                                    <label htmlFor="buyer">Buyer</label>
                                </div>

                                <div>
                                    <input {...register("Role", { required: true })} className='mx-2' type="radio" id="seller" name="Role" value="seller" />
                                    <label htmlFor="seller">Seller</label>
                                </div>
                            </div>
                            {errors.Role && <p className='text-red-500'>{errors.Role.message}</p>}

                        </fieldset>

                        <button className="w-[80vw] sm:w-[90vw] md:w-[90%] lg:w-[450px]  bg-[#f44036] transition-all ease-in-out duration-100 text-white rounded-[25px] px-5 sm:px-6 md:px-7 h-12 font-medium text-[17px] shadow-gray-400 shadow-md mt-6 mx-auto">
              Sign Up
            </button>
                    </form>
                    <p className=" font-semibold text-center text-base pb-4">New to BeautySwap? please <Link className='text-[#FF5E55] font-semibold' to='/login'>Sign In!</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;