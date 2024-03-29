import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className="nav-list">
            <Link href="/"><li className="list-item">Home</li></Link>
            <Link href="/about"><li className="list-item">About</li></Link>
            <Link href="/skills"><li className="list-item">Skills</li></Link>
            <Link href="/education"><li className="list-item">Education</li></Link>
            <Link href="/contact"><li className="list-item">Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar
