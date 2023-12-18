import React, { useContext } from 'react';
import img from '../../../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../provider/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext)


    const handleRegister= (event) =>{
        event.preventDefault();
        const name= event.target.name.value;
       const email= event.target.email.value;
       const password= event.target.password.value;

       console.log (name,email,password)
       createUser(email,password)
       .then(result => {
           const user=result.user;
           console.log(user)
       } )
       .catch(error => {
          console.log(error.message)
       })
    }

    return (
        <div>
              <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="mr-12 w-1/2 ">
    <img src={img} alt="" srcset="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
      <h1 className="text-3xl text-center font-bold">Register now!</h1>

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="enter your name" name='name' className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          
          <input className="btn btn-primary" type="submit" value="Register" />
        </div>
      </form>
      <p className='pl-3 text-center my-4' >Have Any Account? <Link className='text-orange-600 font-bold' to='/login' >Please Login</Link>  </p>
    </div>

  </div>

</div>
        </div>
    );
};

export default Register;