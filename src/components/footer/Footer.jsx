import { CiFacebook, CiLinkedin, CiTwitter } from 'react-icons/ci';

// Custom imports
import Logo from '../common/Logo';
import SocialIcon from '../common/SocialIcon';
import { galleryImages } from '../../constants';
import FooterSection from './FooterSection';
import FooterLinks from './FooterLink';
import FooterGallery from './FooterGallery';

function Footer() {
    const servicesLinks = [
        { href: '#', text: 'Installation' },
        { href: '#', text: 'Servicing and Repairs' },
        { href: '#', text: 'Supply of Solar Panels' },
        { href: '#', text: 'Customer Care' },
    ];

    const companyLinks = [
        { href: '/about', text: 'About' },
        { href: '/services', text: 'Services' },
        { href: '/projects', text: 'Projects' },
        { href: '/contact', text: 'Contact' },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className='mt-8 bg-brand_black text-white'>
            <section className='pageWrapper grid grid-cols-1 gap-8 px-4 py-8 sm:grid-cols-2 md:grid-cols-4'>
                {/* About us */}
                <FooterSection title='About Us'>
                    {/* Powerlabs logo */}
                    <Logo />

                    <p className='text-slate-300'>
                        Africa&apos;s Conservable Future
                    </p>

                    {/* Social icons */}
                    <div className='flex items-center gap-4'>
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
                </FooterSection>

                {/* Services */}
                <FooterSection title='Our Services'>
                    <FooterLinks links={servicesLinks} />
                </FooterSection>

                {/* Company */}
                <FooterSection title='Company'>
                    <FooterLinks links={companyLinks} />
                </FooterSection>

                {/* Gallery */}
                <FooterSection title='Gallery'>
                    <FooterGallery images={galleryImages} />
                </FooterSection>
            </section>

            <section className='p-4 text-center text-sm text-slate-300'>
                &copy; {currentYear} Powerlabs Limited
            </section>
        </footer>
    );
}

export default Footer;
