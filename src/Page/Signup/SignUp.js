import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import image from '../../images/sign1.avif'

const SignUp = () => {

    
    const navigate = useNavigate()

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [createUserEmail, setCreateUserEmail] = useState('');

    


    const handleSignUp = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success("signed up successfully");

           
            
            const userInfo = {
                displayName : data.name

            }
            
            updateUser(userInfo)
            .then(()=>{
                saveBuyer(data.name, data.email, data.buyerRole)
                saveSeller(data.name, data.email, data.sallerRole)
               
            })
            .catch(error => console.error(error))
            
        })
        .catch(error => console.error(error))
    
        
    }

    const saveBuyer = (name, email, buyerRole)=>{
        const user = {name, email, buyerRole};
        fetch('http://localhost:5000/buyer',{
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
    const saveSeller = (name, email, sallerRole)=>{
        const user = {name, email, sallerRole};
        fetch('http://localhost:5000/buyer',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/');
                
               
            })
    }


    // const handleSignup = event => {
    //     event.preventDefault()

    //     const form = event.target;
    //     const name= form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;


    //     createUser(email, password)

    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             form.reset();
    //             handleUpdateUsrProfile(name,)
    //             navigate('/login')

    //         })
    //         .catch(error => console.log(error))


            
    // }

    // const handleUpdateUsrProfile = (name, photoURL) =>{
    //     const profile = {
    //         displayName: name,
    //         photoURL: photoURL

    //     }
    //     updateUserPofile(profile)
    //     .then(() =>{})
    //     .then(err => console.error(err))
    // }

    



    return (
        <div className="hero ">
            <div className="hero-content grid md:grid-cols-2  flex-col lg:flex-row mt-32 h-max">
                <div className="text-center max-w-lg lg:text-left">

                    <img id="" src={image} alt="" className="rounded-3xl mr-16" style={{ height: '500px' }} />

                </div>
                <div className="card  max-w-lg shadow-2xl bg-base-100 ml-16" >
                    <h1 className="text-5xl font-bold text-center" style={{ fontFamily: 'Oleo Script', color: '#8DB255' }}>Sign Up now!</h1>
                    <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: "name is required" })} type="text" placeholder="email" className="input input-bordered" />
                            {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: "Email Address is required" })} type="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: "password Address is required" })} type="password" placeholder="password" className="input input-bordered" />
                            {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Buyer role</span>
                            </label>
                            <input {...register("buyerRole")} type="text" placeholder="type buyer if you are a buyer" className="input input-bordered" />
                            {errors.buyerRole && <p className='text-red-600' role="alert">{errors.buyerRole?.message}</p>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller role</span>
                            </label>
                            <input {...register("sallerRole")} type="text" placeholder="type seller if you are a seller" className="input input-bordered" />
                            {errors.sallerRole && <p className='text-red-600' role="alert">{errors.sallerRole?.message}</p>}

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-pink-600 w-full" type="submit" value="SignIn" />

                        </div>
                    </form>
                    <p className=" font-semibold text-center text-xl pb-4">New to BeautySwap? please <Link className='text-green-700 font-bold' to='/login'>Sign In!</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;