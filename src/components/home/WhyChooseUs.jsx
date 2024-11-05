import { aboutItems } from '../../constants';
import SectionHeader from '../common/SectionHeader';
import AboutListItem from './AboutListItem';

function WhyChooseUs() {
    return (
        <section className='miniPageWrapper mt-8 grid grid-cols-1 gap-8 p-4 md:grid-cols-2 md:gap-16'>
            {/* About image */}
            <img
                src='services/supply_of_solar_panels.jpg'
                alt='Team spirit'
                loading='lazy'
                className='object-cover shadow-[14px_14px_0px_#4AAB3D]'
            />

            {/* About content */}
            <div className='flex flex-col gap-5'>
                <SectionHeader
                    subtitle='Why choose us'
                    textAlign='left'
                />

                <ul className='flex flex-col gap-4'>
                    {aboutItems.map((item, index) => (
                        <AboutListItem
                            key={index}
                            text={item}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default WhyChooseUs;
