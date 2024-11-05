import { useLocation } from 'react-router-dom';

// Custom imports
import SectionHeader from '../common/SectionHeader';
import { servicesData } from '../../constants';
import ServiceCard from './ServiceCard';

function OurService() {
    const location = useLocation();

    return (
        <section className='miniPageWrapper mt-8 flex flex-col items-center gap-8 p-4'>
            {location.pathname === '/' ? (
                <SectionHeader
                    subtitle='Our services'
                    textAlign='center'
                />
            ) : null}

            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
                {servicesData.map(service => (
                    <ServiceCard
                        key={service.title}
                        {...service}
                    />
                ))}
            </div>
        </section>
    );
}

export default OurService;
