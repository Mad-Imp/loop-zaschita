import Contacts from './components/contacts/Contacts'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'

function Header() {
    return (
        <header>
            <Contacts/>
            <Hero/>
            <Navbar/>
        </header>

    )
}

export default Header