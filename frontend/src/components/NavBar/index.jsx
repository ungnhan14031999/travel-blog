import React from 'react';
import { NavLink } from "react-router-dom";

export default function NavBar() {
  // console.log(isActive);
  return (
    <nav className='h-14 d-flex items-center'>
      <div className='container d-flex justify-content-between'>
        <NavLink to="/">
          <h3 className="text-2xl font-black text-second-color m-0">Michi Travel</h3>
        </NavLink>

        <div className="d-flex items-center">
          <NavLink 
            className={({ isActive, isPending }) =>
              isActive
                ? "mx-2 font-bold text-second-color"
                : "mx-2 font-bold text-black-color hover:text-second-color transition ease-in-out delay-50"
            }
            to="/home"
          >Home</NavLink>
          <NavLink 
            className={({ isActive, isPending }) =>
            isActive
              ? "mx-2 font-bold text-second-color"
              : "mx-2 font-bold text-black-color hover:text-second-color transition ease-in-out delay-50"
            }
            to="/blog"
          >Blog Page</NavLink>
          <NavLink 
            className={({ isActive, isPending }) =>
            isActive
              ? "mx-2 font-bold text-second-color"
              : "mx-2 font-bold text-black-color hover:text-second-color transition ease-in-out delay-50"
            }
            to="/destinations"
          >Destinations Page</NavLink>
        </div>
      </div>
    </nav>
  );
}