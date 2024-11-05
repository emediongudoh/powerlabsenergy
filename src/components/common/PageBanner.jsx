import PropTypes from 'prop-types';

function PageBanner({ image, title }) {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(135deg, #4AAB3D, #74D66E, #F3F9A7), url(${image})`,
            }}
            className='flex min-h-[50vh] items-center justify-center bg-cover bg-center bg-no-repeat text-white bg-blend-multiply'
        >
            <h2 className='pageTitle'>{title}</h2>
        </div>
    );
}

PageBanner.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
};

export default PageBanner;
