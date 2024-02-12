import React from 'react';
import { NavLink } from "react-router-dom";

export default function NavBar() {
  // console.log(isActive);
  return (
    <nav className='h-14 flex items-center border-solid border-b-2 border-second-color'>
      <div className='container mx-auto flex justify-between'>
        <NavLink to="/">
          <h3 className="text-2xl font-black text-second-color m-0">Michi Travel</h3>
        </NavLink>

        <div className="flex items-center">
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