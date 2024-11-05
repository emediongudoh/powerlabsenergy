import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { CiTwitter } from 'react-icons/ci';

// Components import
import ContactMap from '../components/contact/ContactMap';
import PageBanner from '../components/common/PageBanner';
import ContactForm from '../components/contact/ContactForm';
import ContactItem from '../components/contact/ContactItem';

function Contact() {
    return (
        <>
            {/* Contact page banner */}
            <PageBanner
                image='/bgs/contact_bg.jpg'
                title='Contact'
            />

            {/* Contactify */}
            <div className='pageWrapper my-8 grid grid-cols-12 gap-7 p-4'>
                {/* Contact and social icons */}
                <div className='col-span-full flex h-fit flex-col gap-4 bg-brand_gray p-4 sm:p-8 md:col-span-4'>
                    <h2 className='text-xl font-semibold uppercase'>
                        Contact us
                    </h2>

                    {/* Contact icons */}
                    <ul className='flex flex-col gap-4'>
                        <ContactItem
                            Icon={PhoneIcon}
                            title='Phone'
                            text='+234 814 567 5558'
                        />
                        <ContactItem
                            Icon={CiTwitter}
                            title='Whatsapp'
                            text='+234 814 567 5558'
                            href='https://x.com/PowerlabsLTD'
                        />
                        <ContactItem
                            Icon={EnvelopeIcon}
                            title='Email'
                            text='info@powerlabsenergy.com'
                            href='mailto:info@powerlabsenergy.com'
                        />
                    </ul>
                </div>

                {/* Contact form */}
                <ContactForm />
            </div>

            {/* Contact map */}
            <ContactMap />
        </>
    );
}

export default Contact;
