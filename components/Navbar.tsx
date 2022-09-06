import Link from 'next/link'

const Navbar = () => {
  const items = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/' },
    { title: 'service', link: '/' },
  ]

  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap cursor-pointer">
              Flowbite
            </span>
          </Link>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              {items.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link}
                    className="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0"
                    aria-current="page"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
