import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-centre p-3 max-w-6xl mx-auto'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-600'>Rcube</span>
            <span className='text-slate-900'>Estate</span>
        </h1>
        <form className='bg-slate-100 p-2 rounded-lg flex items-center'>
            <input className='bg-transparent focus:outline-none w-24 sm:w-64' type="text" placeholder='Search...'/>
            <FaSearch className='text-slate-600'/>
        </form>
        <ul className='flex gap-4'>
            <Link to='/'>
                <li className='hidden sm:inline text-slate-500 hover:underline cursor-pointer '>Home</li>
            </Link>
            
            <Link to='/about'>
            <li className='hidden sm:inline text-slate-500 hover:underline cursor-pointer '>About</li>
            </Link>
            
            <Link to='/sign-in'>
            <li className='inline text-slate-500 hover:underline cursor-pointer '>SignIn</li>
            </Link>
        </ul>

        </div>
        </header>
  )
}
