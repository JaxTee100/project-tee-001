import React, {useState} from 'react'
import {PiShoppingCartSimple} from 'react-icons/pi'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Logo from '../../assets/navbar/honda-group.png'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showDrop, setShowDrop] = useState(false)

  const handleNav = () => {
    setNav(!nav);
  };

  const showDropdown = () => {
    setShowDrop(!showDrop);
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1920px] mx-auto px-4 xl:py-[16px] xl:px-[120px]  border-2' >
      
      <div className='flex items-center'>
        <div onClick={handleNav} className='block xl:hidden me-[10px]'>
            {nav ? <AiOutlineClose className='text-slate-800' size={20}/> : <AiOutlineMenu className='text-slate-800' size={20} />}
        </div>
        <div className='flex w-[150.67px] h-[24px] md:w-[264px] md-h-[30px]  justify-between items-center'>
          <img src={Logo} alt='my-logo' />
          <p className='hidden md:flex lg:text-[14px] text-[#1e293b] md:text-[12px]'>Northern Honda</p>       
        </div>
      </div>
      
     
      <ul className={nav ? 'fixed left-0 top-24 w-[60%] h-full border-r border-r-gray-200 bg-[#fff] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        
          <li className='p-4 border-b border-gray-200 text-slate-800 hover:bg-slate-100'><NavLink to='/' className={ ({isActive}) =>` ${isActive ? 'border-b-2 border-red-500  font-semibold text-red-500 ' : ''}`}>Home</NavLink></li>
          <li className='p-4 border-b border-gray-200 text-slate-800 hover:bg-slate-100'><NavLink to='/tires' className={ ({isActive}) =>` ${isActive ? 'border-b-2 border-red-500  font-semibold text-red-500 ' : ''}`}>Tires</NavLink></li>
          <li className='p-4 border-b border-gray-200 text-slate-800 hover:bg-slate-100'><NavLink to='/wheels' className={ ({isActive}) =>` ${isActive ? 'border-b-2 border-red-500  font-semibold text-red-500 ' : ''}`}>Wheels</NavLink></li>
          <li className='p-4 border-b border-gray-200 text-slate-800 hover:bg-slate-100'><NavLink to='/accessories' className={ ({isActive}) =>` ${isActive ? 'border-b-2 border-red-500  font-semibold text-red-500 ' : ''}`}>Accessories</NavLink></li>
          <li className='p-4 border-b border-gray-200 text-slate-800 hover:bg-slate-100'><NavLink to='/contacts' className={ ({isActive}) =>` ${isActive ? 'border-b-2 border-red-500  font-semibold text-red-500 ' : ''}`}>Contact Us</NavLink></li>
      </ul>
      
      <ul className='hidden w-[598px] h-[51px] xl:flex justify-between text-[#1e293b] '>
        <li className='p-4 hover:bg-slate-100'><NavLink to='/' className={ ({isActive}) =>` ${isActive ? 'border-b-2 border-red-500 font-semibold text-red-500' : ''}`}>Home</NavLink></li>
        <li className='p-4 hover:bg-slate-100'><NavLink to='/tires' className={ ({isActive}) =>` ${isActive ? 'border-b-2 border-red-500  font-semibold text-red-500' : ''}`}>Tires</NavLink></li>
        <li className='p-4 hover:bg-slate-100'><NavLink to='/wheels' className={ ({isActive}) =>` ${isActive ? 'border-b-2 border-red-500  font-semibold text-red-500' : ''}`}>Wheels</NavLink></li>
        <li className='p-4 hover:bg-slate-100'><NavLink to='/accessories'className={ ({isActive}) =>` ${isActive ? 'border-b-2 border-red-500  font-semibold text-red-500' : ''}`}>Accessories</NavLink></li>
        <li className='p-4 hover:bg-slate-100'><NavLink to='/contacts' className={ ({isActive}) =>` ${isActive ? 'border-b-2 border-red-500  font-semibold text-red-500' : ''}`}>Contact Us</NavLink></li>
      </ul>


      <div className='flex w-[112px] h-[34px] md:w-[264px] md:h-[41px]  justify-end items-center   ml-[0]'>
         <button onClick={showDropdown} className='relative flex items-center justify-center w-[68px] h-[34px] md:w-[82px] md:h-[41px] bg-[#ea0029] rounded-[39.38px] text-[white] text-[14px] py-[10px] px-[20]'>
             Sign In
         </button>
         { showDrop && 
         <div className='absolute bg-white border top-[95px] right-1 lg:top-[100px] lg:right-[150px] lg:w-[251px] h-[280px] rounded-md shadow-md'>
          <p className='h-[56px] px-[24px] py-[16px]  hover:bg-slate-100 text-slate-700'>Leads</p>
          <p className='h-[56px] px-[24px] py-[16px] hover:bg-slate-100 text-slate-700'>Quotes & Orders</p>
          <p className='h-[56px] px-[24px] py-[16px] hover:bg-slate-100 text-slate-700'>CMS</p>
          <p className='h-[56px] px-[24px] py-[16px] hover:bg-slate-100 text-slate-700'>Logout</p>
          <p className='h-[56px] px-[24px] py-[16px] hover:bg-slate-100 text-slate-700'>Francais</p>
         </div>
          }
         <div className='flex  items-center  w-[40px] h-[40px] ml-[10px] '>
             <PiShoppingCartSimple size={25} className=''/>
             <div className='mb-[9px] lg:mb-[14px] w-[15px] md:w-[20px]  md:h-[20px] h-[15px] text-[10px] md:text-[12px] bg-[#ea0029] text-white rounded-[50%] flex items-center justify-center'>03</div>
         </div>
       </div>
    </div>
  );
};

export default Navbar;


