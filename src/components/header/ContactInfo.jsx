import PropTypes from 'prop-types';

function ContactInfo({ Icon, href, text }) {
    return (
        <div className='flex items-center gap-1.5'>
            <Icon className='size-7' />
            {href ? <a href={href}>{text}</a> : <span>{text}</span>}
        </div>
    );
}

ContactInfo.propTypes = {
    Icon: PropTypes.elementType.isRequired,
    href: PropTypes.string,
    text: PropTypes.string.isRequired,
};

export default ContactInfo;
