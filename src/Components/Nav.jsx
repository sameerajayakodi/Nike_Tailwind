
import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='absolute z-10 w-full py-8 padding-x'>
      <nav className='flex items-center justify-between max-container'>
        <a href="/">
        <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className='flex items-center justify-center flex-1 gap-16 max-lg:hidden'>
          {navLinks.map((item)=>(
            <li key={item.label} >
              <a href={item.href} className='text-lg leading-normal font-montserrat text-slate-gray'>{item.label}</a>
            </li>

          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav