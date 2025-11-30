import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <nav className='  bg-orange-300 flex justify-center items-center p-5 gap-2 text-xl text-gray-500 font-medium fixed top-0 left-0 right-0 '>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </nav>
  )
}
