import PropTypes from 'prop-types';

function SocialIcon({ Icon, href }) {
    return (
        <a
            className='brandTransition rounded-full bg-transparent p-0.5 hover:bg-brand_color'
            href={href}
            target='_blank'
            rel='noopener noreferrer'
        >
            <Icon className='size-7' />
        </a>
    );
}

SocialIcon.propTypes = {
    Icon: PropTypes.elementType.isRequired,
    href: PropTypes.string.isRequired,
};

export default SocialIcon;
