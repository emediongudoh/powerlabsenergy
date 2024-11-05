import MissionAndVision from '../components/about/MissionAndVision';
import Team from '../components/about/Team';
import AboutUs from '../components/home/AboutUs';
import OurWorkProcess from '../components/home/OurWorkProcess';
import WhyChooseUs from '../components/home/WhyChooseUs';

function About() {
    return (
        <>
            <div className='mt-8'>
                <AboutUs />
            </div>
            <MissionAndVision />
            <OurWorkProcess />
            <WhyChooseUs />
            <Team />
        </>
    );
}

export default About;
