import { Outlet } from 'react-router-dom';

// Components import
import ContactHeader from '../components/header/ContactHeader';
import Topnav from '../components/header/Topnav';
import Footer from '../components/footer/Footer';

function Layout() {
    return (
        <>
            <ContactHeader />
            <Topnav />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
