import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import icon from '../../images/login1.jpg'

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
        <div className="hero w-full my-20 ">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">

                <img src={icon} alt="" />
                <div className='flex items-center justify-center w-full'>
                <button onClick={handleGoogleSignIn}  className="btn btn-success  px-10 font-semibold text-white py-3 m-5">Sign In With Google</button>
                </div>
            </div>
            <div className="card  w-full  shadow-2xl bg-base-100">
                <h1 className="text-5xl font-bold text-center pt-4">Sign In!</h1>
                <form onSubmit={handleSubmit(handleLogIn)} className="card-body">
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: "Email Address is required" })}  type="email"  placeholder="email" className="input input-bordered" />
                            {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: "Email Address is required" })}  type="password"  placeholder="password" className="input input-bordered" />
                            {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-pink-600 w-full" type="submit" value="Log In" />

                        </div>
                    </form>
                <p className='text-center mb-6'>New to BeautySwap ? <Link className='font-bold text-orange-600 ' to='/signup'>Sign Up</Link> </p>
            </div>
        </div>
    </div>
    );
};

export default Login;