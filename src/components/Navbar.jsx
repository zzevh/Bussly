import Logo1 from '../assets/Logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Zablokuj przewijanie
    } else {
      document.body.style.overflow = 'unset'; // Przywróć przewijanie
    }

    return () => {
      document.body.style.overflow = 'unset'; // Przywróć przewijanie przy odmontowywaniu
    };
  }, [isOpen]);

  return (
    <header className='mb-15 flex justify-between items-center text-center px-10 p-4 md:px-32'>
      <a href="#">
        <img src={Logo1} alt='Black Bussly Logo'></img>
      </a>
      <ul className='hidden  lg:flex space-x-6'>
        <li className='p-4 text-white text-lg'><a className='hover:text-black transition-all ease-in-out duration-300' href="#">Home</a></li>
        <li className='p-4 text-lg'><a className='hover:text-white transition-all ease-in-out duration-300' href="#">Our Work</a></li>
        <li className='p-4 text-lg'><a className='hover:text-white transition-all ease-in-out duration-300' href="#">Our Portfolio</a></li>
        <li className='p-4 text-lg'><a className='hover:text-white transition-all ease-in-out duration-300' href="#">Our Services</a></li>
      </ul>

      <button className='hidden lg:block md:block p-4 px-10 rounded-2xl bg-black text-white cursor-pointer hover:bg-[#F6D148] hover:border hover:border-white transition-all ease-in-out duration-300'>Book a Call</button>

      <div onClick={() => setIsOpen(!isOpen)} className=' lg:hidden md:hidden cursor-pointer'>
        <FontAwesomeIcon className='text-3xl' icon={faBarsStaggered} />
      </div>

      {isOpen &&
        <div className={'fixed  bg-white top-25 left-0 flex justify-center w-full list-none text-center items-center'}>
          <li>
            <li className='p-4 text-lg'><a className='hover:text-black transition-all ease-in-out duration-300' href="#">Home</a></li>
            <li className='p-4 text-lg'><a className='hover:text-white transition-all ease-in-out duration-300' href="#">Our Work</a></li>
            <li className='p-4 text-lg'><a className='hover:text-white transition-all ease-in-out duration-300' href="#">Our Portfolio</a></li>
            <li className='p-4 text-lg'><a className='hover:text-white transition-all ease-in-out duration-300' href="#">Our Services</a></li>
          </li>
        </div>}
    </header>
  )
}

export default Navbar;