import PropTypes from 'prop-types';

function ServiceCard({ image, title, description }) {
    return (
        <div className='brandTransition flex flex-col gap-4 bg-brand_gray p-5 hover:bg-brand_color hover:text-white'>
            <div>
                <img
                    src={image}
                    alt={title}
                    loading='lazy'
                />
            </div>
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <p className='leading-normal'>{description}</p>
        </div>
    );
}

ServiceCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default ServiceCard;
