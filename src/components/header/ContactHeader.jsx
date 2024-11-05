import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { CiFacebook, CiLinkedin, CiTwitter } from 'react-icons/ci';

// Custom imports
import SocialIcon from '../common/SocialIcon';
import ContactInfo from './ContactInfo';

function ContactHeader() {
    return (
        <header className='bg-brand_color/50'>
            <section className='pageWrapper hide__scrollbar flex items-center justify-between gap-4 overflow-x-scroll whitespace-nowrap p-4'>
                {/* Contact icons */}
                <div className='flex items-center gap-4 text-sm'>
                    <ContactInfo
                        Icon={PhoneIcon}
                        href='tel:+234 814 567 5558'
                        text='+234 814 567 5558'
                    />
                    <ContactInfo
                        Icon={EnvelopeIcon}
                        href='mailto:info@powerlabs.energy'
                        text='info@powerlabsenergy.com'
                    />
                </div>

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
            </section>
        </header>
    );
}

export default ContactHeader;
