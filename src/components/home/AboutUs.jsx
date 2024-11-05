import { Link, useLocation } from 'react-router-dom';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

// Custom imports
import SectionHeader from '../common/SectionHeader';

function AboutUs() {
    const location = useLocation();

    return (
        <section className='miniPageWrapper grid grid-cols-1 gap-8 p-4 md:grid-cols-2 md:gap-16'>
            {/* About content */}
            <div className='flex flex-col gap-4'>
                <SectionHeader
                    subtitle='About Powerlabs'
                    textAlign='left'
                />

                <p className='leading-loose'>
                    Powerlabs Limited, founded in March 2022, is a dynamic clean
                    energy company dedicated to illuminating Africa through
                    sustainable energy solutions and advanced manufacturing.
                    Headquartered in Nigeria, Powerlabs is focused on addressing
                    the continent&apos;s energy challenges by providing
                    eco-friendly products that utilize locally sourced and
                    recycled materials.
                </p>

                <p className='leading-loose'>
                    {location.pathname !== '/' ? (
                        <span>
                            In July 2024, Powerlabs Limited won the Development
                            Bank of Nigeria&apos;s (DBN) Innovation Challenge
                            award at the DBN Techpreneur summit 3.0. This
                            accolade underscores the company&apos;s commitment
                            to innovation and its significant impact on the
                            Nigerian energy sector.
                        </span>
                    ) : null}
                </p>

                {/* Learn more button */}
                {location.pathname === '/' ? (
                    <Link
                        to='/about'
                        className='flex w-fit items-center gap-4 rounded-full bg-brand_color px-6 py-2.5 font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-brand_color hover:shadow-none'
                    >
                        Learn more{' '}
                        <ArrowRightCircleIcon className='size-7 -rotate-45' />
                    </Link>
                ) : null}
            </div>

            {/* About image */}
            <img
                src='/about_us.jpg'
                alt='Team spirit'
                loading='lazy'
                className='shadow-[14px_14px_0px_#4AAB3D]'
            />
        </section>
    );
}

export default AboutUs;
