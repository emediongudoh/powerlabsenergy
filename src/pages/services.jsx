import PageBanner from '../components/common/PageBanner';
import OurService from '../components/home/OurService';

function Services() {
    return (
        <>
            {/* Services page banner */}
            <PageBanner
                image='/bgs/services.jpeg'
                title='Services'
            />

            <OurService />
        </>
    );
}

export default Services;
