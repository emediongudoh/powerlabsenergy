import PropTypes from 'prop-types';

function Person({ image, name, role }) {
    return (
        <div className='flex flex-col items-center gap-1 text-center'>
            <img
                src={image}
                alt={name}
                loading='lazy'
                className='h-64 w-full rounded-2xl object-cover'
            />

            <h2 className='text-2xl font-semibold'>{name}</h2>
            <p>{role}</p>
        </div>
    );
}

Person.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
};

export default Person;
