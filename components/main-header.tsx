import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <header id="main-header">
      <nav>
        <ul>
          <li>
            <div className="hover:text-orange-400 text-lg">
              <NavLink href={'/'}>Home</NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
