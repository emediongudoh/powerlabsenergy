import { teamMember } from '../../constants';
import SectionHeader from '../common/SectionHeader';
import Person from './Person';

function Team() {
    return (
        <section className='miniPageWrapper mt-8 flex flex-col items-center gap-4 p-4 sm:gap-8'>
            <SectionHeader
                subtitle='The Team'
                textAlign='center'
            />

            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4'>
                {teamMember.map((member, index) => (
                    <Person
                        key={index}
                        image={member.image}
                        name={member.name}
                        role={member.role}
                    />
                ))}
            </div>
        </section>
    );
}

export default Team;
