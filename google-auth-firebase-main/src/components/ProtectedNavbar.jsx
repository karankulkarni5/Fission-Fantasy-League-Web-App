import React from 'react';
import { Link } from 'react-router-dom';

const ProtectedNavbar = () => {

  return (
    <div className='flex justify-between bg-gray-200 w-full p-4'>

      <ul>
        <li>
          <a className='text-center text-2xl font-bold' href="WestRegister">West&emsp;</a>
          <a className='text-center text-2xl font-bold' href="NorthRegister">North&emsp;</a>
          <a className='text-center text-2xl font-bold' href="EastRegister">East&emsp;</a>
          <a className='text-center text-2xl font-bold' href="SouthRegister">South&emsp;</a>
        </li>
      </ul>
    
    </div>
  );
};

export default ProtectedNavbar;