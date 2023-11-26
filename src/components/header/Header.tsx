import headerStyle from './header.module.css';
import { FaBook } from "react-icons/fa";

function Header() {
  return (
    <header className={headerStyle.header}>
      <h1>
        <FaBook />
      </h1>
    </header>
  )
}

export default Header;