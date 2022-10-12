import React from 'react';
import { Link } from 'react-router-dom';

const ProtectedNavbar = () => {

  return (
    <div className='flex justify-between bg-gray-200 w-full p-4'>

      <ul>
        <li>
          <a className='text-center text-2xl font-bold' href="West">West&emsp;</a>
          <a className='text-center text-2xl font-bold' href="North">North&emsp;</a>
          <a className='text-center text-2xl font-bold' href="East">East&emsp;</a>
          <a className='text-center text-2xl font-bold' href="South">South&emsp;</a>
        </li>
      </ul>
    
    </div>
  );
};

export default ProtectedNavbar;