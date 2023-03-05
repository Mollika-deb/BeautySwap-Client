import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import image from '../../images/sign1.avif'

const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate()


const handleSignup = event =>{
    event.preventDefault()

    const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)

            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/login')

            })
            .catch(error => console.log(error))
    }



    return (
        <div className="hero ">
        <div className="hero-content grid md:grid-cols-2  flex-col lg:flex-row mt-32 h-max">
          <div className="text-center max-w-lg lg:text-left">
           
          <img id="" src={image} alt="" className="rounded-3xl mr-16" style={{ height:'500px'  }}/>
          
          </div>
          <div className="card  max-w-lg shadow-2xl bg-base-100 ml-16" >
          <h1 className="text-5xl font-bold text-center" style={{ fontFamily: 'Oleo Script', color:'#8DB255'  }}>Sign Up now!</h1>
            <form onSubmit={handleSignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-2xl">Name</span>
                </label>
                <input type="text"  placeholder="Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-2xl">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-2xl">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
               
              </div>
              <div className="form-control mt-6">
                <input className="btn  bg-emerald-600" Type="submit" value="Sign Up"/>
                
              </div>
            </form>
            <p className=" font-semibold text-center text-xl pb-4">New to BeautySwap? please <Link className='text-green-700 font-bold' to='/login'>Sign In!</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;