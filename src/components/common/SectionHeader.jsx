import PropTypes from 'prop-types';

function SectionHeader({ subtitle, title, textAlign = 'left' }) {
    return (
        <div className={`flex flex-col gap-2.5 text-${textAlign}`}>
            <p className='text-3xl font-semibold text-brand_color'>
                {subtitle}
            </p>
            <h2 className='text-2xl font-semibold sm:text-3xl'>{title}</h2>
        </div>
    );
}

SectionHeader.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string,
    textAlign: PropTypes.oneOf(['left', 'center', 'right']),
};

export default SectionHeader;
