
import React, { useContext } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const CheckOut = () => {

   const service= useLoaderData();
   const {title,_id, price,img }=service;
   const {user} = useContext(AuthContext)

   const handleCheckOut = (event) =>{
    //  console.log('Book Kor Quickly')
      event.preventDefault();
      const name= event.target.name.value;
      const date= event.target.date.value;
      const email= event.target.email.value;

      const order= {
         name,
        email,date,
        img,
        service: title,
        service_id:_id,
        price:price
      }
      console.log(order)

      fetch('http://localhost:5000/bookings' , {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
      } )
      .then(res=> res.json() )
      .then(data => {
        console.log(data)
        if(data.insertedId){
            alert('order successfully confirmed')
        }
      })
   }

    return (
        <div>
            <h2 className='text-center text-3xl'  >Book CheckOut : {title} </h2>
            
    
      <form  onSubmit={handleCheckOut}  className="card-body grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" defaultValue={user?. displayName} name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" placeholder="date" name="date" className="input input-bordered" required />
         
        </div>
   
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" placeholder="price" defaultValue={ '$'+ price} name="amount" className="input input-bordered" required />
        </div>

        <div className="form-control  mt-6">
          
          <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
        </div>
      </form>
    </div>
  


        
    );
};

export default CheckOut;