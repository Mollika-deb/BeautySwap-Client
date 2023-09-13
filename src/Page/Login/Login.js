import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import icon from '../../images/login1.jpg'
import img from '../../images/logIn.avif'
import {BsApple, BsFacebook} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'

const Login = () => {

    // const { signIn, googleProviderLogIn } = useContext(AuthContext)

    // const navigate = useNavigate()
    // const location = useLocation()
    // const from = location.state?.from?.pathname || '/'



    // const googleProvider = new GoogleAuthProvider();

    // const handleGoogleSignIn = () => {
    //     googleProviderLogIn(googleProvider)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);

    //         })
    //         .catch(error => console.log(error));
    // };

    // const handleLogin = (event) => {
    //     event.preventDefault();

    //     const form = event.target;
    //     const email = form.email.value;
    //     const name = form.name.value;
    //     const password = form.password.value;


    //     signIn(email, password)

    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             form.reset();
    //             navigate(from, {replace: true})
    //         })
    //         .catch(error => console.log(error))

    // }



    const { register, formState: { errors }, handleSubmit} = useForm();
    const { signIn, googleProviderLogIn } = useContext(AuthContext);
    const [loginUserEmail, setLoginUserEmail ] = useState('');
  

    const navigate = useNavigate()
    const location = useLocation()
    // const from = location.state?.from?.pathname || '/'

  
    

    const handleLogIn = data =>{
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
                setLoginUserEmail(data.email);
               
               
            })
            .catch(error => console.error(error))

    }

    



    const googleProvider = new GoogleAuthProvider();;

    const handleGoogleSignIn = () => {
        googleProviderLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => console.log(error));
    };

    

    return (
        <div className="hero w-full my-10 overflow-hidden">
        <div className="hero-content flex items-center">
            <div className="text-center lg:text-left">

                <img src={img} className='hidden md:block w-[35vw] max-w-[500px]'  alt="" />
                {/* <div className='flex items-center justify-center w-full'>
                <button onClick={handleGoogleSignIn}  className="btn btn-success  px-10 font-semibold text-white py-3 m-5">Sign In With Google</button>
                </div> */}
            </div>
            <div className="card  w-full   bg-base-100">
                <h1 className="text-3xl font-semibold text-center opacity-90">Sign In!</h1>
                <form onSubmit={handleSubmit(handleLogIn)} className="card-body">
                        
                        <div className="form-control">
                          
                            <input {...register("email", { required: "Email Address is required" })}  type="email"  placeholder="email" className="w-[80vw] sm:w-[90vw] md:w-[90%] lg:w-[450px] bg-[#F7F7F7] rounded-[25px] px-5 sm:px-6 md:px-7 h-12 mx-auto mt-6 outline-none" />
                            {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            
                            <input {...register("password", { required: "Email Address is required" })}  type="password"  placeholder="password" className="w-[80vw] sm:w-[90vw] md:w-[90%] lg:w-[450px] bg-[#F7F7F7] rounded-[25px] px-5 sm:px-6 md:px-7 h-12 mx-auto mt-3 outline-none" />
                            {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}

                        </div>
                        <button className="w-[80vw] sm:w-[90vw] md:w-[90%] lg:w-[450px]  bg-[#f44036] transition-all ease-in-out duration-100 text-white rounded-[25px] px-5 sm:px-6 md:px-7 h-12 font-medium text-[17px] shadow-gray-400 shadow-md mt-6 mx-auto">
              Sign In
            </button>
                    </form>

                    <p className="text-[#242424] text-xl font-medium text-center mb-8">
              Sign in with
            </p>

            <div className="flex justify-center items-center gap-6 mb-[50px]">
              <BsApple className="w-5 h-5 cursor-pointer" />
              <BsFacebook
              
                className="w-5 h-5 text-blue-500 cursor-pointer"
              />
              <FcGoogle
                onClick={handleGoogleSignIn}
                className="w-6 h-6  cursor-pointer"
              />
            </div>

                <p className='font-semibold text-center text-base pb-4'>New to BeautySwap ? <Link className='text-[#FF5E55] font-semibold ' to='/signup'>Sign Up</Link> </p>
            </div>
        </div>
    </div>
    );
};

export default Login;