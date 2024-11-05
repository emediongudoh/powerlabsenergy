import { counterData } from '../../constants';
import CounterItem from './CounterItem';

function CounterSection() {
    return (
        <div className='absolute bottom-0 left-1/2 mx-auto hidden w-full max-w-5xl -translate-x-1/2 translate-y-2/3 transform grid-cols-1 gap-8 p-4 sm:grid-cols-2 md:grid md:grid-cols-3'>
            {counterData.map((item, index) => (
                <CounterItem
                    key={index}
                    icon={item.icon}
                    value={item.value}
                    label={item.label}
                />
            ))}
        </div>
    );
}

export default CounterSection;
