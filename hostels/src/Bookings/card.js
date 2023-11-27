import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

export default function Card({ item }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {item.map((val) => (
          <div key={val.id} className="col-md-4 col-sm-6 card my-3 border-0">
            <div className="card-img-top text-center">
              <img src={val.img} alt="" className="w-75" />
            </div>
            <div className="card-body">
              <div className="card-title fw-bold fs-4">
                {val.name} -- {val.no}
              </div>
            </div>
            <div className='card-text'>
              {val.desc}
            </div>
            <div className='card-text'>
              {/* Use the Link component to navigate to the Login component */}
              {/* <Link to="/Booking/Login" className='btn btn-primary'>
                Book ur hostel
              </Link> */}
              <a href="/Booking/Login"><button className="btn btn-primary">Book room</button></a>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
