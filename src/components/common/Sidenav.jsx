import {
    EnvelopeIcon,
    MapPinIcon,
    PhoneIcon,
    XCircleIcon,
} from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import { CiFacebook, CiLinkedin, CiTwitter } from 'react-icons/ci';

// Custom imports
import Logo from './Logo';
import { topnavLinks } from '../../constants';
import TopnavLink from '../header/TopnavLink';
import SocialIcon from './SocialIcon';
import ContactInfo from '../header/ContactInfo';

function Sidenav({ isSidenavOpen, closeSidenav }) {
    return (
        <div
            className={`fixed left-0 top-0 flex h-full w-full flex-col gap-6 bg-white p-4 shadow transition-transform duration-300 sm:w-64 md:hidden ${isSidenavOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <div className='flex items-center justify-between'>
                {/* Powerlabs logo */}
                <Logo />

                {/* Close sidenav button */}
                <button
                    type='button'
                    onClick={closeSidenav}
                >
                    <XCircleIcon className='size-10' />
                </button>
            </div>

            <div className='flex flex-col items-center gap-6'>
                {/* Topnav links */}
                {topnavLinks.map((topnavLink, index) => (
                    <TopnavLink
                        key={index}
                        label={topnavLink.label}
                        href={topnavLink.href}
                    />
                ))}

                {/* Get a quote button */}
                <button
                    type='button'
                    className='w-full rounded-full bg-brand_color px-6 py-2.5 font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
                >
                    Get a quote
                </button>

                {/* Contact icons */}
                <div className='flex flex-col gap-4 text-sm'>
                    <ContactInfo
                        Icon={PhoneIcon}
                        href='tel:+234 814 567 5558'
                        text='+234 814 567 5558'
                    />
                    <ContactInfo
                        Icon={EnvelopeIcon}
                        href='mailto:info@powerlabs.energy'
                        text='info@powerlabs.energy'
                    />
                    <ContactInfo
                        Icon={MapPinIcon}
                        text='26 House of Assembly Road, Uyo AKS, Nigeria.'
                    />
                </div>

                {/* Social icons */}
                <div className='flex items-center gap-2.5'>
                    <SocialIcon
                        Icon={CiFacebook}
                        href='https://www.facebook.com/profile.php?id=100088730117698&mibextid=LQQJ4d'
                    />
                    <SocialIcon
                        Icon={CiLinkedin}
                        href='https://www.linkedin.com/company/powerlabsenergy/'
                    />
                    <SocialIcon
                        Icon={CiTwitter}
                        href='https://x.com/PowerlabsLTD'
                    />
                </div>
            </div>
        </div>
    );
}

Sidenav.propTypes = {
    isSidenavOpen: PropTypes.bool.isRequired,
    closeSidenav: PropTypes.func.isRequired,
};

export default Sidenav;
