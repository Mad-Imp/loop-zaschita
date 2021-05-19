// import styles from './Header.module.scss';
import Contacts from "../contacts/Contacts";
import Hero from "../hero/Hero";
import Navbar from "../navbar/Navbar";


function Header() {
  return (
      <header>
        <Contacts/>
        <Hero/>
        <Navbar/>
      </header>

  );
}

export default Header;