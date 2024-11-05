import AboutUs from '../components/home/AboutUs';
import CounterItem from '../components/home/CounterItem';
import HeroImage from '../components/home/HeroImage';
import OurProject from '../components/home/OurProject';
import OurService from '../components/home/OurService';
import OurWorkProcess from '../components/home/OurWorkProcess';
import WhyChooseUs from '../components/home/WhyChooseUs';
import { counterData } from '../constants';

function Home() {
    return (
        <>
            {/* Hero image */}
            <HeroImage />

            {/* Counter section */}
            <div className='mx-auto grid w-full max-w-5xl transform grid-cols-1 gap-7 p-7 sm:grid-cols-2 md:hidden md:grid-cols-3'>
                {counterData.map((item, index) => (
                    <CounterItem
                        key={index}
                        icon={item.icon}
                        value={item.value}
                        label={item.label}
                    />
                ))}
            </div>

            {/* About us section */}
            <div className='md:mt-48'>
                <AboutUs />
            </div>

            {/* Our service section */}
            <OurService />

            {/* Why choose us */}
            <WhyChooseUs />

            {/* Our project section */}
            {/* <div className='mt-7'>
                <OurProject />
            </div> */}

            {/* Our work process section */}
            <OurWorkProcess />
        </>
    );
}

export default Home;
