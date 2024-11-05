import PropTypes from 'prop-types';

function FooterGallery({ images }) {
    return (
        <div className='mt-4 grid grid-cols-3 gap-4'>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.image}
                    alt={image.image}
                    loading='lazy'
                    className='h-16 w-full cursor-pointer rounded-md object-cover'
                />
            ))}
        </div>
    );
}

FooterGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default FooterGallery;
