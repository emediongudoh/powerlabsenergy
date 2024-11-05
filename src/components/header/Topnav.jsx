import { useEffect, useState } from 'react';

// Third-party imports
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
import { useLocation } from 'react-router-dom';

// Custom imports
import Logo from '../common/Logo';
import { topnavLinks } from '../../constants';
import TopnavLink from './TopnavLink';
import Sidenav from '../common/Sidenav';
import Overlay from '../common/Overlay';
import Modal from '../common/Modal';

function Topnav() {
    const location = useLocation();
    const [isSidenavOpen, setIsSidenavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openSidenav = () => {
        setIsSidenavOpen(true);
    };

    const closeSidenav = () => {
        setIsSidenavOpen(false);
    };

    // eslint-disable-next-line no-unused-vars
    const openModal = content => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsModalOpen(null);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Close sidenav on route change
    useEffect(() => {
        closeSidenav();
    }, [location]);

    return (
        <header
            className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}
        >
            <section className='pageWrapper flex items-center justify-between px-4 py-2'>
                {/* Powerlabs logo */}
                <Logo />

                {/* Topnav links */}
                <nav className='hidden items-center gap-8 md:flex'>
                    {topnavLinks.map((topnavLink, index) => (
                        <TopnavLink
                            key={index}
                            label={topnavLink.label}
                            href={topnavLink.href}
                        />
                    ))}
                </nav>

                <div className='flex items-center gap-4'>
                    {/* Get a quote button */}
                    <button
                        type='button'
                        className='hidden w-fit rounded-full bg-brand_color px-6 py-2.5 font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none sm:inline-block'
                        // onClick={() => {}}
                    >
                        Get a quote
                    </button>

                    {/* Hamburger menu button */}
                    <button
                        type='button'
                        className='inline-block md:hidden'
                        onClick={openSidenav}
                    >
                        <Bars3BottomRightIcon className='size-10' />
                    </button>
                </div>

                {/* Side navigation */}
                {isSidenavOpen && (
                    <Sidenav
                        isSidenavOpen={isSidenavOpen}
                        closeSidenav={closeSidenav}
                    />
                )}

                {/* Overlay */}
                {isSidenavOpen && <Overlay closeSidenav={closeSidenav} />}
            </section>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
            >
                {modalContent}
            </Modal>
        </header>
    );
}

export default Topnav;
