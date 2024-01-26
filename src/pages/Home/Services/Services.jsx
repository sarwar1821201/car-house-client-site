import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([])
    const [asc,setAsc] =useState(true)
    const searchRef= useRef(null);
    const [search, setSearch] = useState('')

    useEffect( () =>{
        fetch(`http://localhost:5000/services?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
        .then ( res =>  res.json() )
        .then( data => setServices (data)  )
    }  , [asc,search] )

    const handleSearch = (event) =>{
      console.log(searchRef.current.value)
      setSearch(searchRef.current.value);
    }

    return (
        <div className='mt-12'>
            <div className='text-center'>
                <h3 className='text-3xl text-orange-600 ' >Our Services</h3>
                <h2 className='text-5xl' >Our Service Area</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores deserunt <br /> saepe adipisci maxime aperiam esse, facilis expedita nostrum temporibus alias.</p>

                <div className="join">
  <input className="input input-bordered join-item" ref={searchRef}  placeholder="Search Item"/>
  <button onClick={handleSearch} className="btn join-item rounded-r-full">Search</button>
</div>

                <button className='btn btn-primary ps-15 ' onClick={ ()=> setAsc(!asc) }  > {asc ? 'Price: High To Low' : 'Price: Low To High'  } </button>
            </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' >
            {
                services.map( (service) => <ServiceCard key={service._id} service={service}  > </ServiceCard>  )
            }
          </div>

        </div>
    );
};

export default Services;