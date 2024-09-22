import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <header id="main-header">
      <nav>
        <ul>
          <li className="hover:text-orange-600 transition duration-300 ease-in-out">
            <div className="text-lg">
              <NavLink href={'/'}>Home</NavLink>
            </div>
          </li>
          <li className="hover:text-orange-600 transition duration-300 ease-in-out">
            <div className="text-lg">
              <NavLink href={'/jobs'}>Job List</NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
