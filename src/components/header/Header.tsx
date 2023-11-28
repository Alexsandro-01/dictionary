import headerStyle from './header.module.css';
import { FaBook } from 'react-icons/fa';

function Header() {
  return (
    <header className={headerStyle.header}>
      <div>
        <h1>
          <FaBook />
        </h1>
      </div>
    </header>
  );
}

export default Header;