import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <header id="main-header">
      <nav>
        <ul>
          <li>
            <NavLink href={'/'}>Home</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}