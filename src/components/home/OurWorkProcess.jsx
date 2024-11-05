import { workSteps } from '../../constants';
import SectionHeader from '../common/SectionHeader';
import WorkStep from './WorkStep';

function OurWorkProcess() {
    return (
        <section className='miniPageWrapper mt-8 flex flex-col items-center gap-4 p-4 sm:gap-8'>
            <SectionHeader
                subtitle='Our work process'
                textAlign='center'
            />

            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4'>
                {workSteps.map((step, index) => (
                    <WorkStep
                        key={index}
                        imgSrc={step.imgSrc}
                        stepNumber={step.stepNumber}
                        title={step.title}
                        description={step?.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default OurWorkProcess;
