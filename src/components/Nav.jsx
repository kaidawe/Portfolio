import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <ul className="flex justify-between px-8 py-4">
        <li>
          <Link className="text-white font-medium cursor-pointer" href="/">
            xHome
          </Link>
        </li>
        <li>
          <Link className="text-white font-medium cursor-pointer" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="text-white font-medium cursor-pointer" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar


