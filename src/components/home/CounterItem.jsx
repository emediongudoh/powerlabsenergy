import PropTypes from 'prop-types';

function CounterItem({ icon, value, label }) {
    return (
        <div className='brandTransition border border-brand_black bg-white p-8 shadow-md hover:bg-brand_color/50'>
            <div className='flex items-center gap-6'>
                <img
                    src={icon}
                    alt={label}
                    loading='lazy'
                    className='size-14'
                />
                <span className='text-3xl font-semibold sm:text-5xl'>
                    {value}
                </span>
            </div>

            <p className='mt-4 text-xl font-medium sm:text-2xl'>{label}</p>
        </div>
    );
}

CounterItem.propTypes = {
    icon: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default CounterItem;
