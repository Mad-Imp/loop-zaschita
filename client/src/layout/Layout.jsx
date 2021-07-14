import Header from './components/header/Header';
import {Footer} from './components/footer/Footer';

function Layout({children}) {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export {Layout}